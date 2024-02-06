let url = window.location.href;
let index = url.indexOf('name=')


let name = url.substring(index + 5)
let nameElement = document.getElementById('name');
nameElement.innerText = name;
console.log(name)