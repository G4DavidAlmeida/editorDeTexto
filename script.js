// container com textos
const divText = document.querySelector('.text')

// botão de adicionar
const add = document.querySelector('.add')

// criando eventos dos botões
document.querySelector('.t').addEventListener('click', () => lastInput.style.fontSize = '25px')
document.querySelector('.b').addEventListener('click', () => lastInput.style.fontWeight = 'bold')
document.querySelector('.i').addEventListener('click', () => lastInput.style.fontStyle = "italic")
document.querySelector('.u').addEventListener('click', () => lastInput.style.textDecoration = "underline")
document.querySelector('.s').addEventListener('click', () => lastInput.style.textDecoration = "line-through")

// guardando ultimo input selecionado
let lastInput

add.addEventListener('click', handleNewText)
document.addEventListener('keypress', shotcuts)

function handleNewText () {
    const container = document.createElement('div')
    container.setAttribute('class', 'text-box')

    const text = document.createElement('textarea')
    text.setAttribute('placeholder', 'digite um texto aqui')
    text.setAttribute('onfocus', 'saveLastState(event)')

    const span = document.createElement('span')
    span.setAttribute('class', 'delete')
    span.setAttribute('onclick', 'handleRemove(event)')
    span.innerHTML = '<i class="fas fa-times"></i>'

    container.appendChild(text)
    container.appendChild(span)

    divText.appendChild(container) 
}
function handleRemove (event) {
    event.target.parentElement.remove()
}
function saveLastState (event) {
    lastInput = event.target
}
function shotcuts (event) {
    console.log(event.key)
}
