/*
3. Write a JavaScript program to capitalize the first letter of each word of
a given string
Create a function which accepts a string and prints the output like the following:
Input and Output:
capitalizeWord('the train leaves in ten minutes')
The Train Leaves In Ten Minutes.
capitalizeWord('they speak english at work')
They Speak English At Work.
capitalizeWord('mary enjoys to work')
Mary Enjoys To Work
capitalizeWord('cycling uphill from this hill is really dangerous')Cycling Uphill From This Hill Is Really Dangerous
capitalizeWord('does he play tennis?')
Does He Play Tennis?
 */

function capitalizeWord(string) {
  string = string.trim().split(" ");

  for (let i = 0; i < string.length; i++) {
    let tem = string[i].split("");
    tem[0] = tem[0].toUpperCase();
    string[i] = tem.join("");
  }
  return string.join(" ");
}

let ans = capitalizeWord("does he play tennis?");

console.log(ans);
