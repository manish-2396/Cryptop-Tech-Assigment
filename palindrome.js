/*
14. Write Javascript code to print whether given no is palindrome or not
Palindromic numbers remain the same when the digits are reversed.. Create a function which
accepts a number and prints whether it is palindrome or not:
Input and Output:
isPalindrome(1441)
true
isPalindrome
false
 */

function isPalindrome(num){
    num = num.toString();
    let i=0;
    let j=num.length-1;
    while(i<j){
        if(num[i] === num[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }

    return true
}

console.log(isPalindrome(1441))