    const input = document.querySelector('#favchap');
    const addChapter = document.querySelector('button');
    const list = document.querySelector('#list');;

    addChapter.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            const newChapter = document.createElement('li');
            newChapter.textContent = input.value;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.addEventListener('click', function () {
            list.remove();
            input.focus();
        });
            list.append(deleteBtn);
            list.append(newChapter);
            input.focus();
        } else{
            alert('Please enter a chapter name.');
            input.focus();
        }
    });
