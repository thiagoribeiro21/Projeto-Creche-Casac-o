(function () {
  // Seleciona o botão de abrir, fechar a barra lateral e os elementos da barra de navegação
  const abrirNav = document.getElementById("abrir-sidebar");
  const fecharNav = document.getElementById("fechar-sidebar");
  const nav = document.querySelector(".nav__ul");
  const logo = document.querySelector(".logo");

  //  Adiciona um evento de clique ao botão de abrir a barra lateral
  abrirNav.addEventListener("click", function () {
    // Adiciona classes para mostrar a barra lateral e alterar o logo
    abrirNav.classList.add("show");
    nav.classList.add("show__nav");
    logo.classList.add("menu-show-foto");
  });

  fecharNav.addEventListener("click", function () {
    // Remove as classes para esconder a barra lateral e restaurar o logo
    abrirNav.classList.remove("show");
    nav.classList.remove("show__nav");
    logo.classList.remove("menu-show-foto");
  });
})();
