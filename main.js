const $root = document.querySelector('#ab')
$root.classList.add('container')

const $h1 = createElement('h1', $root,'hello world')

const $input = createElement('input', $root)
$input.addEventListener('keypress', createTask)

const $buttonAdd = createButton('button', 'Add', createTask)

const $filter = createElement('select', $root)
const $option1 = createElement('option', $filter,'All')
const $option2 = createElement('option', $filter,'Realised')
const $option3 = createElement('option', $filter, 'Not realised')

const list = createElement('ul',$root)

// Utils

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

//Input create task

function createTask (e) {
    if(e.type ==='click' || e.key ==='Enter'){
        let valueOInput = $input.value
        let task = createElement('li', list, valueOInput)
        task.addEventListener("click", realisedTask)
        task.style.color = "black"
    
    
        let crossRemove = createElement('img', task)
        crossRemove.src = 'crossed.png'
        crossRemove.addEventListener("click", removeTask)
        $input.value = ''
        return task
    }
}

// Remove Task

function removeTask() {
    this.parentNode.remove()
}


//Select realised task

function realisedTask () {
    if(this.style.color ==="black") { 
        this.style.color = '#7f2525' 
        this.style.borderLeft='4px solid green'
        // this.style.transform='scale(1.1)'
    }
    else{
        this.style.color ='black' 
        this.style.borderLeft='0px solid green'
        // this.style.transform='scale(1)'
    } 
}


//Filter

$filter.addEventListener('change', function() {
    switch(this.value) {
        case 'Realised':   
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].hidden = false
                if(list.children[i].style.color==='black'){
                    list.children[i].hidden = true
                };
            };
            break;
        case 'Not realised':   
            for (let i = 0; i < list.children.length; i++) {
                list.children[i].hidden = false
                if(list.children[i].style.color==='rgb(127, 37, 37)'){
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



