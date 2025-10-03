const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        imageUrl: "images/accra-ghana.jpg"
    },
    {
        templeName: "Salt Lake",
        location: "Draper, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "images/draper-utah.jpg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54365,
        imageUrl: "images/nauvoo-illinois.jpg"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Footer year and time
    const yearElem = document.getElementById('currentyear');
    if (yearElem) yearElem.textContent = new Date().getFullYear();
    const timeElem = document.getElementById('currentTime');
    if (timeElem) {
        const updateTime = () => {
            const now = new Date();
            timeElem.textContent = ' ' + now.toLocaleTimeString();
        };
        updateTime();
        setInterval(updateTime, 1000);
    }
    // Footer last modified
    const footer = document.querySelector('footer');
    if (footer) {
        let modElem = document.getElementById('lastModified');
        if (!modElem) {
            modElem = document.createElement('p');
            modElem.id = 'lastModified';
            footer.appendChild(modElem);
        }
        modElem.textContent = 'Last Modified: ' + document.lastModified;
    }

    // Temple filtering logic
    const main = document.querySelector('main');
    let cardsContainer = document.createElement('div');
    cardsContainer.id = 'templeCards';
    cardsContainer.style.display = 'flex';
    cardsContainer.style.flexWrap = 'wrap';
    cardsContainer.style.gap = '1.5em';
    cardsContainer.style.justifyContent = 'center';
    main.appendChild(cardsContainer);

    function renderTemples(filteredTemples) {
        cardsContainer.innerHTML = '';
        filteredTemples.forEach(temple => {
            const card = document.createElement('div');
            card.className = 'temple-card';
            card.style.border = '1px solid #ccc';
            card.style.borderRadius = '10px';
            card.style.padding = '1em';
            card.style.background = '#fff';
            card.style.boxShadow = '0 2px 8px rgba(0,0,0,0.07)';
            card.style.width = '260px';
            card.style.textAlign = 'center';
            card.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" style="width:100%;height:auto;border-radius:6px;margin-bottom:0.7em;">
              <h3 style="color:#c9b037;">${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
            `;
            cardsContainer.appendChild(card);
        });
    }

    // Filter functions
    function showAll() {
        renderTemples(temples);
    }
    function showOld() {
        renderTemples(temples.filter(t => {
            const year = parseInt(t.dedicated.split(',')[0], 10);
            return year < 1900;
        }));
    }
    function showNew() {
        renderTemples(temples.filter(t => {
            const year = parseInt(t.dedicated.split(',')[0], 10);
            return year > 2000;
        }));
    }
    function showLarge() {
        renderTemples(temples.filter(t => t.area > 90000));
    }
    function showSmall() {
        renderTemples(temples.filter(t => t.area < 10000));
    }

    // Navigation event listeners
    const navLinks = document.querySelectorAll('nav a');
    if (navLinks.length >= 5) {
        navLinks[0].addEventListener('click', e => { e.preventDefault(); showAll(); });
        navLinks[1].addEventListener('click', e => { e.preventDefault(); showOld(); });
        navLinks[2].addEventListener('click', e => { e.preventDefault(); showNew(); });
        navLinks[3].addEventListener('click', e => { e.preventDefault(); showLarge(); });
        navLinks[4].addEventListener('click', e => { e.preventDefault(); showSmall(); });
    }

    // Show all temples by default
    showAll();
});
