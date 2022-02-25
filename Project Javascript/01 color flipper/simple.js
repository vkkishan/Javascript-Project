const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const b = document.getElementById("btn") 
const c = document.querySelector(".color")

btn.addEventListener("click", function(){
    // get random number between 0-3
    const randomNumber = getrandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    c.textContent = colors[randomNumber];
});
 function getrandomNumber() {
     return Math.floor(Math.random()*colors.length);
 }

