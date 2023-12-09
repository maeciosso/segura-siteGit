//menu
const divMenu = document.getElementById("none")

document.getElementById("menu").addEventListener('click', () => {
    divMenu.classList.toggle("hide");
})


//users
let users = []


// login
function verificar(){
    let nome = document.getElementById("nome").value
    let senha = document.getElementById("senha").value
    if(nome !== "admin" && senha !== "1234"){breadCrumb1(); setTimeout(() => {document.getElementById("bread1").classList.toggle("hide")}, 2000); setTimeout(() => {document.getElementById('nome').value=''; document.getElementById('senha').value='';},)}
    if(nome !== "" && senha == ""){breadCrumb2(); setTimeout(() => {document.getElementById("bread2").classList.toggle("hide")}, 2000); setTimeout(() => {document.getElementById('nome').value=''; document.getElementById('senha').value='';},)}
    if(nome === "" && senha !== ""){breadCrumb3(); setTimeout(() => {document.getElementById("bread3").classList.toggle("hide")}, 2000); setTimeout(() => {document.getElementById('nome').value=''; document.getElementById('senha').value='';},)} 
    if(nome == "admin" && senha == "1234"){breadCrumb4(); console.log("nome:" + nome, "senha:" + senha); setTimeout(() => {document.getElementById('nome').value=''; document.getElementById('senha').value='';},); setTimeout(() => {document.getElementById("bread4").classList.toggle("hide")}, 2000); setTimeout(() => {window.location.replace("index.html")},2500)} 
}

function verificar2(){
    let email = document.getElementById("email").value;
    let nome2 = document.getElementById("nome2").value;
    let senha2 = document.getElementById("senha2").value;    
    if(email === "" && senha2 === "" && nome2 == ''){breadCrumb6(); setTimeout(() => {document.getElementById("bread6").classList.toggle("hide")}, 2000);} ;
    if(email !== "" && senha2 == "" && nome2 !== ''){breadCrumb2(); setTimeout(() => {document.getElementById("bread2").classList.toggle("hide")}, 2000);} ;
    if(email === "" && senha2 !== "" && nome2 == ''){breadCrumb3(); setTimeout(() => {document.getElementById("bread3").classList.toggle("hide")}, 2000);} ;
    if(email !== "" && senha2 !== "" && nome2 !== ''){breadCrumb5(); setTimeout(() => {document.getElementById("bread5").classList.toggle("hide")}, 2000);; console.log("e-mail:" + email, "senha:" + senha2, 'nome:' + nome2); setTimeout(() => {window.location.replace("index.html")},2000); };
}

//breadcrumb
function breadCrumb1(){
    document.getElementById("bread1").classList.toggle("hide")
} function breadCrumb2(){
    document.getElementById("bread2").classList.toggle("hide")
} function breadCrumb3(){
    document.getElementById("bread3").classList.toggle("hide")
} function breadCrumb4(){
    document.getElementById("bread4").classList.toggle("hide")
} function breadCrumb5(){
    document.getElementById("bread5").classList.toggle("hide")
} function breadCrumb6(){
    document.getElementById("bread6").classList.toggle("hide")
}

//visibilidade senha
const password = document.getElementById("senha")
function visibilidade(){
    if(password.getAttribute("type") === "password"){
        password.setAttribute("type", "text")
    } else{
        password.setAttribute("type", "password")
    }
}
const password2 = document.getElementById("senha2")
function visibilidade2(){
    if(password2.getAttribute("type") === "password"){
        password2.setAttribute("type", "text")
    } else{
        password2.setAttribute("type", "password")
    }
}

//sign_in e sign_up
const form1 = document.getElementById("form")
const form2 = document.getElementById("form2")
const sign_up = document.getElementById("up")
const sign_in = document.getElementById("in")

sign_up.addEventListener("click", () => {
    form1.classList.toggle('hide')
    form2.classList.toggle("hide")
})

sign_in.addEventListener("click", () => {
    form1.classList.toggle("hide")
    form2.classList.toggle("hide")
})



