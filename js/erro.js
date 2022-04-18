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

}

const erroLetter = ()=>{
    const spanErro = document.querySelector(".error-form-letter")
    spanErro.classList.add("error-letter")

}

const erroLetterRemove = ()=>{
    const spanErroRemove = document.querySelector(".error-form-letter")
    spanErroRemove.classList.remove("error-letter")
}
erroLetter()
erroLetterRemove()