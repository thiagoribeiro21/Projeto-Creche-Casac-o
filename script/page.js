(function () {
  const abrirNav = document.getElementById("abrir-sidebar");
  const fecharNav = document.getElementById("fechar-sidebar");
  const nav = document.querySelector(".nav__ul");
  const logo = document.querySelector(".logo");

  abrirNav.addEventListener("click", function () {
    abrirNav.classList.add("show");
    nav.classList.add("show__nav");
    logo.classList.add("menu-show-foto");
  });

  fecharNav.addEventListener("click", function () {
    abrirNav.classList.remove("show");
    nav.classList.remove("show__nav");
    logo.classList.remove("menu-show-foto");
  });
})();
