const todoText = document.querySelector('.addtext');
const submitForm = document.querySelector('.add');
const addButton = document.querySelector('.add-todo');
const todoList = document.querySelector('.todolist_content');
const list = document.querySelectorAll('.todolist_content li');//獲得所有todolist 底下的li
let listLength = list.length; //獲得所有li數量

function addingTodo (todotext){
  const html = `<li>
                    <input type="checkbox" id="todo_${listLength}" />
                    <label for="todo_${listLength}">
                        <span class="check"></span>${todotext}
                    </label>
                    <i class="fa-solid fa-pen change"></i>
                    <i class="fa-solid fa-trash delete"></i>
                  </li>`
  todoList.innerHTML += html;
}

function addTodos() {
    if (todoText.value.length) { // check input is empty
        listLength = listLength + 1; // update checkbox id when add new item
        addingTodo(todoText.value);
        submitForm.reset();
    }
}

addButton.addEventListener('click', addTodos);

function deleteTodolist(a) {
    if (a.target.classList.contains('delete')) {
        a.target.parentElement.remove();
    }
}

todoList.addEventListener('click', deleteTodolist);

function changetodolist(a){
    if (a.target.classList.contains('change')) {
      let text;
      let changetext = prompt("change:", "changetext");
      if (changetext == null || changetext == "") {
        text = "User cancelled the prompt.";
      } else {
        text = changetext;
      }
      console.log(changetext);
      console.log(a.target.parentElement);
      console.log(a.target.parentElement.);

    }
  
}

todoList.addEventListener('click', changetodolist);

