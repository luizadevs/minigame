const canvas = new fabric.Canvas('area_de_desenho', {
    width: 500,
    height: 500
});

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