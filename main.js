const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.parametro-senha__botao');

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha - 1
    }
    numeroSenha.textContent = tamanhoSenha;
    gerasenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha = tamanhoSenha + 1
    }
    numeroSenha.textContent = tamanhoSenha;
    gerasenha();
}

const campoSenha = document.querySelector('#campo-senha');

const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVYXWZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvyXwz';
const numeros = '0123456789';
const simbolos = '!@%?*#+/';
gerasenha();

function gerasenha(){
     let senha = '';
     for(let i=0; i<tamanhoSenha; i++){
         let numeroAleatorio = Math.random()*letrasMaiusculas.length;
         numeroAleatorio = Math.floor(nunmeroAleatorio);
         senha = senha + letrasMaiusculas[numeroAleatorio];
     }
     campoSenha.value = senha;
}
