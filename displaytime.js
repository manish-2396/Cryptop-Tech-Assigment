/*
1. Write a javascript program to convert seconds to human readable
format
Create a function which accepts a number and prints the output like the following:
Input and Output:
displayTime(50)
50 secs
displayTime(120)
2 mins
displayTime(135)
2 mins 15 secs
displayTime(3600)
1 hour
displayTime(7500)
2 hours 5 mins
 */

function displayTime(time) {
  let hour = 0;
  let min = 0;
  let sec = 0;

  if (time >= 60) {
    sec = time % 60;
    let Min = Math.floor(time / 60);
    if (Min >= 60) {
      min = Min % 60;
      hour = Math.floor(Min / 60);
    } else {
      min = Min;
    }
  } else {
    sec = time;
  }

  let ans = "";

  if (hour) {
    hour > 1 ? (ans += `${hour} hours`) : (ans += `${hour} hour`);
  }
  if (min) {
    min > 1 ? (ans += ` ${min} mins`) : (ans += `${min} min`);
  }
  if (sec) {
    sec > 1 ? (ans += ` ${sec} secs`) : (ans += `${sec} sec`);
  }

  return ans;
}

let ans = displayTime(3600);
console.log(ans);
