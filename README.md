```
node s1.js
node server4.js
```

```
var http = require('http');
var fs = require('fs');
//data.toString()  �� utf-8 һ������������ node ���������࿴�Ķ�
http.createServer(function(req,res,next){

    console.log(112)
     fs.readFile('www/index.html',function(err,data){
         console.log(err)
         if(err){
             res.write('404')
         }else{
             res.write(data.toString());
             console.log(data.toString()); // �� utf-8 һ������������ node ���������࿴�Ķ�
         }
         res.end()
     });

}).listen(8889,function(){
    console.log('���ʶ˿� localhost:8889')
});
```


```
const fs=require('fs');

// ������ reactFile �첽��ȡ�ļ����ص�
var data2=fs.readFile('1.node','utf-8');
console.log(data2); //undefined
console.log('over');//over



//������ readFilSync ͬ����ȡ�ļ����ص�  ��һ������û����ɣ���һ���������
var data=fs.readFileSync('1.node','utf-8');
console.log(data); //console.log('welcome');
console.log('over');//over


```