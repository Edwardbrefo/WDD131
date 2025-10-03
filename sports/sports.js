// Fan Club Signup - Dynamic JS with all required features

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('footballForm');
    if (!form) return;

    // Load and display previous signups
    displaySignups();

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const club = form.club.value;
        const newsletter = form.newsletter.checked;

        // Conditional branching: validate name and email
        if (!name || !email) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Create signup object
        const signup = {
            name,
            email,
            club,
            newsletter,
            date: new Date().toLocaleString()
        };

        // Save to localStorage (array of signups)
        let signups = JSON.parse(localStorage.getItem('fanSignups') || '[]');
        signups.push(signup);
        localStorage.setItem('fanSignups', JSON.stringify(signups));

        // Show confirmation
        showMessage(`Thank you, ${name}! You have joined as a fan of ${club}.`, 'success');
        form.reset();
        displaySignups();
    });
});

// Helper: Show a message below the form
function showMessage(msg, type) {
    let msgElem = document.getElementById('formMsg');
    if (!msgElem) {
        msgElem = document.createElement('div');
        msgElem.id = 'formMsg';
        document.getElementById('footballForm').after(msgElem);
    }
    msgElem.textContent = msg;
    msgElem.style.color = type === 'success' ? 'green' : 'red';
    msgElem.style.margin = '1em 0';
}

// Display all signups below the form
function displaySignups() {
    let signups = JSON.parse(localStorage.getItem('fanSignups') || '[]');
    let listElem = document.getElementById('signupList');
    if (!listElem) {
        listElem = document.createElement('div');
        listElem.id = 'signupList';
        document.getElementById('footballForm').after(listElem);
    }
    if (signups.length === 0) {
        listElem.innerHTML = '<p>No fans have signed up yet. Be the first!</p>';
        return;
    }
    // Use array methods and template literals
    listElem.innerHTML = `<h3>Recent Signups</h3><ul>${signups.slice(-5).reverse().map(s => `<li><strong>${s.name}</strong> (${s.email}) - ${s.club}${s.newsletter ? ' <em>(Subscribed)</em>' : ''} <span style='color:#888;font-size:0.9em;'>[${s.date}]</span></li>`).join('')}</ul>`;
}
