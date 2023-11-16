var setaDireita = window.document.getElementById("seta-direita")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")

function RollToRight() {
  Bruna.style = 'display:none'
  Samantha.style = 'display:flex'
  setaEsquerda.style = 'display:flex'
  setaDireita.style = 'display:none'
}

function RollToLeft() {
  Bruna.style = 'display:flex'
  Samantha.style = 'display:none'
  setaEsquerda.style = 'display:none'
  setaDireita.style = 'display:flex'
}

