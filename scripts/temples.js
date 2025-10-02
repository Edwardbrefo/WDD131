const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < studentReport; i++){
    if (studentReport[i] < 30);
    console.log(studentReport[i]);}

const parent = document.querySelector('.parent');
const child = parent.querySelectorAll('span')
child.forEach(child => {
    child.style.fontstyle = 'italic';
    child.style.color = 'blue';
    child.style.textDecoration = 'underline';
});

const parent2 = document.querySelector('.parent2');
const child2 = parent2.querySelectorAll('span')
child2.forEach(child2 => { 
    child2.addEventListener('mouseover', () => {
        child2.style.fontstyle = 'italic';
        child2.style.color = 'red';
        child2.style.textDecoration = 'underline';
    })

    child2.addEventListener('mouseout', () => {
        child2.style.fontstyle = '';
        child2.style.color = '';
        child2.style.textDecoration = 'none';
    })
})

const paragraph = document.createElement('p');
paragraph.textContent = "This is a new paragraph added by JavaScript.";
