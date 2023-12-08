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
