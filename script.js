
const input = document.getElementById('input'); 
const addButton = document.querySelector('button'); 
const list = document.querySelector('.list'); 


function addTodo() {

    const todoText = input.value.trim();


    if (todoText !== '') {

        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        

        const todoSpan = document.createElement('span');
        todoSpan.textContent = todoText;


        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            todoItem.remove();


        });

      
        todoItem.appendChild(todoSpan);
        todoItem.appendChild(deleteButton);

        list.appendChild(todoItem);

  
        input.value = '';

  
    }
}

addButton.addEventListener('click', addTodo);


input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});


