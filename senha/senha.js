document.getElementById("acessoBtn").addEventListener("click", verificarSenha);
document.getElementById("mostrarSenhaBtn").addEventListener("click", mostrarSenha);

function verificarSenha() {
    var senhaCorreta = "votarGabriel1234";
    var senhaDigitada = document.getElementById("senhaInput").value;
    var mensagemElement = document.getElementById("mensagem");

    if (senhaDigitada === senhaCorreta) {
        mensagemElement.innerHTML = "Acesso permitido!";
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
