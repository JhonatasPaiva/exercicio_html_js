function somar(){
    var inicio = Number(window.document.getElementById('input1').value);
    var fim = Number(window.document.getElementById('input2').value);
    var passo = Number(window.document.getElementById('input3').value);
    var resposta = window.document.getElementById('res');
    resposta.innerHTML = "";
    var observação = window.document.getElementById('status');
    var chegada = window.document.getElementById('final')

    if (inicio >= 1 && fim >= 1 && passo >= 1) {
        for(inicio; inicio <= fim; inicio = inicio+passo) {
            observação.innerHTML = "Contando:"
            resposta.innerHTML += inicio + " 👉 ";
            chegada.innerHTML = "🏁"
        }
    } else if (inicio == 0 | fim == 0) {
        resposta.innerHTML = "Impossível contar!"
        chegada.innerHTML = " "
        observação.innerHTML = " "
    } else if (passo == 0) {
        passo = 1
        alert("Passo inválido! Considerando Passo 1")
        for(inicio; inicio <= fim; inicio = inicio+passo) {
            observação.innerHTML = "Contando:"
            resposta.innerHTML += inicio + " 👉 ";
            chegada.innerHTML = "🏁"
        }
    }
}