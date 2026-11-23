// ===============================
// Portfólio - Cauã Spinola
// JavaScript do site
// ===============================


// ----- Menu do celular -----
const botaoAbrirMenu = document.getElementById("abrir-menu");
const navegacao = document.getElementById("navegacao");

botaoAbrirMenu.addEventListener("click", function () {
  navegacao.classList.toggle("ativo");

  // troca o ícone: ☰ com o menu fechado e ✕ com o menu aberto
  if (navegacao.classList.contains("ativo")) {
    botaoAbrirMenu.textContent = "✕";
  } else {
    botaoAbrirMenu.textContent = "☰";
  }
});

// fecha o menu depois que a pessoa escolhe uma opção
const opcoesMenu = document.querySelectorAll(".navegacao a");

opcoesMenu.forEach(function (opcao) {
  opcao.addEventListener("click", function () {
    navegacao.classList.remove("ativo");
    botaoAbrirMenu.textContent = "☰";
  });
});


// ----- Botão de voltar ao topo -----
const botaoTopo = document.getElementById("voltar-topo");

// o botão só aparece depois que a página foi rolada 400 pixels
window.addEventListener("scroll", function () {
  if (window.scrollY > 400) {
    botaoTopo.classList.add("mostrar");
  } else {
    botaoTopo.classList.remove("mostrar");
  }
});

botaoTopo.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// ----- Ano atual no rodapé -----
document.getElementById("ano-atual").textContent = new Date().getFullYear();
