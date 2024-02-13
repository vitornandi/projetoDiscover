function toggleMode() {
  //document é a representação do documento em formato JS. o Ponto acessa a propriedade ou funcionalidade do documento. documentElement é a tag <HTML>.
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")
  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver no light mode, adc imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter img normal
    img.setAttribute("src", "./assets/avatarvitor.png")
  }
}
