let burger_menu = document.getElementById('menu-bar');
let nav_bar = document.getElementById('nav-bar');
let i = 2
let add_btn = document.getElementById('add-btn')
let todo_inp = document.getElementById('todo-inp')
let todos = document.getElementById('todo-list')
let err_msg = document.getElementById('err-msg')
let todos_arr = []
let index = 0

burger_menu.addEventListener('click',()=>{
    if(i%2==0)
        nav_bar.style.animation = "slidercome 0.5s ease-in-out 1 forwards"
    else
        nav_bar.style.animation = "slidergo 0.5s ease-in-out 1 forwards"
    i++
})

add_btn.addEventListener('click',()=>{
    if(todo_inp.value==0){
        err_msg.style.display = "block"
    }
    else{
        err_msg.style.display = "none"
        todos_arr.push(todo_inp.value)
        let list = document.createElement('input')
        addtodo(todo_inp.value,list)
        let index = todos_arr.indexOf(list.value)
        list.addEventListener('click',()=>{
            todos_arr.splice(index,1)
            list.style.textDecoration ="line-through"
        })

        list.addEventListener("dblclick",()=>{
            todos.removeChild(list)
            index = todos_arr.indexOf(list)
            if(index>=0){
                todos_arr.splice(index,1)
            }
        })
    }

    todo_inp.value = ""
})

function addtodo(value,list){
        list.value = value
        list.setAttribute("readonly","")
        todos.appendChild(list)
}