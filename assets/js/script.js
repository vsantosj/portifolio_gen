const form = document.getElementById('form');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function checkName(name) {
    let fullName = name.trim().split(' ');
    return fullName.length >= 2;
}


function validateEmail(email) {
    return emailRegex.test(email);
}


function clearForm() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
    document.querySelector('#errNome').innerHTML = '';
    document.querySelector('#errEmail').innerHTML = '';
    document.querySelector('#errSubject').innerHTML = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const inputName = document.getElementById('name');
    const errNome = document.querySelector('#errNome');

    if (!checkName(inputName.value)) {
        errNome.innerHTML = 'Insira Nome e Sobrenome.';
        inputName.focus();
        return;
    } else {
        errNome.innerHTML = '';
    }

    const inputEmail = document.getElementById('email');
    const errEmail = document.querySelector('#errEmail');

    if (!validateEmail(inputEmail.value)) {
        errEmail.innerHTML = 'Digite um E-mail Válido.';
        campoEmail.focus();
        return;
    } else {
        errEmail.innerHTML = '';
    }

    const inputSubject = document.querySelector('#subject');
    const errSubject = document.querySelector('#errSubject');

    if (inputSubject.value.length < 5) {
        errSubject.innerHTML = 'O Assunto deve ter no mínimo 5 caracteres.';
        inputSubject.focus();
        return;
    } else {
        errSubject.innerHTML = '';
    }

    const sucessMessage = document.querySelector('#success-message');
    sucessMessage.innerHTML = 'Formulário enviado com sucesso';
    console.log("enviado");

    clearForm();
});
