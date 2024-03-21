const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLogInSubmit(event) {
  event.preventDefault(); //예전된 event를 막아준다
  console.log(event);
}

loginForm.addEventListener("submit", onLogInSubmit);
// onLogInSubmit 함수를 호출 할때 event object를 담은 정보를 인수로 받고 호출