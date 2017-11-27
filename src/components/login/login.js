import React, { Component } from 'react';
import './login.css';
import {
    HashRouter as Router,
} from 'react-router-dom';
import createHistory from 'history/createHashHistory';
const history = createHistory()

const location = history.location

// To stop listening, call the function returned from listen().
const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    // console.log(action, location.pathname, location.state)
})

class LoginPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            readActive: 0,
            username: '',
            passwords: '',
            err: 0,
            team: '',
            OjId: '',
            OjPassword: '',
        }
    }

    componentWillMount() {
        unlisten()
    }

    componentDidMount(){
        fetch('/api/is_login',{
            method:'GET',
            credentials: 'include'
        })
        .then(response=>response.json())
        .then(value=>{
            // console.log(value)
            if(value.err_code === 0){
                history.push('/game')
            }
        })
    }
    handleSubmit = (e) => {
        let username = this.state.username,
            passwords = this.state.passwords;
        fetch('/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
                // "Content-Type":"application/json"
            },
            // body: JSON.stringify({stuid:`${username}`,password:`${passwords}`})
            body: `stuid=${username}&password=${passwords}`
        })
            .then(response => response.json()).then(value => {
                if (value.err_code === 0) {
                    let readActive = this.state.readActive ? 0 : 1,
                        team = value.data.team,
                        OjId = value.data.ojid,
                        OjPassword = value.data.ojpd;
                    this.setState({ readActive, team, OjId, OjPassword});
                } else if(value.err_code===2){
                    history.push('/result')
                }
                else {
                    let err = this.state.err = 1;
                    this.setState({ err })
                    this.state.err = 0;
                }
            })
            .catch(error => console.log(error))

    }


    handleJoinGame = ()=>{
         history.push('/game')
    }

    handleUsernameChange = (e) => {
        let username = e.target.value;
        this.setState({ username })
    }
    handlePasswordsChange = (e) => {
        let passwords = e.target.value;
        this.setState({ passwords });
    }

    render() {
        // let WindowHeight = window.innerHeight,
        //     WindowWidth = window.innerWidth; 
        // let style = { height: WindowHeight, width: WindowWidth }
        let team = this.state.team,
            OjId = this.state.OjId,
            OjPassword = this.state.OjPassword;
        return (
            <Router>
                <div className="login-container">
                <div className="login-background"></div>
  
                <div className="login" >

                    <div className="login-title">南京邮电大学计软·网安院科协</div>
                    <div className="login-subTitle"><div className="login-com">“和巨耀通”</div>杯计算机基础知识大赛</div>
                    <div className="login-table-container">
                        <div className="login-table">
                            <div className="login-table-title">登陆</div>

                            <div className="login-table-username">
                                <p>用户名</p> <input type="text" onChange={this.handleUsernameChange} />
                            </div>
                            <div className="login-table-passwords">
                                <p>密码</p> <input type="password" onChange={this.handlePasswordsChange} />
                            </div>

                            <div className="login-table-submit">
                                <div className="login-table-submit-word"
                                    onClick={this.handleSubmit}
                                >Go!</div>
                            </div>
                            <div className={this.state.err ? "err_after" : "err_before"}>
                                <p>用户名/密码有误！</p>
                                <p>请用队长账号登陆！</p>
                            </div>
                        </div>
                    </div>
                    <div className={this.state.readActive ? "read_after" : "read_before"}>
                        <div className="welcome-team">
                            欢迎你们：<div className="team-name">{team}</div>
                            <div className="oj-name">
                                你们的OJ用户名:  <div>{OjId}</div>
                            </div>
                            <div className="oj-password">
                                密码:  <div>{OjPassword}</div>
                            </div>
                        </div>
                        <div className="read-title">赛前必读</div>
                        <div className="read-content">
                            1. 诚信比赛，请勿作弊，小组内独立完成比赛。<br />
                            2. 请勿对比赛服务器发起攻击或是其他恶意行为。<br />
                            3. 以上行为一经发现，取消比赛资格。<br />
                            4. 请勿使用IE浏览器！！！<br />
                            5. 比赛时间为2小时，请时刻注意比赛时间，比赛结束将自动提交。<br />
                            6. 本次比赛只允许提交一次答案，注意不要提前提交。<br />
                            7. 可以实时保存答案，但提交只有一次。<br />
                            8. 请保持赛场整洁，记得比赛结束后带走自己的东西。<br />
                            9. 如果不明白的地方请询问现场工作人员，大家会很乐意帮助你。<br />
                        </div>
                        <div className="read-join" 
                            onClick={this.handleJoinGame}>
                            点击开始你们的表演!
                        </div>

                    </div>
                    <div className={this.state.readActive ? "read-cover_after" : "read-cover_before"}></div>
                    <div className="CopyRight-login">
                        <p>© 2017 NUPT-SACC All Right Reserved</p>
                    </div>
                </div>
                </div>
            </Router>
        );
    }
}

export default LoginPage;


