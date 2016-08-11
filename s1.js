const fs=require('fs');

// 体现了 reactFile 异步读取文件的特点
var data2=fs.readFile('1.node','utf-8');
console.log(data2); //undefined
console.log('over');//over



//体现了 readFilSync 同步读取文件的特点  上一个加载没有完成，下一个不会继续
var data=fs.readFileSync('1.node','utf-8');
console.log(data); //console.log('welcome');
console.log('over');//over


