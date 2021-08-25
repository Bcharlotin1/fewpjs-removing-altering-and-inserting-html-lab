// Write your code here!
const mainElement = document.getElementById('main');

mainElement.remove();

let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
document.body.appendChild(newHeader);
newHeader.innerHTML = `is the champion`;