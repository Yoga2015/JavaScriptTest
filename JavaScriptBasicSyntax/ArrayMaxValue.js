
/** 求该数组 [3, 6, 2, 10, 9 ] 最大值
 * 
 * 1、声明一个 保存 数组元素中最大的值 的变量 max
 * 2、默认最大值可以是数组中的第一个元素
 * 3、遍历整个数组，把里面的每个数组元素 和 max 相比较
 * 4、如果这个数组元素 大于 max 就把这个数组元素存到max里面，否则继续下一轮比较。
 * 5、最后输出 这个 max 数组元素中最大的值
 */

var arr = [3, 6, 2, 10, 9];
var max = arr[0];
var temp = [];
for (var i = 0; i <= arr.length; i++) { 
    if (arr[i] > max) { 
        max = arr[i];   //如果这个数组元素大于 max就把这个数组元素存到max里面
    }
}

console.log('该数组元素中最大的值：' + max);