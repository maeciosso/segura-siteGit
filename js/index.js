//menu
const btn = document.getElementById("menu");
const divMenu = document.getElementById("none")

btn.addEventListener("click", () => {
    divMenu.classList.toggle("hide");
})

//main 2
const main2 = document.getElementById("container2")
const main = document.getElementById("container")

//propaganda btn
const empresa = document.getElementById("empresa")
const pessoa = document.getElementById("pessoa")
const div = document.getElementById("propaganda")
const div2 = document.getElementById("propaganda2")
empresa.addEventListener("click", () =>{
    div.classList.toggle("hide")
    div2.classList.toggle("hide")
    main.classList.toggle("hide")
    main2.classList.toggle("hide")
})
pessoa.addEventListener("click", () =>{
    div.classList.toggle("hide")
    div2.classList.toggle("hide")
    main.classList.toggle("hide")
    main2.classList.toggle("hide")
})

//dropdown
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show")
}

//botoes comprar
document.getElementById("btnB").addEventListener('click', () => {
    document.getElementById("comprar1").classList.toggle("hide")
})
document.getElementById("btnF").addEventListener('click', () => {
    document.getElementById("comprar2").classList.toggle("hide")
})
document.getElementById("btnP").addEventListener('click', () => {
    document.getElementById("comprar3").classList.toggle("hide")
})
document.getElementById("close1").addEventListener('click', () => {
    document.getElementById("comprar1").classList.toggle("hide")
})
document.getElementById("close2").addEventListener('click', () => {
    document.getElementById("comprar2").classList.toggle("hide")
})
document.getElementById("close3").addEventListener('click', () => {
    document.getElementById("comprar3").classList.toggle("hide")
})