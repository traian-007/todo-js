const $root = document.querySelector('#ab')

const $input = createElement('input', $root)
const $buttonAdd = createButton('button', 'add', createTask)

const $filter = createElement('select', $root)
$filter.style.marginLeft = '20px'
const $option1 = createElement('option', $filter,'all')
const $option2 = createElement('option', $filter,'realised')
const $option3 = createElement('option', $filter, 'not realised')
const list = createElement('ol',$root)
list.style.width='300px'   

function createElement(name, parent, text = '') {
    const element = document.createElement(name)
    element.innerText = text
    parent.append(element)
    return element
}

function createButton(name, name2, callbackFunction) {
    const newButton = document.createElement(name);
    newButton.innerText = name2
    newButton.addEventListener('click', callbackFunction)
    $root.append(newButton)
    return newButton
}

function createTask () {
    let valueOInput = $input.value
    let task = createElement('li', list, valueOInput)
    task.addEventListener("click", realisedTask)
    task.style.color = "black"


    let crossRemove = createElement('img', task)
    crossRemove.src = 'crossed.png'
    crossRemove.style.paddingLeft= '20px'
    crossRemove.addEventListener("click", removeTask)
    $input.value = ''
    return task
}

function removeTask() {
    this.parentNode.remove()
}

function realisedTask () {
    if(this.style.color ==="black") { 
        this.style.color = 'red' 
        this.style.transform='scale(1.1)'}
    else{
        this.style.color ='black' 
        this.style.transform='scale(1)'} 
}

$filter.addEventListener('change', function() {
    console.log()
    switch(this.value) {
        case 'realised':   
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].hidden = false
                console.log(list.children[i].style.color)
                if(list.children[i].style.color==='black'){
                    list.children[i].hidden = true
                };
            };
            break;
        case 'not realised':   
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].hidden = false
                console.log(list.children[i].style.color)
                if(list.children[i].style.color==='red'){
                    list.children[i].hidden = true
                };
            };
            break;
        default:
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].hidden = false
            };
    }
}) 



