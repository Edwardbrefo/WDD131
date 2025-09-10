const yearspan = document.getElementById('currentyear');
yearspan.textContent = new Date().getFullYear();

const modifiedby = document.getElementById('lastModified');
modifiedby.textContent = 'lastModified' + document.lastModified;
