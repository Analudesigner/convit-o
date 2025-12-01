// Função que faz o "Não" se mover para uma posição aleatória
function moverNao() {
  const naoButton = document.getElementById("nao");

  let randomX = Math.floor(Math.random() * (window.innerWidth - naoButton.offsetWidth));
  let randomY = Math.floor(Math.random() * (window.innerHeight - naoButton.offsetHeight));

  naoButton.style.position = "absolute";
  naoButton.style.left = randomX + "px";
  naoButton.style.top = randomY + "px";
}

// Fugir no PC (mouseover)
document.getElementById("nao").addEventListener("mouseover", function () {
  if (this.fugindo) return;
  this.fugindo = setInterval(moverNao, 120);
});

// Fugir no celular (touchstart)
document.getElementById("nao").addEventListener("touchstart", function () {
  if (this.fugindo) return;
  this.fugindo = setInterval(moverNao, 120);
});

// Quando clicar no "Não"
document.getElementById("nao").addEventListener("click", function () {
  clearInterval(this.fugindo);
  this.disabled = true;
  this.style.pointerEvents = "none";
  this.style.opacity = 0;
  this.style.visibility = "hidden";
  this.textContent = "Sai fora irmão, clica no SIM logo!";
});

// Quando clicar no "Sim"
document.getElementById("sim").addEventListener("click", function () {
  document.getElementById("pagina-inicial").classList.add("escondido");
  document.getElementById("pagina-agradecimento").classList.remove("escondido");
});

// Botão voltar
document.getElementById("voltar").addEventListener("click", function () {
  document.getElementById("pagina-agradecimento").classList.add("escondido");
  document.getElementById("pagina-inicial").classList.remove("escondido");
});

// Corações subindo
function gerarCoracoes() {
  for (let i = 0; i < 50; i++) {
    let coracao = document.createElement("span");
    coracao.classList.add("coracao");
    coracao.textContent = "🤍";
    coracao.style.left = Math.random() * window.innerWidth + "px";
    coracao.style.animationDuration = Math.random() * 4 + 3 + "s";
    document.body.appendChild(coracao);
  }
}

window.onload = gerarCoracoes;
