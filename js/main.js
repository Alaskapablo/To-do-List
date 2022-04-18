const btnAdd = document.querySelector("#btn-add-js");

btnAdd.addEventListener("click", (event)=>{
    event.preventDefault()
//    console.log(btnAdd)

    var form = document.querySelector("#form-add-js")
    var taskObj = getInfoFromInput(form)
    // console.log(taskObj.task)

    const elementLi = createLi(taskObj)

    createLi(form)

    invalidTask(elementLi)

    if(taskObj.task === ""){
        invalidTask(taskObj)
        insertErro(taskObj)
        return false
    }
    if(taskObj.task.length > 0){
        // console.log("tem letra")
        tiraErro(taskObj)
        createLi(taskObj)
    }

    var taskList = document.querySelector("#task-list-js")
    
    taskList.appendChild(elementLi)
    form.reset() 

})

function createLi(taskObj){

    const elementLi = document.createElement('li')
    elementLi.classList.add("task-item")

    const checkTask = document.createElement('input');
    checkTask.type = 'checkbox';
    checkTask.classList.add("input-task")

    const textTask = document.createElement('p')
    textTask.classList.add("task-text")

    const iconDel = document.createElement('button')
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