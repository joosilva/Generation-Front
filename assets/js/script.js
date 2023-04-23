let nome = document.getElementById("nome")
let campoNome = false
let email = document.getElementById("email")
let campoEmail = false
let mensagem = document.getElementById("mensagem")
let campoMensagem = false

function validarNome() {
    let validacaoNome = document.querySelector("#validacaoNome")

    if(nome.value.length < 4 && nome.value.length > 0) {
        validacaoNome.innerHTML = "Nome inválido!"
        validacaoNome.style.color = "red"
    } else {
        validacaoNome.innerHTML = ""
        campoNome = true
    }

}

function validarEmail() {
    let validacaoEmail = document.querySelector("#validacaoEmail")

    if(email.value.length == 0) {
        validacaoEmail.innerHTML = ""
    } else if(email.value.indexOf("@") == -1 || email.value.indexOf(".com") == -1) {
        validacaoEmail.innerHTML = "Email inválido!"
        validacaoEmail.style.color = "red"
    } else {
        validacaoEmail.innerHTML = ""
        campoEmail = true
    }

}

function validarMensagem() {
    let validacaoMensagem = document.querySelector("#validacaoMensagem")

    if(mensagem.value.length < 10 && mensagem.value.length > 0) {
        validacaoMensagem.innerHTML = "A sua mensagem deve possuir ao menos 10 caracteres."
        validacaoMensagem.style.color = "red"
    } else {
        validacaoMensagem.innerHTML = ""
        campoMensagem = true
    }

}

function enviar() {
    if(campoNome == true && campoEmail == true && campoMensagem == true) {
        alert("Mensagem enviada com sucesso!")
    } else {
        alert("Preencha todos os campos!")
    }
}