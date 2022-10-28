
function mediaAluno (){
    let nomeAluno = window.document.querySelector("input#nomeAluno1");
    let titulo = window.document.getElementById("titulo1");
    let nt1 = window.document.getElementById("nota1");
    let nt2 = window.document.querySelector("input#nota2");
    let parseNt1 = Number(nt1.value);
    let parseNt2 = Number(nt2.value);
    let media = (parseNt1 + parseNt2)/2;
    let mediaFinal = window.document.querySelector("div#mediaFinal");
    let nome = nomeAluno.value;

    if(media >=6){
        titulo.innerHTML = `Bem-vindo ${nome}!`;
        mediaFinal.innerHTML = `<br>Parabens ${nome}, voce foi aprovado!`;
        mediaFinal.style.color = "black";
        mediaFinal.style.backgroundColor = "greenyellow";
        mediaFinal.style.width ="300px";
        mediaFinal.style.padding = "3%";
    }
    else{
        titulo.innerHTML = `Bem-vindo ${nome}!`;
        mediaFinal.innerHTML =`<br>Ola ${nome}! Infelizmente voce foi reprovado.`;
        mediaFinal.style.backgroundColor ="red";
        mediaFinal.style.color="white";
        mediaFinal.style.width ="300px";
        mediaFinal.style.padding = "3%";
    }
}