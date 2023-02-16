/*
17. Write Javascript code to calculate the next higher prime number
Create a function which accepts a number and prints the output like the following:
Input and Output:
nextPrime(38)
41
nextPrime(115)
127
nextPrime(2000)
2003
 */

function isPrime(num) {
  if (num === 1) {
    return false;
  } else if (num === 2) {
    return true;
  }
  let count = 0;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  if (count === 0) {
    return true;
  } else {
    return false;
  }
}

function nextPrime(num) {
  num = num + 1;
  while (true) {
    if (isPrime(num)) {
      return num;
    } else {
      num++;
    }
  }
}

console.log(nextPrime(38));
