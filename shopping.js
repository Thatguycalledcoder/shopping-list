const list = document.querySelector('ul');
const input = document.querySelector('input');
const btn = document.querySelector('button');

const deleteItem = function(e) {
    // e.preventDefault();
    list.removeChild(e.target.parentNode);
}

const addItem = function(e) {
    if (input.value === '' || input.value === undefined) {
        input.focus();
        return alert("Please enter a shopping item");
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');

    li.appendChild(span);
    li.appendChild(deleteButton);
    
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', deleteItem);
    span.textContent = input.value + " ";

    list.appendChild(li);

    input.value = "";
    input.focus();
}

btn.addEventListener('click', addItem);