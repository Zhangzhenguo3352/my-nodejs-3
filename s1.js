const fs=require('fs');

// ������ reactFile �첽��ȡ�ļ����ص�
var data2=fs.readFile('1.node','utf-8');
console.log(data2); //undefined
console.log('over');//over



//������ readFilSync ͬ����ȡ�ļ����ص�  ��һ������û����ɣ���һ���������
var data=fs.readFileSync('1.node','utf-8');
console.log(data); //console.log('welcome');
console.log('over');//over


