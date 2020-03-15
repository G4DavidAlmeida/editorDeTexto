const $ = document.querySelector.bind(document)
// container com textos
const divText = $('.text')

// botão de adicionar
const add = $('.add')

// criando eventos dos botões
$('.t').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.fontSize = '25px'
})
$('.b').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.fontWeight = 'bold'
})
$('.i').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.fontStyle = "italic"
})
$('.u').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.textDecoration = "underline"
})
$('.s').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.textDecoration = "line-through"
})
$('.link').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    const domain = prompt("Digite o link do dominio que deseja redirecionar\n obs: incluindo o https://")
    if (!domain) return;
    const content = lastInput.value
    console.log(content)
    const container = lastInput.parentElement
    lastInput.remove()
    const link = document.createElement('a')
    link.setAttribute('href', domaoin)
    link.setAttribute('class', 'input-link')
    link.innerHTML = content
    container.insertAdjacentElement('afterbegin', link)
})
$('.left').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.textAlign = 'left'
})
$('.center').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.textAlign = 'center'
})
$('.right').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.textAlign = 'right'
})
$('.justify').addEventListener('click', () => {
    if (!lastInput) return alert('Nenhum componente selecionado')
    lastInput.style.textAlign = 'justify'
})
// guardando ultimo input selecionado
let lastInput

add.addEventListener('click', handleNewText)
document.addEventListener('keypress', shotcuts)

function handleNewText () {
    const container = document.createElement('div')
    container.setAttribute('class', 'text-box')

    const text = document.createElement('input')
    text.setAttribute('type', 'text')
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
    lastInput = null
}
function saveLastState (event) { lastInput = event.target }
function shotcuts (event) { console.log(event.key) }
