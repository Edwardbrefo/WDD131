const input = document.querySelector('#favchap');
const addChapter = document.querySelector('button');
const list = document.querySelector('#list');

// Try to load saved chapters from localStorage; otherwise use current DOM list; finally default to []
const chaptersArray = (function () {
    try {
        const raw = localStorage.getItem('chapters');
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.warn('Invalid JSON in localStorage.chapters, falling back', e);
    }
    return getChapterList() || [];
})();

// Save chaptersArray to localStorage
function setChapterList() {
    try {
        localStorage.setItem('chapters', JSON.stringify(chaptersArray));
    } catch (e) {
        console.warn('Could not save chapters to localStorage', e);
    }
}

// Build and append a list item for a chapter
function displayList(chapterName) {
    const li = document.createElement('li');
    // text node so deleting button won't affect text retrieval
    li.appendChild(document.createTextNode(chapterName));

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', function () {
        const parentLi = this.parentElement;
        if (!parentLi) return;
        const name = (parentLi.firstChild && parentLi.firstChild.nodeValue) ? parentLi.firstChild.nodeValue.trim() : parentLi.textContent.replace('❌', '').trim();
        parentLi.remove();
        const idx = chaptersArray.indexOf(name);
        if (idx > -1) {
            chaptersArray.splice(idx, 1);
            setChapterList();
        }
        input.focus();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

addChapter.addEventListener('click', function () {
    const value = input.value.trim();
    if (value !== '') {
        // Call displayList with the input value
        displayList(value);
        // Push the input into chaptersArray
        chaptersArray.push(value);
        // Update localStorage
        setChapterList();
        // Clear and focus input
        input.value = '';
        input.focus();
    } else {
        alert('Please enter a chapter name.');
        input.focus();
    }
});

function getChapterList() {
    const items = Array.from(document.querySelectorAll('#list li'));
    return items.map(li => {
        const first = li.firstChild && li.firstChild.nodeValue ? li.firstChild.nodeValue.trim() : '';
        return first || li.textContent.replace('❌', '').trim();
    });
}

// Initial render from chaptersArray
chaptersArray.forEach(chapter => displayList(chapter));