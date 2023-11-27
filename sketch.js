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
    voteBolsonaro = voteBolsonaro +1;
    alert("voce votou em bolsonaro");
}

function mostraVotos(){
    alert( "voto bolsonaro : " + voteBolsonaro + "\n"+"votos lula : "+ voteLula+ "\n" + "votos Simone : " + voteSimone);
}