/*
15. Write Javascript code to validate the password.
Create a function which accepts password as string, validate and print the result or errors like the
following:
Valid password should have:
1.
Minimum length of 8
2. Should have atleast one number
3. Should have atleast one Capital letter
4. Should have atleast one of special chars: *, -, +, $, #
Input and Output:
validatepassword(“2FRbL*GgPd2n”)
Password is valid
validatepassword(“frblgn”)
Password is not valid: Minimum length is not 8, No number present, No Capital present,
No special char present
validatepassword(“frb*lg2n”)
Password is not valid: No Capital present
 */

function validatepassword(password) {
  let ans = "Password is not valid: ";
  //case 1
  let len = false;
  if (password.length >= 8) {
    len = true;
  }
  // case 2
  let num1 = false;
  let Num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < password.length; i++) {
    if (Num.includes(password[i])) {
      num1 = true;
      break;
    }
  }
  //case 3

  let Upper = false;
  for (let i = 0; i < password.length; i++) {
    let code = password.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      Upper = true;
    }
  }

  //case 4

  let special = false;
  let special_char = ["*", "-", "+", "$", "#"];
  for (let i = 0; i < password.length; i++) {
    if (special_char.includes(password[i])) {
      special = true;
      break;
    }
  }

  if (num1 && Upper && special && len) {
    return "Password is valid";
  }

  if (!len) {
    ans += "Minimum length is not 8 ,";
  }

  if (!num1) {
    ans += "No number present, ";
  }

  if (!Upper) {
    ans += "No Capital present,";
  }

  if (!special) {
    ans += "No special char present";
  }

  return ans;
}

let ans = validatepassword("frbSl7gn*");
console.log(ans);
