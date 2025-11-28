// Função que faz o "Não" se mover para uma posição aleatória
function moverNao() {
  const naoButton = document.getElementById("nao");

  // Posições aleatórias na tela
  let randomX = Math.floor(Math.random() * (window.innerWidth - naoButton.offsetWidth));
  let randomY = Math.floor(Math.random() * (window.innerHeight - naoButton.offsetHeight));

  // Aplica a nova posição aleatória ao botão
  naoButton.style.position = "absolute";
  naoButton.style.left = randomX + "px";
  naoButton.style.top = randomY + "px";
}

// Quando o mouse passa por cima do "Não", o botão começa a "fugir"
document.getElementById("nao").addEventListener("mouseover", function() {
  // Continuar movendo o botão "Não" a cada 100ms
  this.classList.add("fugir");
  this.fugindo = setInterval(moverNao, 100); // O movimento acontece a cada 100ms
});

// Quando o "Não" for clicado, ele muda a frase e para de fugir
document.getElementById("nao").addEventListener("click", function() {
  clearInterval(this.fugindo); // Para o movimento de fuga
  this.disabled = true; // Desabilita o botão

  // Altera o texto do botão "Não"
  this.textContent = "Sai fora irmão, clica no SIM logo!";
});

// Quando o "Sim" for clicado, redireciona para a página de agradecimento
document.getElementById("sim").addEventListener("click", function() {
  window.location.href = "agradecimento.html"; // Redireciona para a página de agradecimento
});
