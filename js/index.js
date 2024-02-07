let url = window.location.href;
let index = url.indexOf('name=')



let name = url.substring(index + 5)
console.log(index)
if (index === -1){
    name = '';
}
let nameElement = document.getElementById('name');
nameElement.innerText = name;
