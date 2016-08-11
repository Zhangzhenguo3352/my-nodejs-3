```
node s1.js
node server4.js
```

```
var http = require('http');
var fs = require('fs');
//data.toString()  和 utf-8 一样，让人类在 node 命令让人类看的懂
http.createServer(function(req,res,next){

    console.log(112)
     fs.readFile('www/index.html',function(err,data){
         console.log(err)
         if(err){
             res.write('404')
         }else{
             res.write(data.toString());
             console.log(data.toString()); // 和 utf-8 一样，让人类在 node 命令让人类看的懂
         }
         res.end()
     });

}).listen(8889,function(){
    console.log('访问端口 localhost:8889')
});
```


```
const fs=require('fs');

// 体现了 reactFile 异步读取文件的特点
var data2=fs.readFile('1.node','utf-8');
console.log(data2); //undefined
console.log('over');//over



//体现了 readFilSync 同步读取文件的特点  上一个加载没有完成，下一个不会继续
var data=fs.readFileSync('1.node','utf-8');
console.log(data); //console.log('welcome');
console.log('over');//over


```