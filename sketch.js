var voteBolsonaro = 0;
var voteLula = 0 ; 
var voteSimone = 0 ; 

function votarBolsonaro(){
    voteBolsonaro = voteBolsonaro +1;
    alert("voce votou em bolsonaro");
}
function votarLula(){
    voteLula = voteLula +1;

    alert("voce votou em Lula");
}
function votarSimone(){
    voteSimone = voteSimone +1;
    alert("voce votou na candidata : Simone");
}

function mostraVotos(){
    alert( "voto bolsonaro : " + voteBolsonaro + "\n"+"votos lula : "+ voteLula+ "\n" + "votos Simone : " + voteSimone);
}
//verificar votos

document.getElementById("acessoBtn").addEventListener("click", verificarSenha);
document.getElementById("mostrarSenhaBtn").addEventListener("click", mostrarSenha);

function verificarSenha() {
    var senhaCorreta = "votarGabriel1234";
    var senhaDigitada = document.getElementById("senhaInput").value;
    var mensagemElement = document.getElementById("mensagem");

    if (senhaDigitada === senhaCorreta) {
        mensagemElement.innerHTML = "Acesso as senhas permitido!";
        alert (mostraVotos())
        // Adicione aqui a lógica para redirecionar ou permitir o acesso ao conteúdo protegido
    } else {
        mensagemElement.innerHTML = "Senha incorreta. Tente novamente.";
    }
}

function mostrarSenha() {
    var senhaInput = document.getElementById("senhaInput");
    senhaInput.type = senhaInput.type === "password" ? "text" : "password";
}
