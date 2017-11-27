module.exports = {
    questionList: [
        {
            question_id: 0,
            question_content: `### 1.某个妹子暗恋科协的一名dalao，她想在dalao生日那天送给他一个机械键盘（这位dalao手劲不大，且缺一个适合在活动室用的键盘），以下机械键盘中最适合送出去的是：`,
            question_options: [
                "Cherry G80-3494LYCUS-0 红轴", "HHKB Professional2 Type-S", "Corsair K70 青轴", "FILCO FKBN104ML/EB2 黑轴"
            ],
            question_answer: [0]
        }, {
            question_id: 1,
            question_content: `### 2.很多学弟抱怨自己的机器散热不好，关于笔记本的散热，下列说法不正确的是：`,
            question_options: [
                "进风口不足会导致散热效率上不去", "降频只在温度达到温度墙时产生，但温度墙还是有办法绕过的", "轻薄和散热从来不能完美共存，轻薄的游戏本为了散热，风扇转速会很高", "由于芯片面积等问题，CPU的温度在大部分情况下高于GPU"
            ],
            question_answer: [1]
        }, {
            question_id: 3,
            question_content: `### 3.科协的钱大大在帮助他人解决硬件问题时有一个（奇怪的）准则，就是绝不给没有搭载SSD的电脑看病（钱大大认为没有SSD不清真）。因此，不少学弟纷纷加装了SSD（尽管不少是走SATA而不是PCI-E的）。下列哪个观点说出去是要被钱大大鄙视的？`,
            question_options: [
                "在寿命、读写速度和成本上，TLC小于MLC小于SLC ", "SSD很蛋疼，一旦坏掉里面的数据全没了，且目前来说无法恢复这些数据", "SSD普遍存在掉速问题，随着使用速度会变慢", "SSD的寿命等同于读取寿命"
            ],
            question_answer: [3]
        }, {
            question_id: 4,
            question_content: `### 4.科协的某位dalao闲着蛋疼，上淘宝买了一颗坏件的图拉丁CPU当自己的钥匙扣使用，看起来逼格很高的样子。哪些措施最有可能会大幅降低CPU的寿命？`,
            question_options: [
                "CPU常年在100℃以上的温度运行", "使CPU总是在高于最大睿频的频率下运行", "为了降低发热，将CPU的电压适当调低", "为了超频，解锁CPU的TDP"
            ],
            question_answer: [0]
        }, {
            question_id: 5,
            question_content: `### 5.听说长期被Intel压得抬不起头的AMD现在终于依靠Ryzen翻身了，科协众多大佬表示非常欢迎，他们早就对Intel的挤牙膏行径深怀不满。实际上在之前，Intel在产品上也被AMD吊打过。下列说法中说出去需要负责任的是：`,
            question_options: [
                "Intel曾经搞过自己的64位指令集IA64，但最后还是弃了", "Intel曾经用暴力增加流水线的方式来提升处理器频率，但结果适得其反", "Intel曾通过反编译AMD的产品来加快自己产品的研发", "AMD曾经将自己的移动GPU业务低价卖给了高通"
            ],
            question_answer: [2]
        }, {
            question_id: 6,
            question_content: `### 6.一般情况下，以下哪类通用计算机简易性最高（）`,
            question_options: [
                "单片机", "多核机", "PC机", "超级计算机"
            ],
            question_answer: [1]
        }, {
            question_id: 7,
            question_content: `### 7.以下特性中，不属于在C++11中新增的是: `,
            question_options: [
                "lambda表达式", "多线程标准库", "auto关键字和 decltype() 函数 ", "智能指针"
            ],
            question_answer: [3]
        }, {
            question_id: 8,
            question_content: `### 8.Python的包管理工具是？`,
            question_options: [
                "npm", "PyPI", "CPAN", "Rpm"
            ],
            question_answer: [1]
        }, {
            question_id: 9,
            question_content: `### 9.以下STL类型中，哪个类型的迭代器属于随机访问迭代器? `,
            question_options: [
                "vector", "set", "stack ", "queue"
            ],
            question_answer: [0]
        }, {
            question_id: 10,
            question_content: `### 10.以下哪个函数可以接受多个参数？`,
            question_options: [
                `
                    def func1(*args):
                        pass 
                    `, `
                    def func2(**args):
                        pass

                    `, `
                    def func3(args*):
                        pass
                    `, `
                    def func4(args**):
                        pass
                    `
            ],
            question_answer: [0]
        }, {
            question_id: 11,
            question_content: `### 11.下面哪项不是计算机中的基本逻辑运算（）`,
            question_options: [
                "逻辑或", "逻辑加", "逻辑乘", "逻辑除"
            ],
            question_answer: [3]
        }, {
            question_id: 12,
            question_content: `### 12.CPU的基本组成部分不包括（）`,
            question_options: [
                "运算器", "cache", "控制器", "计数器"
            ],
            question_answer: [3]
        }, {
            question_id: 13,
            question_content: `### 13.系统总线上传送信息的方式是（）`,
            question_options: [
                "串行传送", "并行传送", "分时传送", "分量传送"
            ],
            question_answer: [2]
        }, {
            question_id: 14,
            question_content: `### 14.以下哪种半导体存储器不具备可擦除性（）`,
            question_options: [
                "RAM", "ROM", "PROM", "EPROM"
            ],
            question_answer: [1]
        }, {
            question_id: 15,
            question_content: `### 15.汉字的主要输入编码不包括一下哪项（）`,
            question_options: [
                "数字编码", "拼音编码", "语音编码", "字形编码"
            ],
            question_answer: [2]
        }, {
            question_id: 16,
            question_content: `### 16.以下不属于静态读写存储器（SRAM）的信号线的是（）`,
            question_options: [
                "地址线", "电源线", "数据线", "控制线"
            ],
            question_answer: [1]
        }, {
            question_id: 17,
            question_content: `### 17.以下哪个数据库不是关系型数据库:`,
            question_options: [
                "MySQL", "MariaDB", "HBase", "PostgreSQL"
            ],
            question_answer: [2]
        }, {
            question_id: 18,
            question_content: `### 18.以下哪个负载均衡软件无法进行七层负载均衡：`,
            question_options: [
                "LVS", "HAProxy", "Nginx", "Tengine"
            ],
            question_answer: [0]
        }, {
            question_id: 19,
            question_content: `### 19.在通常配置下，Nginx和 PHP-FPM 之间通过什么协议进行通信：`,
            question_options: [
                "CGI", "FastCGI", "HTTP", "HTTPS"
            ],
            question_answer: [1]
        }, {
            question_id: 20,
            question_content: `### 20.Node.js 主要使用了以下哪种I/O模型：`,
            question_options: [
                "阻塞、同步I/O模型", "阻塞、异步I/O模型", "非阻塞、同步I/O模型", "非阻塞、异步I/O模型"
            ],
            question_answer: [3]
        }, {
            question_id: 21,
            question_content: `### 21.以下哪个不是 Apache 软件基金会的项目：`,
            question_options: [
                "Nginx", "Hadoop", "Maven", "HBase"
            ],
            question_answer: [0]
        }, {
            question_id: 22,
            question_content: `### 22.以下哪个网站不支持 Git 协议：`,
            question_options: [
                "GitHub", "Bitbucket", "Coding", "以上都支持"
            ],
            question_answer: [3]
        }, {
            question_id: 23,
            question_content: `### 23.开源日志管理方案 ELK 中的 E 是：`,
            question_options: [
                "Engine dragon", "Elasticsearch", "Edonkey", "EmiyaLog"
            ],
            question_answer: [1]
        }, {
            question_id: 24,
            question_content: `### 24.以下不属于数据序列化方案的是`,
            question_options: [
                "Apache Cassandra", "Apache Thrift", "Google Protobuf", "Caucho Hessian "
            ],
            question_answer: [0]
        }, {
            question_id: 25,
            question_content: `### 25.以下哪个框架没有实时流处理能力：`,
            question_options: [
                "Apache Storm", "Apache Spark", "Apache Flink", "Apache Hadoop"
            ],
            question_answer: [3]
        }, {
            question_id: 26,
            question_content: `### 26.在 Haskell 语言中, 每一个符合 Applicative 的类都符合的是 `,
            question_options: [
                "Functor", "Monoid", "Monad", "Maybe"
            ],
            question_answer: [0]
        }, {
            question_id: 27,
            question_content: `### 27.Linux 下面某文件的权限是drwx―x―x,以数值形式表示为()`,
            question_options: [
                "711", "700 ", "777", "744"
            ],
            question_answer: [0]
        }, {
            question_id: 28,
            question_content: `### 28.在 Linux 终端环境下,新建文件夹使用的命令是`,
            question_options: [
                "touch folder", "cd folder", "mkdir folder ", "cat folder"
            ],
            question_answer: [2]
        }, {
            question_id: 29,
            question_content: `### 29.执行命令chmod 746 sacc.txt之后，该文件的权限是`,
            question_options: [
                "rwxr--rw- ", "rw-r--r-- ", "--xr--rwx", "rwxr--r--"
            ],
            question_answer: [0]
        }, {
            question_id: 30,
            question_content: `### 30.在日常管理中，通常CPU会影响系统性能的情况是：`,
            question_options: [
                "CPU已满负荷地运转", "CPU的运行效率为30%", "CPU的运行效率为50%", "CPU的运行效率为80%"
            ],
            question_answer: [2]
        }, {
            question_id: 31,
            question_content: `### 31.一台主机要实现通过局域网与另一个局域网通信，需要做的工作是:`,
            question_options: [
                "配置域名服务器", "定义一条本机指向所在网络的路由", "定义一条本机指向所在网络网关的路由", "定义一条本机指向目标网络网关的路由"
            ],
            question_answer: [2]
        }, {
            question_id: 32,
            question_content: `### 32.建立动态路由需要用到的文件有`,
            question_options: [
                "/etc/hosts", "/etc/HOSTNAME", "/etc/resolv.conf", "/etc/gateways"
            ],
            question_answer: [3]
        }, {
            question_id: 33,
            question_content: "### 33.王同学正在努力地学习JavaScript，他写下如下代码，请问正确运行结" + 
    `
    scope="global"
    var  checkscope= function(){
        var scope="local";
        var myscope="local";
        return [scope,myscope];
    }
    console.log(checkscope())
            `,
            question_options: [
                "[ 'local', 'local' ] ", "[ 'global', 'local' ]", "[ 'local', 'global' ]", "[ 'global', 'global' ]"
            ],
            question_answer: [0]
        }, {
            question_id: 34,
            question_content: "### 34.上古时期js纷争不断，后来ES6大法横空出世，然而老牌js不肯推出江湖，以下代码则是一场大战，请问运行结果是" + 
    `
    constfuncs = () => {
    let funcs = [];
    for(var i=0;i<10;i++)
        funcs[i] = ()=> i;
        return funcs;
    }
    let funcs = constfuncs();
    console.log(funcs[5]())
    `,
            question_options: [
                "0", "5", "10", "15"
            ],
            question_answer: [2]
        }, {
            question_id: 35,
            question_content: `### 35.在科协内部，总有dalao对Intel的大船感兴趣。某个不愿透露姓名的渣渣组了一台双路的台式机（虽然是老旧的Sandy Bridge架构），下列关于该台式机的说法中，正确的是：`,
            question_options: [
                "该电脑的主板芯片组可能是C602", "该电脑的CPU可能是E7-8870x2", "该电脑可能自带6个SATA 3.0接口", "该电脑可能只有两根内存插槽"
            ],
            question_answer: [0]
        }, {
            question_id: 36,
            question_content: `### 36.在笔记本电脑的设计中存在不少脑残的设计，下列哪些设计不会让老司机angry？`,
            question_options: [
                "搭载中高端游戏显卡的笔记本屏轴出风", "主板上CPU的位置位于WASD键处", "各类接口集中在笔记本右侧", "CPU和GPU的显存供电处使用大面积的均热板覆盖"
            ],
            question_answer: [3]
        }, {
            question_id: 37,
            question_content: `### 37.很多情况下稳定性是硬件的第一要求。下面哪些行为最容易会出问题？`,
            question_options: [
                "将品牌不同，容量、频率和时序都相同的两根DDR4内存条混插", "使用带有ES或QS标识的处理器", "解锁GPU中被屏蔽的流处理器以提高性能", "使用功率约等于机器所能达到的最大功率的电源"
            ],
            question_answer: [1]
        }, {
            question_id: 38,
            question_content: `### 38.Base类中的protected成员x，在被Derived类private继承后，对Derived类而言该成员x的属性为: `,
            question_options: [
                "public", "private", "protected", "x在Derived中不可见"
            ],
            question_answer: [1]
        }, {
            question_id: 39,
            question_content: `### 39.若存在模板函数autofunction_2(T&t,U&u)->decltype(t*u)，则function_2(2.75,'a')返回的类 型为:`,
            question_options: [
                "int", "char", "double ", "&double"
            ],
            question_answer: [2]
        }, {
            question_id: 40,
            question_content: `### 40.在linux环境下使用clang作为编译器，如果不显式提供类似于-std=c++03的编译参数，那么默认使用的 C++标准是:`,
            question_options: [
                "C++98", "C++03", "C++11 ", "C++17"
            ],
            question_answer: [0]
        }, {
            question_id: 40,
            question_content: `### 41.下面哪项不是计算机的性能指标（）`,
            question_options: [
                "总线长度", "总线宽度", "存储器容量", "存储器带宽"
            ],
            question_answer: [0]
        }, {
            question_id: 41,
            question_content: `### 42.已知[x]补=110011011，求x=（）`,
            question_options: [
                "101", "633", "-633", " -101"
            ],
            question_answer: [3]
        }, {
            question_id: 42,
            question_content: `### 43.以下哪种不是主存与cache的地址映射方式（）`,
            question_options: [
                "全相联方式", "直接方式", "间接方式", "组相联方式"
            ],
            question_answer: [2]
        }, {
            question_id: 43,
            question_content: `### 44.不应该出现在.h头文件中的是: `,
            question_options: [
                "全局变量的声明", "模板类成员函数的实现", "声明使用某个命名空间", "内联函数的定"
            ],
            question_answer: [2]
        }, {
            question_id: 44,
            question_content: `### 45.以下哪个函数需要返回this指针? `,
            question_options: [
                "拷贝构造函数", "赋值运算符重载", "移动构造函数", " 重载运算符+="
            ],
            question_answer: [3]
        }, {
            question_id: 45,
            question_content: `### 46.下面哪个语句在Python中是非法的?`,
            question_options: [
                "x = y = z =1", "x = ( y = z + 1 )", "x, y = y, x", "x += y"
            ],
            question_answer: [1]
        }, {
            question_id: 46,
            question_content: `### 47.以下不能创建一个字典的语句是`,
            question_options: [
                "dict1 = {}", "dict2 = { 3:5 }", "dict3 = { [1, 2, 3]: ‘njupt’ }", "dict4 = { (1, 2, 3): ‘njupt’ }"
            ],
            question_answer: [3]
        }, {
            question_id: 47,
            question_content: `### 48.关于USB接口方面，很多学弟傻傻分不清，提出了很多不太正确的观点，下列观点中不正确的是：`,
            question_options: [
                "Type-C至少有USB3.0的速度", "USB3.0的接口颜色通常跟USB2.0不一样，且3.0有至少5个触点，而2.0不会超过5个触点", "USB接口的机械键盘不能完全实现全键无冲，只有PS/2接口可以", " Type-C能够支持Thunderbolt3，但主板上需要额外的模块支持"
            ],
            question_answer: [0]
        }, {
            question_id: 48,
            question_content: `### 49.在科协，拥有一台显示器是一件能够大幅提高工作效率的事情，当然自己的笔记本屏幕素质不错的话也可以。以下参数中哪个是要被拉出来批判的：`,
            question_options: [
                "屏幕色域72%NTSC", "最大亮度300cd/m^2(Typ.)", "屏幕色深262k（6-bit", "屏幕可视角85/85/20/35（左/右/上/下）"
            ],
            question_answer: [3]
        }, {
            question_id: 49,
            question_content: `###  50.如果一个类中有类似 virtual void function_1() = 0; 的成员函数声明，那么这个类:`,
            question_options: [
                "不可以被实例化", "不可以被用作基类", "不可以定义 function_1() 的函数实现", "不可以声明类指针"
            ],
            question_answer: [0]
        }, {
            question_id: 50,
            question_content: "### 51. 科协的STD大大，写代码的水平不知道比你们高到哪里去了，我和他谈笑风生，有一天他给我看了下面的js代码(使用es6语法)"+
    `
    console.log([1,3,4,6].reduceRight((a, b) => (a + b * 2))
`
            + " 请问，会输出什么呢 ?",
            question_options: [
                "45", "78", "22", "undefined"
            ],
            question_answer: [2]
        }, {
            question_id: 51,
            question_content: `### 52 函数式编程现在突然火热起来了，但是函数式编程的历史其实已经非常古老了，那么，哪个是最早的函数式编程语言呢？`,
            question_options: [
                "Lisp", "Haskell", "Go", "Scheme"
            ],
            question_answer: [0]
        }, {
            question_id: 52,
            question_content: `### 53 小明是个可爱的男孩子，大一就加入了科协，然后他发现科协里面有好多块叫做树莓派的小电脑，那么这种树莓派的cpu是什么架构呢？`,
            question_options: [
                " MIPS", "Power", "ARM", "UltraSPARC"
            ],
            question_answer: [2]
        }, {
            question_id: 53,
            question_content: `### 54 https相比于http而已，表面上只是+1s，实际上连通讯的端口都不一样，那么https使用的是什么端口呢`,
            question_options: [
                "6556", "8080", "3389", "443"
            ],
            question_answer: [3]
        }, {
            question_id: 54,
            question_content: `### 55.下面那个题目不是JavaScript保留字`,
            question_options: [
                "goto", "abstract", "super", "array"
            ],
            question_answer: [3]
        }, {
            question_id: 55,
            question_content: `### 50.如果一个类中有类似 virtual void function_1() = 0; 的成员函数声明，那么这个类:`,
            question_options: [
                "不可以被实例化", "不可以被用作基类", "不可以定义 function_1() 的函数实现", "不可以声明类指针"
            ],
            question_answer: [0]
        }, {
            question_id: 56,
            question_content: `### 51。科协的STD大大，写代码的水平不知道比你们高到哪里去了，我和他谈笑风生，有一天他给我看了下面的js代码(使用es6语
        console.log([1,3,4,6].reduceRight((a, b) => (a + b * 2))
            请问，会输出什么呢 ?
            `,
            question_options: [
                "45", "78", "22", "undefined"
            ],
            question_answer: [2]
        }, {
            question_id: 57,
            question_content: `### 52 函数式编程现在突然火热起来了，但是函数式编程的历史其实已经非常古老了，那么，哪个是最早的函数式编程语言呢？`,
            question_options: [
                "Lisp", "Haskell", "Go", "Scheme"
            ],
            question_answer: [0]
        }, {
            question_id: 58,
            question_content: `### 53 小明是个可爱的男孩子，大一就加入了科协，然后他发现科协里面有好多块叫做树莓派的小电脑，那么这种树莓派的cpu是什么架构呢？`,
            question_options: [
                " MIPS", "Power", "ARM", "UltraSPARC"
            ],
            question_answer: [2]
        }, {
            question_id: 59,
            question_content: `### 54 https相比于http而已，表面上只是+1s，实际上连通讯的端口都不一样，那么https使用的是什么端口呢`,
            question_options: [
                "6556", "8080", "3389", "443"
            ],
            question_answer: [3]
        }, {
            question_id: 60,
            question_content: `### 61.WHY同学在得到一份别人开源的程序之后，修改并加上了__很多__自己的东西，因此他不想再将他的程序开源。他想知道下列哪些开源协议在修改源码之后可以选择闭源？`,
            question_options: [
                "Apache", "BSD", "GPL", "MIT"
            ],
            question_answer: [0, 1, 3]
        }, {
            question_id: 61,
            question_content: `### 62.WHY同学在了解了开源协议之后，开始对MIT协议感兴趣。他想知道下列哪些开源项目采用的是MIT协议？`,
            question_options: [
                "angular（前端框架）", "git（版本控制系统）", "react（前端框架）", "ruby on rails（ruby的web框架)"
            ],
            question_answer: [0, 3]
        }, {
            question_id: 62,
            question_content: `### 63.WHY同学对于阿里巴巴的工作十分的向往，主要就是因为他们在开源方面做了很多，下面哪些开源项目是阿里的？`,
            question_options: [
                "egg.js（node的web框架）", "weex（原生应用框架）", "dva.js（前端框架）", "electron（跨平台应用框架）"
            ],
            question_answer: [0, 1, 2]
        }, {
            question_id: 63,
            question_content: `### 64.以下是java关键字的是`,
            question_options: [
                "class", "implements", "goto", "override"
            ],
            question_answer: [0, 1]
        }, {
            question_id: 64,
            question_content: `### 65.下面哪些是Thread类的方法（）`,
            question_options: [
                "start()", "run()", "exit()", "getPriority()"
            ],
            question_answer: [0, 1, 3]
        }, {
            question_id: 65,
            question_content: `### 66.下列说法正确的是（）`,
            question_options: [
                "LinkedList继承自List", "AbstractSet继承自Set", "HashSet继承自AbstractSet", "WeakMap继承自HashMap"
            ],
            question_answer: [0, 2]
        }, {
            question_id: 66,
            question_content: `### 67.使用thread标准库编写多线程程序，每个线程在被创建后，需要在thread对象被销毁前回收线程所使用的 资源。哪些函数可以完成这一工作?(函数形参已省略)`,
            question_options: [
                "thread::detach()", "thread::move()", "thread::swap()", "thread::join()"
            ],
            question_answer: [0, 3]
        }, {
            question_id: 67,
            question_content: `### 68.以下哪些lambda表达式可以修改外部x的值? `,
            question_options: [
                "&](){++x;}", "[&](int x){x = 0;}", "[&x,=]{x = y+z;return x;}", "[x,&](){x = 1;y = x;}"
            ],
            question_answer: [0, 2]
        }, {
            question_id: 68,
            question_content: `### 69.江湖上解释型语言和编译型语言纷争不断，那么解释型语言的特性有什么？`,
            question_options: [
                "非独立", "效率低 ", "可以到处运行", "学习容易"
            ],
            question_answer: [0, 1, 2]
        }, {
            question_id: 69,
            question_content: `### 70.如何让一个区块居中？`,
            question_options: [
                "center", "center-block", "horizontal-center", "vertical-center"
            ],
            question_answer: [0, 1]
        }, {
            question_id: 70,
            question_content: `### 71.下列结果为true的有`,
            question_options: [
                "undefined==null", "' '===0", "false==[0]", "123441 == '123441'"
            ],
            question_answer: [0, 2, 3]
        }, {
            question_id: 71,
            question_content: `### 72.本次答题系统的技术栈是`,
            question_options: [
                "react", "express ", "angular", "koa"
            ],
            question_answer: [0, 1]
        }, {
            question_id: 72,
            question_content: `### 73.曾经有一位长者，他向人们传授的经验有`,
            question_options: [
                "too young，too simple", "苟利国家生死以", "你们这些年轻人，总想搞一个大新闻", "如果我们的铁蹄继续前进"
            ],
            question_answer: [0, 1, 2]
        }, {
            question_id: 73,
            question_content: `### 74.Python中列表切片操作非常方便,若 l = range(100)以下哪种形式是正确的?`,
            question_options: [
                "l[-3]", "l[-2:13]", "l[::3]", "l[2-3]"
            ],
            question_answer: [0, 1, 2, 3]
        }, {
            question_id: 74,
            question_content: `### 75.Python中的注释符有那几种?`,
            question_options: [
                " #...", "//...", " /*...*/", "'''...'''"
            ],
            question_answer: [0, 3]
        }, {
            question_id: 75,
            question_content: `### 71.下列结果为true的有`,
            question_options: [
                "undefined==null", "' '===0", "false==[0]", "123441 == '123441'"
            ],
            question_answer: [0, 2, 3]
        }, {
            question_id: 76,
            question_content: `### 72.本次答题系统的技术栈是`,
            question_options: [
                "react", "express ", "angular", "koa"
            ],
            question_answer: [0, 1]
        }, {
            question_id: 77,
            question_content: `### 73.曾经有一位长者，他向人们传授的经验有`,
            question_options: [
                "too young，too simple", "苟利国家生死以", "你们这些年轻人，总想搞一个大新闻", "如果我们的铁蹄继续前进"
            ],
            question_answer: [0, 1, 2]
        }, {
            question_id: 78,
            question_content: `### 74.Python中列表切片操作非常方便,若 l = range(100)以下哪种形式是正确的?`,
            question_options: [
                "l[-3]", "l[-2:13]", "l[::3]", "l[2-3]"
            ],
            question_answer: [0, 1, 2, 3]
        }, {
            question_id: 79,
            question_content: `### 75.Python中的注释符有那几种?`,
            question_options: [
                " #...", "//...", " /*...*/", "'''...'''"
            ],
            question_answer: [0, 3]
        }
    ]
}
