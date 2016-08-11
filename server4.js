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