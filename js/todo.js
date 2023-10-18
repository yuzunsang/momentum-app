// grab HTML tags
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let todos = []; // todo를 담을 Array

// 문자열 하드코딩(실수 방지)
const TODOS_KEY = "todos";

function saveTodos() {
  // JSON.stringify()는 값이나 객체를 문자열로 반환함.
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentElement; // event.target은 button에 해당하며, 이의 parentElement는 li가 됨.
  li.remove(); // 해당 element 삭제
  todos = todos.filter((todo) => todo.id !== parseInt(li.id));

  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.innerText = newTodo.text;
  button.innerText = "✅";
  button.addEventListener("click", deleteTodo); // button 클릭 시 삭제하기 위해 deleteTodo 함수로 이동

  // parent-child 관계를 정의해줌.
  // Node.appendChild() : 부모 노드의 마지막 자식 리스트로 add.
  // Node.prepend() : 첫번째 자식 리스트로 add.
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function handleTodoSubmit(event) {
  event.preventDefault(); // 브라우저가 새로고침되는 default를 막음

  const newTodo = todoInput.value;
  todoInput.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(newTodoObj);

  paintTodo(newTodoObj); // 입력값을 argument로 가지고 paintTodo 함수로 이동
  saveTodos(); // 입력값을 localStorage에 저장하기 위해 saveTodo 함수로 이동
}

// form 의 submit => handleTodoSubmit 함수로 이동
todoForm.addEventListener("submit", handleTodoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos) {
  // 배열 형태로 localStorage에 저장하기 위해 JSON.stringify()를 했기 때문에 다시 배열의 형태로 가져옴
  const parsedTodos = JSON.parse(savedTodos);

  todos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
