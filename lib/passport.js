let passport = require('passport'),
    User = require('../models/user'),
    Team = require('../models/team'),
    Participator = require('../models/participator'),
    localStrategy = require('passport-local').Strategy;

const ojAccounts = require('../lib/ojaccounts').accounts,
    accountsLen = ojAccounts.length;
let  cur = 0;

passport.use('local.login', new localStrategy({
    usernameField: 'stuid',
    passwordField: 'password'
}, (stuid, password, done) => {
    if (!stuid || !password) {
        return done(null, false, {
            err_code: -2,
            err_mess: '搞事！'
        });
    }
    stuid = stuid.toUpperCase();
    Team.find({}, (err, res) => {
        if (err) {
            return done(err);
        }
        const leaders = res.map(r => r.leader.stuid),
            teaminfo = res.map(r => {
                return {teamId: r._id, teamName: r.teamName}
            }),
            idx = leaders.indexOf(stuid);
        if (idx == -1) {
            return done(null, false, {
                err_code: 1,
                err_mess: '用户名不存在或者该用户不是队长！'
            });
        } else {
            User.findOne({
                stuid: stuid
            }, (err, user) => {
                if (err) {
                    return done(err);
                }
                if (!user) {
                    return done(null, false, {
                        err_code: 1,
                        err_mess: '用户名不存在或者密码错误！'
                    });
                }
                if (!user.activation) {
                    return done(null, false, {
                        err_code: 1,
                        err_mess: '用户未激活！'
                    });
                }
                user.comparePassword(password, (err, isMatch) => {
                    if (err) {
                        return done(err);
                    }
                    if (isMatch) {
                        let teamName = teaminfo[idx].teamName,
                            teamId = teaminfo[idx].teamId;
                        Participator.findOne({
                            teamId: teamId
                        }, (err, res) => {
                            if (err) {
                                return done(err);
                            }
                            if (!res) {
                                if (cur >= accountsLen) {
                                    return done(null, false, {err_code: -2, err_mess: '搞事！'});
                                } else {
                                    const {ojAccount, ojPassword} = ojAccounts[cur];
                                    cur++;
                                    Participator.create({
                                        teamId: teamId,
                                        teamName: teamName,
                                        ojAccount: ojAccount,
                                        ojPassword: ojPassword
                                    }, (err, res) => {
                                        if (err) {
                                            return done(err);
                                        }
                                        return done(null, {
                                            teamId: teamId,
                                            teamName: res.teamName,
                                            ojAccount: res.ojAccount,
                                            ojPassword: res.ojPassword
                                        });
                                    });
                                }
                            } else {
                                return done(null, {
                                    teamId: teamId,
                                    teamName: res.teamName,
                                    ojAccount: res.ojAccount,
                                    ojPassword: res.ojPassword
                                });
                            }
                        });
                    } else {
                        return done(null, false, {
                            err_code: 1,
                            err_mess: '用户名不存在或者密码错误！'
                        });
                    }
                });
            });
        }
    });
}));

passport.serializeUser((team, done) => {
    done(null, team.teamId);
});

passport.deserializeUser((id, done) => {
    Participator.findOne({
        teamId: id
    }, (err, res) => {
        if (err) {
            return done(err);
        }
        return done(null, {
            teamId: res.teamId,
            teamName: res.teamName,
            ojAccount: res.ojAccount,
            ojPassword: res.ojPassword
        });
    })
});
