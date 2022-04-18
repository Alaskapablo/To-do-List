const del = document.querySelector("#task-list-js")
 
del.addEventListener('click', (e)=>{
    e.target.parentNode.classList.add("fade-out")


    setTimeout( ()=>{
        e.target.parentNode.remove();
    },300)
})


// const btnDel = document.querySelector(".clear-btn")

// btnDel.addEventListener('click', ()=>{
//     const delAll = document.querySelectorAll("#task-list-js")


   
// })