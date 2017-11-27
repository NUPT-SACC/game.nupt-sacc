import React, {Component} from 'react';
import './result.css';
import createHistory from 'history/createHashHistory';
const history = createHistory()
const location = history.location
// To stop listening, call the function returned from listen().
const unlisten = history.listen((location, action) => {
    // location is an object like window.location  console.log(action,
    // location.pathname, location.state)
})

class ResultPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            result: '暂无成绩',
            ojAccount: null,
            ojPassword:null
        }
    }
    componentDidMount() {
        fetch("/api/result", {
                method: "GET",
                credentials: 'include'
            })
            .then(response => response.json())
            .then(value => {
                // console.log(value);
                if (value.err_code === 0) {
                    let result = value.data.result,
                        ojAccount = value.data.ojAccount,
                        ojPassword = value.data.ojPassword;
                    // console.log(result)
                    this.setState({result, ojAccount, ojPassword})
                } else if (value.err_code == -1) {
                    history.push('/');
                }
            })
            .catch(error => console.log(error))
    }

    componentWillUnmount() {
        unlisten();
    }
    render() {
        let result = this.state.result,
            ojAccount = this.state.ojAccount,
            ojPassword = this.state.ojPassword;
        return (
            <div className="result-container">
                <div className="result-background"></div>
                <div className="result">
                    <div className="bg-cover"></div>
                    <div className="result-table">
                        <div className="welcome-team-result">
                            <div className="oj-name">
                                你们的OJ用户名: 
                                <div>{ojAccount}</div>
                            </div>
                            <div className="oj-password">
                                密码: 
                                <div>{ojPassword}</div>
                            </div>
                        </div>
                        <div className="result-table-content">
                            你们的答题得分是：<p>{result || '没有成绩'}</p>
                            <div>最后得分和排名将在短时间出来
                                    <br/>敬请期待！
                            </div>
                        </div>
                    </div>
                      <div className="result-introduce">
                        <div className="com-web">
                          <div className="com-web-img"></div>
                            <p>南京和巨耀通软件技术有限公司官方网站</p>
                        </div>
                        <div className="com-weixin">
                            <div className="com-weixin-img"></div>
                            <p>南京和巨耀通软件技术有限公司微信</p>
                        </div>
                        <div className="sacc-weixin">
                            <div className="sacc-weixin-img"></div>
                            <p>计软·网安院科协微信</p>
                        </div>
                    </div>
                    <div className="CopyRight-result">
                        <p>© 2017 NUPT-SACC All Right Reserved</p>
                    </div>
                </div>
            </div>

        );
    }
}
export default ResultPage;

    