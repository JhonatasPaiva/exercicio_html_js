const form = document.getElementById('form-validacao');

function validaNumero (a, b) {
    return a < b
}

form.addEventListener('submit', function(e) {
    let formValido = false;
    e.preventDefault();

    const numeroA = document.getElementById('numero-a');
    const numeroB = document.getElementById('numero-b');
    const numA = parseFloat(numeroA.value);
    const numB = parseFloat(numeroB.value);
    const mensagemSucesso = `<b>Sucesso!</b> O número: <b>${numB}</b> do campo <b>B</b> é maior que o número: <b>${numA}</b> do campo <b>A</b>.`; 
    const mensagemErro = `<b>Erro!</b> O número: <b>${numB}</b> do campo <b>B</b> é menor que o número: <b>${numA}</b> do campo <b>A</b>.`;
    const mensagemIgual = `<b>Erro!</b> Os números são iguais.`

    formValido = validaNumero(numA, numB)
    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'none';
        const containerMensagemIgual = document.querySelector('.igual-message');
        containerMensagemIgual.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';

    } else if (formValido == false && numA != numB ) {
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.innerHTML = mensagemErro;
        containerMensagemErro.style.display = 'block';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.style.display = 'none';
        const containerMensagemIgual = document.querySelector('.igual-message');
        containerMensagemIgual.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
    } else {
        const containerMensagemIgual = document.querySelector('.igual-message');
        containerMensagemIgual.innerHTML = mensagemIgual;
        containerMensagemIgual.style.display = 'block';
        const containerMensagemErro = document.querySelector('.error-message');
        containerMensagemErro.style.display = 'none';
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.style.display = 'none';
        numeroA.value = '';
        numeroB.value = '';
    }

})

