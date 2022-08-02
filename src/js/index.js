/*
    OBJETIVO 1 - clicar na seta avançar tem que mostrar próximo cartão
        I - pegar o elemento HTML da seta avançar
        II - identificar o clique do usuário na seta
        III - fazer aparecer o próximo cartão
        IV - buscar o cartão selecionado e esconder


    OBJETIVO 2 - clicar na seta voltr tem que mostrar o cartão anterior da lista
        I - pegar o elemento HTML da seta voltar
        II - identificar o clique do usuário na seta
        III - fazer aparecer o cartão anterior
        IV - buscar o cartão selecionado e esconder

*/


const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao) {
    cartoes[indiceCartao].classList.add('selecionado');
}

btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) return;
    
    esconderCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual); 
})
 
btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) return;
    
    esconderCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});