/*
9. Write a JavaScript program to find the longest string and index from a
given array
Create a function which accepts array of strings and prints the output like the following:
Input and Output:
longestIndex(['architect', 'help', 'concentrate'])
concentrate 2
longestIndex(['determine', 'introductory', 'adequate', 'ability'])
introductory 1
longestIndex(['outsourcing', 'problem', 'process', 'product'])
outsourcing 0
longestIndex(['promoted', 'projections', 'publishing'])
publishing 2
longestIndex(['webmaster', 'understanding', 'uncommon', 'telecommunications'])
telecommunications 3
 */

function longestIndex(arr){
    let max = 0;
    let temp;
    for(let str of arr){
        if(max < str.length){
            max = str.length;
            temp = `${str} ${arr.indexOf(str)}`;
        }
    }

    return temp;
}

let ans = longestIndex(['determine', 'introductory', 'adequate', 'ability']);
console.log(ans);
