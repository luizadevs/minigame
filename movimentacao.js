// Obtém as referências para todas as imagens de direção
var imagensDirecao = {
    aDireita: document.getElementById('aDireita'),
    pDireita: document.getElementById('pDireita'),
    aCima: document.getElementById('aCima'),
    pCima: document.getElementById('pCima'),
    aBaixo: document.getElementById('aBaixo'),
    pBaixo: document.getElementById('pBaixo'),
    pEsquerda: document.getElementById('pEsquerda'),
    aEsquerda: document.getElementById('aEsquerda')
};

// Define a posição inicial da imagem
var posX = 0;
var posY = 0;

// Define a última posição válida
var ultimaPosicaoX = 0;
var ultimaPosicaoY = 0;

// Define a direção atual do personagem
var direcaoAtual = 'pBaixo'; // Começa parado para baixo

// Define a velocidade de movimento
var velocidade = 2;

// Variáveis para rastrear as teclas pressionadas
var teclasPressionadas = {
    ArrowUp: false,
    ArrowDown: false,
    ArrowLeft: false,
    ArrowRight: false
};

// Função para mover a imagem
function moverImagem() {

    // Resetar a visibilidade das imagens
    for (var direcao in imagensDirecao) {
        imagensDirecao[direcao].style.display = 'none';
    }

    if (teclasPressionadas.ArrowRight) {
        imagensDirecao.aDireita.style.display = 'block';
        direcaoAtual = 'aDireita';
        posX += velocidade;

    } else if (teclasPressionadas.ArrowLeft) {
        imagensDirecao.aEsquerda.style.display = 'block';
        direcaoAtual = 'aEsquerda';
        posX -= velocidade;

    } else if (teclasPressionadas.ArrowUp) {
        imagensDirecao.aCima.style.display = 'block';
        direcaoAtual = 'aCima';
        posY -= velocidade;

    } else if (teclasPressionadas.ArrowDown) {
        imagensDirecao.aBaixo.style.display = 'block';
        direcaoAtual = 'aBaixo';
        posY += velocidade;

    }

    // Atualiza a posição da imagem de acordo com a direção
    imagensDirecao[direcaoAtual].style.transform = `translate(${posX}px, ${posY}px)`;

    // Se nenhuma tecla de seta estiver pressionada, mostrar a imagem parada
    if (!teclasPressionadas.ArrowRight && !teclasPressionadas.ArrowLeft && !teclasPressionadas.ArrowUp && !teclasPressionadas.ArrowDown) {
        imagensDirecao['p' + direcaoAtual.slice(1)].style.display = 'block';
    } else {
        // Atualiza a última posição válida
        ultimaPosicaoX = posX;
        ultimaPosicaoY = posY;
    }

    // Chama a função novamente no próximo quadro de animação
    requestAnimationFrame(moverImagem);
}

// Adiciona eventos de escuta de teclado para keydown e keyup
document.addEventListener('keydown', function (event) {
    // Verifica qual tecla das setas do teclado foi pressionada
    if (event.key in teclasPressionadas) {
        // Define a tecla correspondente como pressionada
        teclasPressionadas[event.key] = true;
    }
});

document.addEventListener('keyup', function (event) {
    // Verifica qual tecla das setas do teclado foi liberada
    if (event.key in teclasPressionadas) {
        // Define a tecla correspondente como não pressionada
        teclasPressionadas[event.key] = false;
        // Atualiza a posição da imagem parada com a última posição válida
        imagensDirecao['p' + direcaoAtual.slice(1)].style.transform = `translate(${ultimaPosicaoX}px, ${ultimaPosicaoY}px)`;
    }
});

// Inicia o loop principal para mover a imagem
moverImagem();

// Função para mover o personagem automaticamente a cada 2 segundos
function moverAutomaticamente() {
    // Implemente a lógica para mover o personagem automaticamente aqui.
    // Por exemplo, você pode definir uma direção específica.
    // Neste exemplo, vamos mover para a direita.
    direcaoAtual = 'aDireita';
    posX += velocidade;

    // Atualize a posição da imagem
    imagensDirecao[direcaoAtual].style.transform = `translate(${posX}px, ${posY}px)`;
}

// Inicie o movimento automático a cada 2 segundos usando setInterval
setInterval(moverAutomaticamente, 2000);
