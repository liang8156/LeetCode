# LeetCode 69. Sqrt(x)

## 題目
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1 :
```
Input: 4
Output: 2
```
Example 2 :
```
Input: 8
Output: 2
Explanation: 
The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
```
## 翻譯

實作 int sqrt(int x)。  

計算並回傳x的平方根，其中x必為非負整數，由於返回的類別是整，故僅回傳整數的部分。  


## 思路

使用二元搜索法(Binary Search)即可，時間複雜度O(logn)。

## 解題
```
function mySqrt(x) {
    if (x === 0 || x === 1) {
        return x;
    }
    let left = 1, right = x; //initialize binary search indices
    let mid = 0;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (mid ** 2 === x) { // the value is equal
            break;
        } else if (mid ** 2 > x) { // the value is large
            right = mid;
        } else if (mid ** 2 < x && (mid + 1) ** 2 < x) { // the value is small
            left = mid;
        } else {
            if ((mid + 1) ** 2 == x) {
                mid++;
            }
            break;
        }
    }
    return mid;
};
```


[回到首頁](../../README.md)  
[程式碼參考](scripts/index.js)