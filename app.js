const input=document.getElementById("todo_input");
const form=document.querySelector(".todo_form");
const submitBtn=document.getElementsByClassName("todo_btn");
const todo_container=document.getElementById("todo_container");

const starfConf =() =>{

const todos=localStorage.getItem("todos");

if(!todos){
    localStorage.setItem("todos", JSON.stringify([]));
}
}

starfConf();


const addtoDo =(e) =>{
   e.preventDefault();

 
   const todo ={
       text:input.value,
       isCompleted:false,

   };

   const todos=JSON.parse(localStorage.getItem("todos"));
   todos.push(todo);
   localStorage.setItem("todos", JSON.stringify(todos));
   console.log(todos);

   const todoDiv=document.getElementById("div");
   todoDiv.classList.add(todo);
   
   const todoLeft=document.createElement("div");
   todoLeft.classList.add("todo_left");


   const todoText=document.createElement("span");
   todoText.classList.add("todo_text");
   todoText.textContent=todo.text;

   todo_container.appendChild(todoDiv);
   todoLeft.appendChild("todo_text");
}

form.addEventListener("submit", addtoDo);





