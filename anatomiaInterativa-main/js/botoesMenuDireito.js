function checar() {
  const dropZones = document.querySelectorAll('.drop-zone');
  let acertos = 0;

  dropZones.forEach(zone => {
    // texto da resposta colocada dentro da drop-zone (supondo que você insira o texto do draggable)
    const respostaUsuario = zone.textContent.trim().toUpperCase();
    const respostaCorreta = zone.dataset.resposta.toUpperCase();

    if (respostaUsuario === respostaCorreta) {
      zone.style.borderColor = 'green';
      acertos++;
    } else {
      zone.style.borderColor = 'red';
    }
  });

  alert(`Você acertou ${acertos} de ${dropZones.length} ossos do crânio.`);
}

function dica() {
  alert('Dica: Observe a posição dos ossos no crânio e associe o nome que melhor encaixa no local!');
}

function resetar() {
  const dropZones = document.querySelectorAll('.drop-zone');
  dropZones.forEach(zone => {
    zone.textContent = '';          // limpa o texto dentro da zona
    zone.style.borderColor = '';   // remove a cor da borda
  });

  // Reexibe todos os draggables
  const draggables = document.querySelectorAll('.draggable');
  draggables.forEach(item => {
    item.style.visibility = 'visible';
  });
}