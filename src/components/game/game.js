import React, {Component} from 'react';
import Markdown from 'markdown-to-jsx';
import './game.css';
import createHistory from 'history/createHashHistory';
const history = createHistory()

const location = history.location

// To stop listening, call the function returned from listen().
const unlisten = history.listen((location, action) => {
    // location is an object like window.location
  //  console.log(action, location.pathname, location.state)
})

const letters = ["A","B","C","D"];

//单选
class Single extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioValue: this.props.saved_answer.length==0?-1:this.props.saved_answer
        };
    }
    handleChange = (e) => {
        this.setState({radioValue: e.target.value});
        this.props.handleChange([Number(e.target.value)])
    }
    render() {
        let radios = this
            .props
            .radios
            .map((radio, index) => {
                return (
                    <div className="radio-container">
                        
                          <input
                            type="radio"
                            value={index}
                            checked={this.state.radioValue == index}
                            onChange={this.handleChange}/>
                        {letters[index]+". "}
                        {radio}
                    </div>
                )
            })
        return (
            <div>
                <Markdown>
                    {this.props.question_content}
                </Markdown>
                <div className="radiocheck">
                    {radios}
                </div>
            </div>
        );
    }
}

//多选
class Multiple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkValue: this.props.saved_answer.length ? this.props.saved_answer : []
        }
    }
    handleChange = (e) => {
        const {checked, value} = e.target;
        let {checkValue} = this.state;

        if (checked && checkValue.indexOf(value) == -1) {
            checkValue.push(Number(value));
        } else {
            checkValue = checkValue.filter(i => i !== Number(value));
        }
        checkValue.sort();
        this.setState({checkValue});
        this
            .props
            .handleChange(checkValue);
    }
    render() {
        let checks = this
            .props
            .checks
            .map((check, index) => {
                return (
                    <div className="check-container">
                          
                           <input
                            type="checkbox"
                            value={index}
                            checked={this
                            .state
                            .checkValue
                            .indexOf(index) !== -1}
                            onChange={this.handleChange}/>
                             {letters[index]+". "}
                        {check}
                     
                    </div>
                )
            })
        return (
            <div className="multiple-container">
                <Markdown>
                    {this.props.question_content}
                </Markdown>
                <div className="radiocheck">
                    {checks}
                </div>
            </div>
        );
    }
}

//计时器
class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            red:false
        };
    }

    componentDidMount() {
        fetch("/api/sync_time", {
                method: "GET",
                credentials: 'include'
            })
            .then(response => response.json())
            .then(value => {
                if (value.err_code === 0) {
                    let date = new Date(value.data.time);
                    this.setState({date});
                } else {
                    console.log("时间炸了");
                }
            })
            .catch(error => console.log(error))
            this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        unlisten();
    }

    tick() {
        let start = this.props.start,
            end = this.props.end;
        this.setState((prevState, props) => ({
            date: new Date(prevState.date.valueOf() + 1000)
        }));

        if (this.state.date < start) {
            this.props.handleWillStart();
        } else if (this.state.date > end) {
            this.props.handleEnd();
        }  else {
            this.props.handleStart();
            let minutes = Math.floor(((end-this.state.date ) / 1000) % 3600 / 60);
            if (minutes<=9) {
                this.setState({red:true});
            }
        }
    }

    render() {
        let hours,
            minutes,
            second,
            red="red-"+this.state.red ,
            start = this.props.start,
            end = this.props.end;
        if (this.state.date < start) {
            hours = Math.floor((start-this.state.date ) / 3600000);
            minutes = Math.floor(((start-this.state.date ) - hours * 3600000) / 60000);
            second = Math.floor(((start -this.state.date ) - hours * 3600000 - minutes * 60000) / 1000);
        } else if (this.state.date > start && this.state.date < end) {
            hours = Math.floor((end - this.state.date) / 3600000);
            minutes = Math.floor(((end - this.state.date) - hours * 3600000) / 60000);
            second = Math.floor(((end - this.state.date) - hours * 3600000 - minutes * 60000) / 1000);
            
        }
        let clock = this.props.type == true
            ? <h2 className={red}>比赛剩余时间{hours}小时{minutes}分钟{second}秒</h2>
            : <h2>比赛还有{hours}小时{minutes}分钟{second}秒开始</h2>
        return (
            <div className="clock-container">
                {clock}
            </div>
        );
    }
}

function initAns(n){
    let ret = [];
    for (let i = 0; i < n; i++){
        ret[i] = [];
    }
    return ret;
}

