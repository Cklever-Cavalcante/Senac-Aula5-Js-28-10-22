
let res = document.getElementById('result');
let computador = 0;
let jogador = 0;
/*let jogador = Number(window.document.getElementById("jogador"));*/

function sortear() {
    let min = 1;
    let max = 100;
    let dif = max - min;
    let aleatorio = Math.random();
    computador = min + Math.trunc(dif * aleatorio);
    console.log(computador);

}

function jogar() {
    jogador = Number(window.document.getElementById("jogador").value);
    console.log(res);

    if (jogador < computador) {
        res.innerHTML += `Voce escolheu o numero: ${jogador}, meu numero è maior.`;
    } else if (computador < jogador) {
        res.innerHTML += `Voce escolheu o numero: ${jogador}, meu numero è maior.`;
    } else if (jogador == computador) {
        res.innerHTML += `Parabèns voce acertou! Meu numero è o ${computador}`;
    }
}