// Função para ocultar todas as imagens, exceto #pBaixo
function mostrarApenasPBaixo() {
    console.log('Função mostrarApenasPBaixo foi chamada');
    // Seleciona todas as imagens com a classe "acoes img"
    var imagens = document.querySelectorAll('.acoes img');

    // Itera pelas imagens e define o estilo display para "none"
    for (var i = 0; i < imagens.length; i++) {
        imagens[i].style.display = 'none';
    }

    // Define o estilo display para "block" apenas na imagem com o id "pBaixo"
    var pBaixo = document.getElementById('pBaixo');
    pBaixo.style.display = 'block';
}

// Chama a função para mostrar apenas a imagem #pBaixo quando necessário
mostrarApenasPBaixo();
