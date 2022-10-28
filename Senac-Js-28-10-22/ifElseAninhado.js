
function inicio(){
    let nume1 = Number(window.prompt(`Digite o primeiro numero.`));
    let nume2 = Number(window.prompt(`Digite o segundo numero.`));
    let resu = document.querySelector("div#resposta");

    if(nume1 > nume2){
        resu.innerHTML = `De acordo com os valores digitados ${nume1} e ${nume2}.<br> O maior valor è o primeiro numero digitado <b>${nume1}.</b>`;
        resu.style.backgroundColor = "pink";
        resu.style.color = "#003F34";
        resu.style.width = "350px";
        resu.style.padding = "3%";
    }
    else if(nume2 > nume1){
        resu.innerHTML = `De acordo com os valores digitados ${nume1} e ${nume2}.<br> O maior valor è o segundo numero digitado <b>${nume2}.</b>`;
        resu.style.backgroundColor = "pink";
        resu.style.color = "#003F34";
        resu.style.width = "350px";
        resu.style.padding = "3%";
    }
    else{
        resu.innerHTML = `De acordo com os valores digitados, ${nume1} e ${nume2} são iguais.`;
        resu.style.backgroundColor = "pink";
        resu.style.color = "#003F34";
        resu.style.width = "350px";
        resu.style.padding = "3%";
    }
}