const canvas = new fabric.Canvas('area_de_desenho', {
    width: 1200,
    height: 400
});

function updateCanvasSize() {
    const isMobile = window.innerWidth < 768; // Define um limite de largura para dispositivos móveis (por exemplo, 768px).
    
    if (isMobile) {
        canvas.setWidth(800);
        canvas.setHeight(1000);
    } else {
        canvas.setWidth(400);
        canvas.setHeight(200);
    }
    
    canvas.renderAll();
}


canvas.isDrawingMode = true;
canvas.freeDrawingBrush.width = 2; // Defina a largura do pincel

// Personalize o cursor para ser uma cruzinha de desenho
canvas.defaultCursor = 'crosshair';

// Adicione um ouvinte de evento para limpar o canvas quando a tecla "C" for pressionada
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        canvas.clear();
    }
});

// Atualize o tamanho do canvas quando a janela for redimensionada
window.addEventListener('resize', updateCanvasSize);
