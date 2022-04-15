const newTask = document.querySelector("#input-js");
const btnAdd = document.querySelector("#btn-add-js");
const form = document.querySelector("#form-add-js");
const listTask = document.querySelector("#task-list-js");
const checkBtn = document.querySelector(".check-btn");
const clearBtn = document.querySelector(".clear-btn");

btnAdd.addEventListener("click", (event)=>{
    event.preventDefault()

    const elementLi = document.createElement('li')
    const textTask = document.createElement('p')
    const iconDelete = document.createElement('span')

    textTask.innerText = newTask.value;
    iconDelete.innerText = "🗑"
    
    if(textTask.innerText.trim() === ''){
        
        newTask.classList.add('error');
        newTask.addEventListener('animationend', event =>{
            newTask.classList.remove('error');
        })
    }else{
        listTask.appendChild(elementLi)
        elementLi.appendChild(textTask)
        elementLi.appendChild(iconDelete)
        form.reset()
    }
    newTask.focus()


    iconDelete.addEventListener('click', () => {
        elementLi.remove();
        CheckMarc();
      })
      CheckMarc()
    })





function CheckMarc(){
    let allTasks = document.querySelectorAll('p')
    let check = []

    allTasks.forEach(task => {
        if(!task.classList.contains("checked")){
          check.push(task)
        };
    })
}





