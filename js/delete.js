const del = document.querySelector(".container-task")
 console.log(del)

del.addEventListener('click', (e)=>{
    e.target.parentNode.classList.add("fade-out")


    setTimeout( ()=>{
        e.target.parentNode.remove();
    },300)
})

function deleteAll(){ 

    const delAll = document.querySelector(".clear-btn")

    delAll.addEventListener('click', (e)=>{
        e.preventDefault()
        console.log("click")

        document.getElementById("task-js").innerHTML = ""
       
    })

}

// function main(){
//     del()
//     delAll(del)
// }