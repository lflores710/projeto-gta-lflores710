/*
Objetivo 1 - Quando o usário clicar no botão de seleção de plataformas deve abrir uma caixa com os botões de seleção de plataforma

    Passo 1 - Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele

    Passo 2 - Adicionar a classe ativo no botão para que o conteúdo dele apareça

    Passo 3 - Pegar o clique do usuário no JS

    Passo 4 - Quando o usuário clicar, adicionar a class ativo na listagem de plataformas dentro do botão para que o conteúdo apareça

Objetivo 2 - Caso a lista de botões de plataformas já esteja aparecendo e o usuário clicar em cima do botão, o conteúdo deve ser escondido

    Passo 1 - Verificar se o botão já foi ativado pelo usuário, se sim, devemos remover a classe ativo para que ele esconda o conteúdo novamente

*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");
botao.addEventListener("click", () => {
    elementoPlataformas.classList.toggle("ativo");
    });
