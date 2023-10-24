const turmA = document.getElementById('segun')
const turmB = document.getElementById('terc')
const voltar = document.getElementById('voltar')
const primeiro = document.getElementById("primeiro")
const segundo = document.getElementById("segundo")
const terceiro = document.getElementById("terceiro")

turmA.onclick = () => {
        primeiro.classList.add("none")
        segundo.classList.remove("none")
}

turmB.onclick = () => {
        primeiro.classList.add("none")
        terceiro.classList.remove("none")
}

voltar.onclick = () => {
        primeiro.classList.remove("none")
        segundo.classList.add("none")
}