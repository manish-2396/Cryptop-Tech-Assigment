/*
18. Write a Javascript code to split a number into its digits
Create a function which accepts a number and prints the output like the following:
Input and Output:
splitNumber(10)
[1, 0]splitNumber(931)
[9, 3, 1]
splitNumber(19375)
[1, 9, 3, 7, 5]
 */

function splitNumber(num){
    let ans = []
    while(num>0){
        let digit = num%10;
        num = Math.floor(num/10)
        ans.unshift(digit)
    }

    return ans
}

let  ans  = splitNumber(19375)
console.log(ans);