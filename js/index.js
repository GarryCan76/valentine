let url = window.location.href;
let index = url.indexOf('name=')
let mousePos = false;
let noBtn = document.getElementById('no_btn');
let card = document.getElementById('card');

document.onmousemove=function (e){
    let bound = 40;
    mousePos = {'x':e.clientX, 'y':e.clientY};
    let offset = getOffset(noBtn)
    let posChange = {'y':0};
    // console.log(offset)
    // console.log(mousePos)


    if (offset.top - bound < mousePos.y && offset.top > mousePos.y){
        console.log('top')
        posChange.y += 20;
    }else if (offset.top < mousePos.y && offset.top + bound > mousePos.y){
        console.log('bottom')
        posChange.y -= 20;
    }
    console.log(posChange)
    // console.log(mousePos)
    changePos(card, posChange)

}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY
    };
}

function changePos(element, cardOffset){
    console.log("oki " + element.style.top)
    element.style.left = 0 +'px';
    element.style.top = cardOffset.y  +'px'
}

let name = url.substring(index + 5)
console.log(index)
if (index === -1){
    name = '';
}
let nameElement = document.getElementById('name');
nameElement.innerText = name;
