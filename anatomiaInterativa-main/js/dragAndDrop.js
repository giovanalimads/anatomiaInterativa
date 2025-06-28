// Seleciona todos os elementos que podem ser arrastados
const draggables = document.querySelectorAll('.draggable');

// Seleciona todos os alvos de drop
const dropzones = document.querySelectorAll('.drop-zone');

// Para cada elemento arrastável
draggables.forEach(item => {
  // Evento ao começar a arrastar
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', item.getAttribute('data-nome'));
  });
});

// Para cada alvo
dropzones.forEach(zone => {
  // Permitir drop ao passar por cima
  zone.addEventListener('dragover', e => {
    e.preventDefault();
    zone.style.backgroundColor = '#e0f7fa'; // destaque azul claro
  });

  // Ao sair do alvo
  zone.addEventListener('dragleave', () => {
    zone.style.backgroundColor = '';
  });

  // Quando soltar
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.style.backgroundColor = '';

    // Recupera o nome arrastado
    const draggedName = e.dataTransfer.getData('text/plain');

    // Pega a resposta correta do alvo
    const expectedName = zone.getAttribute('data-resposta');

    // Verifica se é correto
    if (draggedName === expectedName) {
      zone.style.backgroundColor = '#c8e6c9'; // verde
      zone.textContent = draggedName; // Exibe o nome no alvo

      // Desativa a opção arrastada
      const draggedElement = document.querySelector(`.draggable[data-nome="${draggedName}"]`);
      draggedElement.style.visibility = 'hidden';
    } else {
      zone.style.backgroundColor = '#ffcdd2'; // vermelho
      setTimeout(() => {
        zone.style.backgroundColor = '';
      }, 1000);
    }
  });
});