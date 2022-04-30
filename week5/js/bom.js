const listsize = document.querySelector('#favchap');
const buildButton = document.querySelector('button');
const list = document.querySelector('#list');

buildButton.addEventListener('click', function() {
let size = Number(listsize.value);

for (let i = 1; i <= size; i++) {
    let li = document.createElement('li');
    li.innerHTML = `Item: <strong>${i}</strong>`;
    list.appendChild(li);
}
})