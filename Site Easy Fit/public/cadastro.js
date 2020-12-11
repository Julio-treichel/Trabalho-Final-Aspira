import Cadastro from "./entities/Cadastro.js";
const nome = document.querySelector('#nome_input1');
const email = document.querySelector('#email_input2');
const fone = document.querySelector('#telefone_input3');
const formulario = document.querySelector('form');
const cadastros = [];
formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let p = document.querySelector('#mensagem');
    const valorNome = nome.value.trim();
    if (!p) {
        p = document.createElement('p');
        p.id = 'mensagem';
        document.body.append(p);
    }
    let regexNome = /\w+\s\w+/g;
    if (!regexNome.test(valorNome)) {
        p.innerText = 'Informe seu nome completo corretamente no campo Nome!';
        nome.focus();
        return;
    }
    if (!isNaN(parseInt(valorNome))) {
        p.innerText = 'O campo Nome não pode ser numérico!';
        nome.focus();
        return;
    }
    p.innerText = '';
    const regexEmail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if (!regexEmail.test(email.value)) {
        p.innerText = 'Formato de E-mail inválido!';
        email.focus();
        return;
    }
    p.innerText = '';
    try {
        let valNome = nome.value;
        let valEmail = email.value;
        let valFone = fone.value;
        const dadosCadastro = new Cadastro(valNome, valEmail, valFone);
        cadastros.push(dadosCadastro);
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        showCadastros();
    }
    catch (_a) {
        p.innerText = "Ocorreu um erro ao armazenar o cadastro no LocalStorage!";
    }
    p.innerText = "Cadastro realizado com Sucesso!";
});
function showCadastros() {
    if (localStorage.getItem('cadastros')) {
        const dados = JSON.parse(localStorage.getItem('cadastros'));
        cadastros.splice(0);
        for (let item of dados) {
            cadastros.push(new Cadastro(item.nome, item.email, item.fone));
        }
    }
}
