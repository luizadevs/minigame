const seta = document.getElementById('seta');
const seta2 = document.getElementById('seta2');
const seta3 = document.getElementById('seta3');
const seta4 = document.getElementById('seta4');

// Obtém referências para as imagens de direção do personagem
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

// Variáveis para rastrear os estados das setas
var setaPressionada = {
    seta1: false,
    seta2: false,
    seta3: false,
    seta4: false
};

// Função para mover o personagem
function moverPersonagem(direcaoX, direcaoY) {
    posX += direcaoX * velocidade;
    posY += direcaoY * velocidade;

    // Atualize a posição da imagem do personagem aqui
    imagensDirecao[direcaoAtual].style.transform = `translate(${posX}px, ${posY}px)`;

    // Atualize as coordenadas das imagens de direção para ficarem na mesma posição do personagem
    for (var direcao in imagensDirecao) {
        imagensDirecao[direcao].style.transform = `translate(${posX}px, ${posY}px)`;
    }
    
    // Verifique a direção atual e atualize a imagem conforme necessário
    if (direcaoY > 0) {
        direcaoAtual = 'aBaixo';
    } else if (direcaoY < 0) {
        direcaoAtual = 'aCima';
    } else if (direcaoX > 0) {
        direcaoAtual = 'aDireita';
    } else if (direcaoX < 0) {
        direcaoAtual = 'aEsquerda';
    } else {
        // Quando nenhum movimento está ocorrendo, especifica a direção "parada" adequada
        if (direcaoAtual === 'aBaixo') {
            direcaoAtual = 'pBaixo';
        } else if (direcaoAtual === 'aCima') {
            direcaoAtual = 'pCima';
        } else if (direcaoAtual === 'aDireita') {
            direcaoAtual = 'pDireita';
        } else if (direcaoAtual === 'aEsquerda') {
            direcaoAtual = 'pEsquerda';
        }
    }
    
    // Atualize a imagem "p" ou "a" conforme a direção atual
    for (var direcao in imagensDirecao) {
        imagensDirecao[direcao].style.display = 'none';
    }
    imagensDirecao[direcaoAtual].style.display = 'block';
}

// Função para verificar se alguma seta está pressionada
function verificarSetasPressionadas() {
    var algumaSetaPressionada = false;

    if (setaPressionada.seta1) {
        console.log('Seta 1 pressionada');
        moverPersonagem(0, -1);
        algumaSetaPressionada = true;
    }
    if (setaPressionada.seta2) {
        console.log('Seta 2 pressionada');
        moverPersonagem(0, 1);
        algumaSetaPressionada = true;
    }
    if (setaPressionada.seta3) {
        console.log('Seta 3 pressionada');
        moverPersonagem(-1, 0);
        algumaSetaPressionada = true;
    }
    if (setaPressionada.seta4) {
        console.log('Seta 4 pressionada');
        moverPersonagem(1, 0);
        algumaSetaPressionada = true;
    }

    // Se nenhuma seta estiver pressionada, defina a imagem para parada (p) adequada
    if (!algumaSetaPressionada) {
        switch (direcaoAtual) {
            case 'aBaixo':
                direcaoAtual = 'pBaixo';
                break;
            case 'aCima':
                direcaoAtual = 'pCima';
                break;
            case 'aDireita':
                direcaoAtual = 'pDireita';
                break;
            case 'aEsquerda':
                direcaoAtual = 'pEsquerda';
                break;
        }
    }
    
    // Atualize a imagem "p" ou "a" conforme a direção atual
    for (var direcao in imagensDirecao) {
        imagensDirecao[direcao].style.display = 'none';
    }
    imagensDirecao[direcaoAtual].style.display = 'block';
}

// Adicione eventos de toque para cada seta
seta.addEventListener('touchstart', function (e) {
    e.preventDefault(); // Evite o comportamento padrão de toque (como zoom na página)
    setaPressionada.seta1 = true;
});

seta2.addEventListener('touchstart', function (e) {
    e.preventDefault();
    setaPressionada.seta2 = true;
});

seta3.addEventListener('touchstart', function (e) {
    e.preventDefault();
    setaPressionada.seta3 = true;
});

seta4.addEventListener('touchstart', function (e) {
    e.preventDefault();
    setaPressionada.seta4 = true;
});

// Adicione eventos de toque para cada seta
seta.addEventListener('touchend', function () {
    setaPressionada.seta1 = false;
});

seta2.addEventListener('touchend', function () {
    setaPressionada.seta2 = false;
});

seta3.addEventListener('touchend', function () {
    setaPressionada.seta3 = false;
});

seta4.addEventListener('touchend', function () {
    setaPressionada.seta4 = false;
});

// Inicia o loop principal para verificar as setas pressionadas
setInterval(verificarSetasPressionadas, 50);
