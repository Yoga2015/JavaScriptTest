/**
 * 1、双重 for 循环 语法结构
    for (外层的初始化变量; 外层的条件表达式; 外层的操作表达式) {

        for (内层的初始化变量; 内层的条件表达式; 内层的操作表达式) {
            //执行语句
        }
    }
 2、我们可以把里面的循环看做事外层循环的语句
 3、外层循环循环一次，里面的循环执行全部

 */

for (var i = 1; i <= 3; i++) {
    console.log('这是外层的循环第' + i + '次');
    for (var j = 1; j <= 3; j++) {
        console.log('这是里层循环第' + j + '次');
    }
}

/**
 * 打印5行5列星星
 * 1 内层循环负责一行打印 5个星星
 * 2 外层循环负责打印 5行
*/
var str = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= 5; j++) {
        str = str + '*';  //字符串拼接
    };
    //如果一行打印完毕 5个 * 星星就要另起一行 加  \n
    str = str + '\n';  //加 转义符 \n 换行   
};
console.log(str);