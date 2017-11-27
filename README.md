- 登陆接口
    - /api/login
    - method: POST
    - 提交的数据结构： 
    ```json
    {
        "stuid": "B12030313",
        "password": "2333333"
    } 
    ```
    - 返回的数据结构
    ```json
    {
        "err_code": 0,
        "err_mess": "",
        "data": {
            "team":"teamName",
            “teamid”：“teamId”
            "ojid":"ojAccount",
            "ojpd":"ojPassword"
        }
    }
    ```

* 0 成功
* 1 失败

- 参赛接口
    - /api/save_answers
    - method: POST
    - 返回的数据结构
    ```json
    {
        "err_code": 0,
        "err_mess": "",
        "data": {
            question: [{
                question_id: 0,
                question_content: "下面那种语言最接近lisp？",
                question_options: ["c", "js", "python", "haskell"],
                 
            },......],
            end_time: endTime,
            start_time: startTime,
             "saved_answer": [
                [1,2],
                [2,3],
                [0,1],
                [].........   
           ]
        }
    }
    ```
* 0 成功
* -1 未登录
* 2 已提交过
* 3 时间已到
* 4 未开始

- 存储接口
    - /api/save_answers
    - method: POST
    - 返回的数据结构
  - 提交的数据结构：
    ```json
    {
        "method": "save",
        "answer": [
         [1,2],
         [2,3],
         [0,1],
         [].........   
        ]
    } 
    ```
    - 返回的数据结构
    ```json
    {
        "err_code": 0,
        "err_mess": "",
        "data": {
                "team_id": "65889455"
            }
        }
    }
    ```

* 0 成功
* -1 未登录
* 2 已提交过
* 3 时间已到
* 4 未开始

- 题目答案提交接口
    - /api/submit_answer
    - method: POST
    - 提交的数据结构：
    ```json
    {
        "method": "submit",
        "answer": [
         [1,2],
         [2,3],
         [0,1],
         [].........   
        ]
    } 
    ```
    - 返回的数据结构
    ```json
    {
        "err_code": 0,
        "err_mess": "",
        "data": {
            "team_id": "65889455",
            "result":99
            }
        }
    }
    ``
* 0 成功
* -1 未登录
* 2 已提交过
* 3 时间已到
* 4 未开始

同步时间
    - /api/sync_time
        - method: get
        - 返回的数据结构
        ```json
        {
            "err_code": 0,
            "err_mess": "",
            "data": {
                time: time
            }
        }
        ```