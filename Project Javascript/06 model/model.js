const btn=document.querySelector(".modal-btn");
const model=document.querySelector(".modal-overlay")
const closeBtn=document.querySelector(".close-btn")

btn.addEventListener("click",function(){
    model.classList.add("open-modal")
})

closeBtn.addEventListener("click",function(){
    model.classList.remove("open-modal")
})