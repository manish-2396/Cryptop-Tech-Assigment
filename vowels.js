/*
2. Write a JavaScript program to count the number of vowels in a given
string.
Create a function which accepts a string and prints the output like the following:
Input and Output:
countVowels('hesitate')
Count of vowels: 4
countVowels('anagrams')
Count of vowels: 3
countVowels('simultaneously')
Count of vowels: 6
countVowels('passionate')
Count of vowels: 5
countVowels('information technology')
Count of vowels: 8
 */

function countVowels(string){
    let vowels = ["a" , "e" , "i" , "o" , "u"];
    let count = 0;
    
    for(let str of string){
        if(vowels.includes(str)){
            count++;
        }
    }

    return `Count of vowels: ${count}`
}

let ans = countVowels('anagrams')
console.log(ans);