//问答节目
class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: this.props.status || -1,
            answers: [],
            questions: [],
            save_success: '',
            end: new Date(),
            start: new Date()
        }
    }

    componentDidMount() {
        fetch("/api/questions", {
                method: 'GET',
                credentials: 'include'
            })
            .then(response => response.json())
            .then(value => {
          //      console.log(value)
                if (value.err_code === 0) {
                    let status = 0,
                        questions = value.data.question,
                        answers = value.data.saved_answer.length ? value.data.saved_answer : initAns(value.data.question.length),
                        end = new Date(value.data.end_time),
                        start = new Date(value.data.start_time);
                    this.setState({status, answers, questions, end, start});

                } else if (value.err_code == 2) {
                    let status = 2;
                    this.setState({status});
                    setTimeout(()=>{
                        history.push('/result');
                    },2000);
                } else if (value.err_code == 3) {
                    let status = 3, start = new Date(value.data.start_time), end = Date(value.data.end_time);
                    this.setState({status,start, end});
                } else if (value.err_code == 4) {
                    let status = 4, start = new Date(value.data.start_time), end = Date(value.data.end_time);
                    this.setState({status,start, end});
                } else if (value.err_code == -1) {
                    history.push('/')
                }
            })
            .catch(error => console.log(error))
    }

    handleChange(index, answer) {
        this.state.answers[index] = answer;
    }

    handleSave = (e) => {
        e.preventDefault();
        this.setState({save_success: true})
        setTimeout(() => {
            this.setState({save_success: false})
        }, 1000)
    //    console.log(this.state.answers);
        fetch("/api/save_answers", {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify({
                    "method": "save",
                    "answers": this.state.answers
                })
            })
            .catch(error => console.log(error))
    }

    handleSubmit = () => {
        let answers = this.state.answers, unanswered = [];
        answers.map((ans,idx)=>{
            if(ans.length == 0){
                unanswered.push(idx + 1);
            }
        });
        let conf = true;
        if(unanswered.length){
            conf = confirm(unanswered.join(',') + ' 未完成，你确定要继续吗？');
        } else {
            conf = confirm('比赛只允许提交一次，你确定要提交吗？');
        }
        if (conf) {
            this.setState({status: 2});
          //  console.log(this.state.answers);
            fetch("/api/submit_answer", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json"
                },
                    body: JSON.stringify({
                        "method": "submit",
                        "answers": answers
                    })
                })
                .then(response => response.json())
                .then(value => {
            //        console.log("submit",value);
                    if (value.err_code === 0 || value.err_code === 2 || value.err_code === 3) {
                        history.push('/result')
                    } else if (value.err_code === -1 || value.err_code === 4) {
                        history.push('/');
                    }
                })
                .catch(error => console.log(error))
        }
    }

    handleEnd = () => {
        this.setState({status: 3})
    }

    handleWillStart = () => {
        this.setState({status: 4})
    }

    handleStart = () => {
        this.setState({status: 0})
    }

    render() {
        let questions = this.state.questions,
            answers = this.state.answers,
            singles = questions
                .slice(0, 60)
                .map((question,index) => {
                    return (
                        <div className="single-question">
                            <Single
                                question_content={question.question_content}
                                radios={question.question_options}
                                saved_answer={answers[index]}
                                handleChange={this.handleChange.bind(this, index)}
                                index={index}/>
                        </div>
                    )
                }),
            multiples = questions
                .slice(60)
                .map((question, index) => {
                    return (
                        <div className="multiple-question">
                            <Multiple
                                question_content={question.question_content}
                                checks={question.question_options}
                                saved_answer={answers[index + 2]}
                                handleChange={this.handleChange.bind(this, index + 2)}
                                index={index + 2}/>
                        </div>
                    )
                }),
            endPage = (
                <div className="div-games">
                    <h1>比赛已结束</h1>
                </div>
            ),
            willStartPage = (
                <div className="div-games">
                    <Clock
                        end={this.state.end}
                        type={false}
                        handleStart={this.handleStart}
                        handleEnd={this.handleEnd}
                        handleWillStart={this.handleWillStart}
                        start={this.state.start}
                        end={this.state.end}/>
                </div>
            ),
            submitPage = (
                <div className="div-games" >
                    <h1>您已提交</h1>
                </div>
            ),
            saveStatus = 'save-' + this.state.save_success,
            questionPage = (
                <div >
                    <div className="questions-container">
                        <h1>单选</h1>
                        {singles}
                        <h1>多选</h1>
                        {multiples}
                        <button className="btn-submit" onClick={this.handleSubmit}>提交</button>
                    </div>
                    <div className="div-ssat">
                        <Clock
                            end={this.state.end}
                            type={true}
                            handleStart={this.handleStart}
                            handleEnd={this.handleEnd}
                            handleWillStart={this.handleWillStart}
                            start={this.state.start}
                            end={this.state.end}/>
                        <button className="btn-save" onClick={this.handleSave}>保存</button>
                        <h3 className={saveStatus}>保存成功</h3>
                    </div>
                </div>
            );
        let page = willStartPage;
        if (this.state.status == 3  ) {
            page = endPage;
            setTimeout(()=>{
                history.push('/result');
            },2000)
        } else if (this.state.status == 4) {
            page = willStartPage
        } else if (this.state.status == 0) {
            page = questionPage
        } else if (this.state.status == 2) {
            page =submitPage;
            setTimeout(()=>{
                history.push('/result');
            },2000)
        }
        return (
            <div className="game-container">
                {page}
            </div>
        );
    }
}

export default Game;
