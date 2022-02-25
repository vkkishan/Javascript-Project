// const navToggle =document.querySelector(".nav-toggle")
const link=document.querySelector(".links")

document.querySelector(".nav-toggle").addEventListener("click",function(){
    // first method
    // if(link.classList.contains("show-links")){
    //     link.classList.remove("show-links")
    // }else{
    //     link.classList.add("show-links")
    // }


    // second method
    link.classList.toggle("show-links")
})