const invalidTask = ()=>{
    const inputTask = document.querySelector("#input-js")
    inputTask.classList.add("invalid")

    inputTask.innerHTML = ""
}

const tiraErro = ()=>{
    const inputTask = document.querySelector("#input-js")
    inputTask.classList.remove("invalid")
    const erroSpan = document.querySelector(".error-form")
    erroSpan.classList.remove("span-erro")

    
}

const insertErro = ()=>{

    const erroSpan = document.querySelector(".error-form")
    erroSpan.classList.add("span-erro")
   

    let erro = document.createElement('span')
    erro.textContent = "Digite uma tarefa"
    
    
    erro.innerHTML = ""
    erro.insertAdjacentHTML('afterbegin', erro)
}