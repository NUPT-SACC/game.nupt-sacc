let express = require('express'),
    passport = require('passport'),
    ques = require('../lib/ques'),
    Participator = require('../models/participator'),
    config = require('../config'),
    router = express.Router();

const questions = ques.questionList,
    correctAns = ques
    .questionList
    .map(q => q.question_answer.join('')),
    startTime = config.startTime,
    endTime = config.endTime;

router.post('/login', (req, res, next) => {
    passport.authenticate('local.login', (err, teamInfo, mess) => {
        if (err) {
            return next(err);
        }
        if (!teamInfo) {
            res.json(mess);
        } else {
            req.logIn(teamInfo, (err) => {
                if (err) {
                    return next(err);
                } else {
                    res.json({
                        err_code: 0,
                        err_mess: "ok",
                        data: {
                            team: teamInfo.teamName,
                            teamid: teamInfo.teamId,
                            ojid: teamInfo.ojAccount,
                            ojpd: teamInfo.ojPassword
                        }
                    });
                }
            });
        }
    })(req, res, next);
});

router.get('/questions', (req, res, next) => {
    if (!req.user) {
        res.json({
            err_code: -1,
            err_mess: '未登录！'
        });
    } else {
        const teamId = req.user.teamId,
            NOW = new Date();
        if (NOW < startTime) {
            res.json({
                err_code: 4,
                err_mess: '比赛未开始！',
                data: {
                    start_time: startTime,
                    end_time: endTime
                }
            });
        } else if (NOW > endTime) {
            res.json({
                err_code: 3,
                err_mess: '比赛已结束！',
                data: {
                    start_time: startTime,
                    end_time: endTime
                }
            });
        } else {
            Participator.findOne({
                teamId: teamId
            }, (err, par) => {
                if (err) {
                    return next(err);
                }
                const {
                    submit,
                    answers: saved_ans
                } = par;
                if (submit) {
                    res.json({
                        err_code: 2,
                        err_mess: '已经提交过了！'
                    });
                } else {
                    res.json({
                        err_code: 0,
                        err_mess: 'ok',
                        data: {
                            start_time: startTime,
                            end_time: endTime,
                            question: questions,
                            saved_answer: saved_ans
                        }
                    });
                }
            });
        }

    }
});

router.post('/save_answers', (req, res, next) => {
    if (!req.user) {
        res.json({
            err_code: -1,
            err_mess: '未登录！'
        });
    } else {
        const NOW = new Date(),
            teamId = req.user.teamId,
            answers = req.body.answers || [],
            method = req.body.method;
        if (method !== 'save') {
            res.json({
                err_code: -2,
                err_mess: '搞事！'
            })
        } else {
            if (NOW < startTime) {
                res.json({
                    err_code: 4,
                    err_mess: '比赛未开始！'
                });
            } else if (NOW > endTime) {
                res.json({
                    err_code: 3,
                    err_mess: '比赛已结束！'
                });
            } else {
                Participator.findOne({
                    teamId: teamId
                }, (err, par) => {
                    if (err) {
                        return next(err);
                    }
                    if (par.submit) {
                        res.json({
                            err_code: 2,
                            err_mess: '您已提交，无法再次保存！'
                        });
                    } else {
                        Participator.findOneAndUpdate({
                            teamId: teamId
                        }, {
                            $set: {
                                answers: answers
                            }
                        }, (err, re) => {
                            if (err) {
                                return next(err);
                            }
                            res.json({
                                err_code: 0,
                                err_mess: 'ok'
                            })
                        });
                    }
                });
            }
        }
    }
});

function calcScore(submitans, singlenum) {
    return submitans.reduce((acc, ans, idx) => {
        let cur = 0;
        if (ans == correctAns[idx]) {
            if (idx < singlenum) {
                cur = 1;
            } else {
                cur = 2;
            }
        }
        return acc + cur;
    }, 0);
}

router.post('/submit_answer', (req, res, next) => {
    if (!req.user) {
        res.json({
            err_code: -1,
            err_mess: '未登录！'
        });
    } else {
        const NOW = new Date(),
            teamId = req.user.teamId,
            answers = req.body.answers || [],
            method = req.body.method;
        if (method !== 'submit') {
            res.json({
                err_code: -2,
                err_mess: '搞事！'
            })
        } else {
            if (NOW < startTime) {
                res.json({
                    err_code: 4,
                    err_mess: '比赛未开始！'
                });
            } else if (NOW > endTime) {
                res.json({
                    err_code: 3,
                    err_mess: '比赛已结束！'
                });
            } else {
                const submitAns = answers.map(ans => ans.join('')),
                    score = calcScore(submitAns, 60);
                Participator.findOne({
                    teamId: teamId
                }, (err, par) => {
                    if (err) {
                        return next(err);
                    }
                    if (par.submit) {
                        res.json({
                            err_code: 2,
                            err_mess: '只能提交一次！'
                        });
                    } else {
                        Participator.findOneAndUpdate({
                            teamId: teamId
                        }, {
                            $set: {
                                answers: answers,
                                result: score,
                                submit: true
                            }
                        }, (err, re) => {
                            if (err) {
                                return next(err);
                            }
                            res.json({
                                err_code: 0,
                                err_mess: 'ok'
                            });
                        });
                    }
                });
            }
        }
    }
});

router.get('/result', (req, res, next) => {
    if (!req.user) {
        res.json({
            err_code: -1,
            err_mess: '未登录！'
        });
    } else {
        const NOW = new Date(),
            teamId = req.user.teamId;
        if (NOW < startTime) {
            res.json({
                err_code: 4,
                err_mess: '比赛未开始！'
            });
        } else {
            Participator.findOne({
                teamId: teamId
            }, (err, re) => {
                if (err) {
                    return next(err);
                }
                res.json({
                    err_code: 0,
                    err_mess: 'ok',
                    data: {
                        ojAccount: re.ojAccount,
                        ojPassword: re.ojPassword,
                        result: re.result
                    }
                });
            });
        }
    }
});

router.get('/sync_time', (req, res, next) => {
    res.json({
        err_code: 0,
        err_mess: "ok",
        data: {
            time: new Date()
        }
    })
});

router.get('/is_login', (req, res, next) => {
    if (req.user) {
        res.json({
            err_code: 0,
            err_mess: 'ok'
        });
    } else {
        res.json({
            err_code: -1,
            err_mess: '未登录！'
        });
    }
});

module.exports = router;