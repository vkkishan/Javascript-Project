let count = 0;

const value = document.querySelector("#val")
const btns = document.querySelectorAll(".btn")

btns.forEach(function (btn) {
    // console.log(btn) 
    btn.addEventListener("click", function (x) {
       const styles = x.currentTarget.classList
       
        if(styles.contains("decrease")){
            count--
        }else if(styles.contains("reset")){
            count=0
        }else if(styles.contains("increase")){
            count++
        }

        if(count<0){
            value.style.color="red"
        }else if(count>0){
            value.style.color="green"
        }else if(count===0){
            value.style.color="black"
        }
         val.textContent = count;
    })
})



     