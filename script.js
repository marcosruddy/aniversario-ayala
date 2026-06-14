const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letras =
"ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789❤AYALAFELIZANIVERSARIO";

const tamanhoFonte = 16;

const colunas = canvas.width / tamanhoFonte;

const chuva = [];

for(let x = 0; x < colunas; x++){
    chuva[x] = 1;
}

function desenhar(){

    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle = "#ff4da6";
    ctx.font = tamanhoFonte + "px monospace";

    for(let i = 0; i < chuva.length; i++){

        const texto =
        letras.charAt(
            Math.floor(Math.random() * letras.length)
        );

        ctx.fillText(
            texto,
            i * tamanhoFonte,
            chuva[i] * tamanhoFonte
        );

        if(
            chuva[i] * tamanhoFonte > canvas.height
            &&
            Math.random() > 0.975
        ){
            chuva[i] = 0;
        }

        chuva[i]++;
    }
}

setInterval(desenhar, 35);

window.addEventListener("resize", ()=>{

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

});

// Música e Tela Inicial

const btnEntrar = document.getElementById("btnEntrar");
const musica = document.getElementById("musica");
const conteudo = document.getElementById("conteudo");
const telaInicial = document.getElementById("telaInicial");

btnEntrar.addEventListener("click", () => {

    musica.play();

    telaInicial.style.display = "none";

    conteudo.style.display = "flex";

});