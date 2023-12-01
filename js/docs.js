//dropdown
function myFunction(){
    document.getElementById("myDropdown").classList.toggle("show")
}


//menu
const btn = document.getElementById("menu");
const divMenu = document.getElementById("none")

btn.addEventListener("click", () => {
    divMenu.classList.toggle("hide");
})
