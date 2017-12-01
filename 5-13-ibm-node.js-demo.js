/*Created by Administrator on 2017/5/13.*/

/*these modules need to be imported in order to use them. Node has several
  (/'sev(ə)r(ə)l/ adj 一些，几个的 ) modules. They are like any #include or
  import statement in other languages */
var http = require("http"); //(require /rɪ'kwaɪə/ vt 需求，要求，命令)
var url = require("url");

/*The most important line in any Node file. This function does the actual process of creating
  the server. Technically(/'teknikli/ adv 技术上), Node tells the underlying
  (/ʌndə'laɪɪŋ/ adj 根本的，基础的) operating system that whenever a connection is made, this
  particular(/pə'tɪkjʊlə/ adj 特定的) callback function should be executed. Since we're creating
  a web service with REST API, we want an HTTP Server, which requires the http variable we created
  in th lines above.  Finally, you can see that the callback method receives a "request and "response"
  object automatically /ˌɔ:tə'mætikəli/ 自动地. This should be familiar to any PHP or Java programmer    */
http.createServer(function(request, response){
    response.writeHead(200, {"Content-type": "text/plain"}); //写入头部
    var params = url.parse(request.url, true).query;  //parameter参数
    var input = params.number;
    var numInput = new Number(input); //这个input是在url的末尾增加的，比如下面的url最后的27
    var numOutput = new Number(Math.random() * numInput).toFixed(0);
    response.write(numOutput);
    response.end();
}).listen(80);
console.log("Random Number Generator Running... (随机数生成器运行....) ");

//由于这些代码创建了一个简单的RESTful API, 所以可以使用Web浏览器来访问这个应用程序。
//浏览器中输入: http://localhost/?number=27 可以看到页面那种有一个随机数字，如果刷新可以得到另外一个随机数字。

/**
  符合REST设计风格的Web API称为RESTful API。它从以下三个方面资源进行定义：
    (1.)直观简短的资源地址：URI，比如： http://example.com/resources/ 。
    (2.)传输的资源：Web服务接受与返回的互联网媒体类型，比如：JSON，XML，YAML等。
    (3.)对资源的操作：Web服务在该资源上所支持的一系列请求方法（比如：POST，GET，PUT或DELETE）。
 **/