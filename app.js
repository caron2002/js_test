//NaN == Not a Number
// if문 condition은 boolean이여야 한다
// and 연산자 &&, or 연산자 ||
const age = parseInt(prompt("How old are you?"));
//parseInt("문자") => NaN 값을 준다
if (isNaN(age) || age < 0) {
  age2 = parseInt(prompt("Please write a real positive number"));
  if (!isNaN(age2)) { // ! == not의 개념
    if (age2 < 18) {
      console.log("You are too young.");
    } else if (age2 < 50) {
      console.log("you great");
    } else {
      console.log("you are too living.");
    }
    
  }
} else {
  console.log("Thank you for writing your age")
}

