// html tag를 JS로 grab
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 자주 쓰는 문자열
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 로그인 버튼 submit 시
function onLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;

  localStorage.setItem(USERNAME_KEY, userName);

  WelcomeUser();
}

// login창 없애기 + welcome창 보여주기
function WelcomeUser() {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${userName}!`;
}

// localStorage의 key에 저장할 value의 변수를 선언
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 어떤 창을 보여줄 지
if (savedUsername) WelcomeUser();
else {
  loginForm.addEventListener("submit", onLoginSubmit);
}
