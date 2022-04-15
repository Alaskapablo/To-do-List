const btnAdd = document.querySelector("#btn-add-js");

btnAdd.addEventListener("click", (event)=>{
    event.preventDefault()
    // console.log(btnAdd)

    var form = document.querySelector("#form-add-js")
    var taskObj = getInfoFromInput(form)
    // console.log(taskObj.task)
   
    const elementLi = createLi(taskObj)
   

    var taskList = document.querySelector("#task-list-js")
    taskList.appendChild(elementLi)

    form.reset()
})


// var taskValid = 

// function validTask(taskObj){
//     if(taskObj.task < 0){
       
//     }
// }

function createLi(taskObj){
    const elementLi = document.createElement('li')
    elementLi.classList.add("task-item")

    const checkTask = document.createElement('input');
    checkTask.type = 'checkbox';
    checkTask.classList.add("input-task")

    const textTask = document.createElement('p')
    textTask.classList.add("task-text")

    const iconDel = document.createElement('span')
    iconDel.classList.add("del-task")

    textTask.textContent = taskObj.task
    iconDel.innerText = "🗑"
    elementLi.appendChild(checkTask)
    elementLi.appendChild(textTask)
    elementLi.appendChild(iconDel)
   
    return elementLi;
}

function getInfoFromInput(form){
    var taskObj = {
        task: form.task.value
    }
    return taskObj
}