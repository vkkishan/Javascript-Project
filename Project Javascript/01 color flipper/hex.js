const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const b = document.getElementById("btn");
const color = document.querySelector(".color");

b.addEventListener("click", function () {
    let hexColor = "#";
    console.log(hex);
    for(let i = 0; i < 6; i++) {
         hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    console.log(Math.floor(Math.random() * hex.length), 'jdfhgjfh');
    return Math.floor(Math.random() * hex.length);
}