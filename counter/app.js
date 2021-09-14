let header = document.querySelector(".head")
let btnUp = document.querySelector(".up")
let btnDown = document.querySelector(".down")
let btnReset = document.querySelector(".reset")
function calc(answer) {
    if (answer == 1) {
        header.textContent =Number(header.textContent)+1
        return header.textContent
    }
    if (answer == 2) {
        header.textContent =Number(header.textContent)-1
    } else {
        header.textContent=0
    }
}
btnUp.addEventListener("click",function(){
    calc(1)
})
btnDown.addEventListener("click",function(){
    calc(2)
})
btnReset.addEventListener("click",function(){
    calc(3)
})