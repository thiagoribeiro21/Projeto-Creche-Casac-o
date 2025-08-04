(function () {
  const botoesDuvidas = document.querySelectorAll(".mostrar-seta");
  const respostasDuvidas = document.querySelectorAll(
    ".duvidas__card__respostas"
  );

  botoesDuvidas.forEach((botaoClicado) => {
    botaoClicado.addEventListener("click", () => {
      const respostaAlvo = botaoClicado
        .closest(".duvidas__card")
        .querySelector(".duvidas__card__respostas");
      const estavaAberta = respostaAlvo.classList.contains("resposta--ativa");
      respostasDuvidas.forEach((resposta) => {
        resposta.classList.remove("resposta--ativa");
        resposta.style.maxHeight = "0";
      });

      botoesDuvidas.forEach((botao) => {
        botao.classList.remove("mostrar-seta_aberto");
      });
      if (!estavaAberta) {
        respostaAlvo.classList.add("resposta--ativa");
        botaoClicado.classList.add("mostrar-seta_aberto");

        respostaAlvo.style.maxHeight = respostaAlvo.scrollHeight * 2 + "px";
      }
    });
  });
})();
