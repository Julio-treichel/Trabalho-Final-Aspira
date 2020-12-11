const altura = document.querySelector('#altura_input1');
const peso = document.querySelector('#peso_input2');
const result = document.querySelector('form');
result.addEventListener('submit', (event) => {
    event.preventDefault();
    let p = document.querySelector('#mensagem');
    if (!p) {
        p = document.createElement('p');
        p.id = 'mensagem';
        document.body.append(p);
    }
    if (!altura.value.trim()) {
        p.innerText = 'O campo Altura é obrigatório!';
        altura.focus();
        return;
    }
    if (isNaN(parseFloat(altura.value))) {
        p.innerHTML = 'O campo Altura precisa ser um número';
        altura.focus();
        return;
    }
    if (!peso.value.trim()) {
        p.innerHTML = 'O campo Peso é obrigatório!';
        peso.focus();
        return;
    }
    if (isNaN(parseFloat(peso.value))) {
        p.innerHTML = 'O campo Peso precisa ser um número';
        peso.focus();
        return;
    }
    let height = (parseFloat(altura.value) * parseFloat(altura.value));
    let weight = parseFloat(peso.value);
    let imc = (weight / height);
    let total = imc.toFixed(1).toString();
    if (imc < 18.5) {
        p.innerText = `Seu IMC: ${total} Classificação: Magreza`;
    }
    if (imc >= 18.5 && imc < 24.9) {
        p.innerText = `Seu IMC: ${total} Classificação: Saudável (Indicado)`;
    }
    if (imc >= 25.0 && imc < 29.9) {
        p.innerText = `Seu IMC: ${total} Classificação: Sobrepeso`;
    }
    if (imc >= 30.0 && imc < 34.9) {
        p.innerText = `Seu IMC: ${total} Classificação: Obesidade Grau I (Leve)`;
    }
    if (imc >= 35.0 && imc < 39.9) {
        p.innerText = `Seu IMC: ${total} Classificação: Obesidade Grau II (Severa)`;
    }
    if (imc >= 40.0 && imc < 49.9) {
        p.innerText = `Seu IMC: ${total} Classificação: Obesidade Grau III (Mórbida)`;
    }
    if (imc >= 50.0 && imc < 59.9) {
        p.innerText = `Seu IMC: ${total} Classificação: Super Obeso`;
    }
    if (imc >= 60) {
        p.innerText = `Seu IMC: ${total} Classificação: Hiper Obeso`;
    }
});
export {};
