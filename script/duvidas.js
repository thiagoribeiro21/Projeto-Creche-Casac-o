(function () {
  // Seleciona todos os botões de dúvida e as respostas correspondentes
  const botoesDuvidas = document.querySelectorAll(".mostrar-seta");
  const respostasDuvidas = document.querySelectorAll(
    ".duvidas__card__respostas"
  );

  // Adiciona um evento de clique a cada botão
  botoesDuvidas.forEach((botaoClicado) => {
    botaoClicado.addEventListener("click", () => {
      // Alterna a visibilidade da resposta correspondente
      const respostaAlvo = botaoClicado
        .closest(".duvidas__card")
        .querySelector(".duvidas__card__respostas");
      // Verifica se a resposta já está aberta e alterna o estado
      const estavaAberta = respostaAlvo.classList.contains("resposta--ativa");
      // Fecha todas as respostas e remove a classe de seta aberta
      respostasDuvidas.forEach((resposta) => {
        resposta.classList.remove("resposta--ativa");
        resposta.style.maxHeight = "0";
      });

      // Remove a classe de seta aberta de todos os botões
      botoesDuvidas.forEach((botao) => {
        botao.classList.remove("mostrar-seta_aberto");
      });
      // Se a resposta não estava aberta, abre a resposta clicada
      if (!estavaAberta) {
        respostaAlvo.classList.add("resposta--ativa");
        botaoClicado.classList.add("mostrar-seta_aberto");

        // Define a altura máxima da resposta para permitir a animação
        respostaAlvo.style.maxHeight = respostaAlvo.scrollHeight * 2 + "px";
      }
    });
  });
})();
