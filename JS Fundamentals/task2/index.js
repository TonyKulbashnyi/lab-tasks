const submit = document.querySelector('.submit');
const result = document.querySelector('.result');
const name = document.getElementById('name');
const range = document.getElementById('range');

function listening() {
    if (range.value <=100) {
        var div = document.createElement('div');
        div.className = 'result__box';
        div.style.width = range.value + '%';
        div.innerHTML = name.value;
        result.appendChild(div);
    } else {
        alert('MAX range - 100');
    }
}
submit.addEventListener('click', listening);
