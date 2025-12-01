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

// Quando o mouse (ou toque) passa por cima do "Não", o botão começa a "fugir"
document.getElementById("nao").addEventListener("mouseover", function() {
  // Continuar movendo o botão "Não" a cada 100ms
  this.classList.add("fugir");
  this.fugindo = setInterval(moverNao, 100); // O movimento acontece a cada 100ms
});

// Adicionar suporte para dispositivos móveis (toque)
document.getElementById("nao").addEventListener("touchstart", function() {
  // Continuar movendo o botão "Não" a cada 100ms no toque
  this.classList.add("fugir");
  this.fugindo = setInterval(moverNao, 100); // O movimento acontece a cada 100ms
});

// Quando o "Não" for clicado, ele muda a frase e fica impossível de clicar
document.getElementById("nao").addEventListener("click", function() {
  clearInterval(this.fugindo); // Para o movimento de fuga
  this.disabled = true; // Desabilita o botão
  this.style.pointerEvents = "none"; // Impede qualquer clique futuro

  // Torna o botão invisível ou "desaparecido"
  this.style.opacity = 0;
  this.style.visibility = "hidden";

  // Altera o texto do botão "Não"
  this.textContent = "Sai fora irmão, clica no SIM logo!";
});

// Quando o "Sim" for clicado, mostra a página de agradecimento
document.getElementById("sim").addEventListener("click", function() {
  // Esconde a página inicial e mostra a página de agradecimento
  document.getElementById("pagina-inicial").classList.add("escondido");
  document.getElementById("pagina-agradecimento").classList.remove("escondido");
});

// Ação ao clicar no botão "Voltar"
document.getElementById("voltar").addEventListener("click", function() {
  // Volta para a página inicial
  document.getElementById("pagina-agradecimento").classList.add("escondido");
  document.getElementById("pagina-inicial").classList.remove("escondido");
});

// Função para gerar corações brancos que sobem pela tela
function gerarCoracoes() {
  for (let i = 0; i < 50; i++) {
    let coracao = document.createElement("span");
    coracao.classList.add("coracao");
    coracao.textContent = "🤍"; // Emoji do coração

    // Posições aleatórias para os corações
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.animationDuration = Math.random() * 4 + 3 + "s"; // Durabilidade de cada animação

    document.body.appendChild(coracao);
  }
}

// Chama a função para gerar os corações assim que a página carregar
window.onload = function() {
  gerarCoracoes();
};

// Ajustes no tamanho das animações e no layout para dispositivos móveis
window.addEventListener('resize', function() {
  const naoButton = document.getElementById("nao");
  const coracoes = document.querySelectorAll(".coracao");

  // Ajustar animações de corações e botão caso a tela seja redimensionada
  coracoes.forEach(coracao => {
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.animationDuration = Math.random() * 4 + 3 + "s";
  });
});

