// função para fazer a mudança da pagna.
function toggleMode() {
  const html = document.documentElement
  // PODEMOS FAZER DE MANEIRA MAIS SIMPLES, ATRAVÉS DE UMA FUNÇÃO QUE JÁ EXISTE.
  html.classList.toggle("light")

  // if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}

  //VAMOS TROCAR AS IMAGENS
  //VAMOS PEGAR A IMAGEM PRIMEIRO

  const img = document.querySelector("profile img")

  //CONDICIONAL PARA SUBSTITUIR AS IMAGENS

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Assetes/avatar-light.png")
  } else {
    img.setAttribute("src", "./Assetes/avatar_w.png")
  }
}
