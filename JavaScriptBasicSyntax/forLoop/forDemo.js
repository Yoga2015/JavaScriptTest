/** 求 1-100之间所有数的  总和 与 平均值
 * 
 * 1、需要定义一个  总和 变量 sum , 平均值 变量  average
 * 2、1-100之间这么多数字相加，需要用到 for 循环
 * 3、计算 总和 的公式： sum = （1+100）*100/2 
 * 4、计算 平均值 的公式：  average = sum /100
 * 5、输出 总和的计算结果 ：sum、平均值 的计算结果 ：average
 */
var sum = 0;
var average = 0;
for (var i = 1; i <= 100; i++) {
    // sum = sum + i;
    sum += i;
}
average = sum / 100;

console.log('1-100之间所有数的总和 ：' + sum);  // 5050
console.log('1-100之间所有数的平均值 ：' + average); // 50.5



/** 求 1-100之间 所有偶数的和
 * 
 *  1、需要定义一个  偶数的和 变量 sum ,
 *  2、for 循环 里 进行 条件判断 是否是1-100之间的偶数 ，是就相加
 *  3、输出 1-100之间 所有偶数的总和 ：sum
 */
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        sum = sum + i;
    }
}
console.log('1-100之间所有偶数的总和 ：' + sum); // 2550



/** 求100以内 7的倍数总和
 * 
 *  1、需要定义一个  7的倍数总和 变量 sum ,
 *  2、for 循环 里 进行 条件判断 是否是 100以内 7的倍数 ，
 *    7 、14、21、28、35、42、49、56、63、70、77、84、91、98 ;若是 ，就相加
 *  3、输出 100以内 7的倍数的总和 ：sum
 */
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 7 == 0) {
        sum = sum + i;
    }
}
console.log('100以内 7的倍数的总和 ：' + sum);  // 735



/** 使用 for 循环 打印 4行 5列矩形 ，要求每次只能输出一个 *  
 *  
 *  1、需要定义一个 4行 5列矩形 变量 sum 
 *  2、需要用到 双 for 循环
 *  3、外层 for 循环 负责 行数  ：4行
 *  4、里层 for 循环 负责 列数 ：5 列 ，每行 5列 后 就换行 
 *  5、输出 打印 4行 5列矩形 
 */
var sum = '';
for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 5; j++) {
        sum = sum + '*';
    }
    sum += '\n';
}
console.log(sum);


/** 使用 for 循环 打印 三角形  
 * 
 *  1、需要定义一个 变量 sum   装 三角形 
 *  2、需要用到 双 for 循环
 *  3、外层 for 循环 负责 行数  ：5行
 *  4、里层 for 循环 负责 列数 ，第1行 就 1列，然后换行 ，第2行 就 2列，然后换行，依次类推
 *  5、输出 打印 三角形 *
 */
var sum = '';
for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        sum = sum + '*';
    }
    sum += '\n';
}

console.log(sum)


/** 使用for 循环 打印  99 乘法表
 * 
 *  1、需要定义一个  变量 str  装 99 乘法表
 *  2、需要用到 双 for 循环
 *  3、外层 for 循环 负责 行数  ：9行
 *  4、里层 for 循环 负责 列数 ：第1行 就 1列，然后换行 ，
 *     第2行 就 2列，然后换行，依次类推
 *  5、输出 打印  99 乘法表
 */
var str = '';
for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        str += j + 'x' + i + '=' + j * i + '\t';
    }
    str += '\n';
}
console.log(str);


/**  while循环：接收用户输入的 用户名 和 密码 
 *  若用户名 为 admin ,密码 为 123456,则提示用户登录成功；
 *  否则，让用户一直输入。
 * 
 *  使用 while 循环
 *  1、使用 prompt()  弹出 ‘请输入 用户名’ 并保存到 username 变量
 *  2、使用 prompt()  弹出 ‘请输入 密码’ 并保存到 password 变量
 *  3、如果 username ===  'admin'  && password === 123456  
 *  弹出 alert(‘用户登录成功’)，否则弹出 alert(‘请输入正确的用户名和密码！’)
 */
while (true) {
    var username = prompt('请输入 用户名');
    var password = prompt('请输入 密码');
    if (username === 'admin' && password === 123456) {
        alert('用户登录成功');
        break;
    } else {
        alert('请输入正确的用户名和密码！');

    }
}


/** 求 整数 1- 100 的累加值，但 要求跳过 所有个数为 3 的数 【用continue实现】
 *  
 *  1、需要 定义一个 变量 sum  保存 1- 100 的累加值
 *  2、for 循环  100次  需要用到计数器 i
 *  2.1 条件判断 ：如果 i 不等于 所有个数为 3 的数 ：
 *      3 13  23  33  43  53  63  73  83  93
 *     非 所有个数为 3 的数 就进行累加。
 *  3、弹出 1-100之间所有 非 个数为 3 的数  的累加值
 */

var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 10 == 3) {
        continue;
    }
    sum += i;
}
console.log(sum)



