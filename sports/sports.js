

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('footballForm');
    if (!form) return;

   
    displaySignups();

    displayGhanaMatchResults(ghanaMatches);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const club = form.club.value;
        const newsletter = form.newsletter.checked;

      
        if (!name || !email) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }

       
        const signup = {
            name,
            email,
            club,
            newsletter,
            date: new Date().toLocaleString()
        };

     
        let signups = JSON.parse(localStorage.getItem('fanSignups') || '[]');
        signups.push(signup);
        localStorage.setItem('fanSignups', JSON.stringify(signups));

       
        showMessage(`Thank you, ${name}! You have joined as a fan of ${club}.`, 'success');
        form.reset();
        displaySignups();
    });
});


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
    
    listElem.innerHTML = `<h3>Recent Signups</h3><ul>${signups.slice(-5).reverse().map(s => `<li><strong>${s.name}</strong> (${s.email}) - ${s.club}${s.newsletter ? ' <em>(Subscribed)</em>' : ''} <span style='color:#888;font-size:0.9em;'>[${s.date}]</span></li>`).join('')}</ul>`;
}

const ghanaMatches = [
  {
    homeTeam: "Nations FC",
    awayTeam: "Asante Kotoko",
    score: "0 - 0",
    status: "Final",
    venue: "Dr Kwame Kyei Sports Complex",
    date: "Oct 11, 2025"
  },
  {
    homeTeam: "Asante Kotoko",
    awayTeam: "Bibiani GoldStars",
    score: "2 - 0",
    status: "Final",
    venue: "Baba Yara Stadium",
    date: "Oct 8, 2025"
  },
  {
    homeTeam: "Northern City",
    awayTeam: "Bolga AllStars",
    score: "4 - 4",
    status: "Final",
    venue: "Division One League",
    date: "Oct 12, 2025"
  },
  {
    homeTeam: "Police Nationals",
    awayTeam: "Elmina Sharks",
    score: "1 - 0",
    status: "Final",
    venue: "Division One League",
    date: "Oct 12, 2025"
  }
];


function displayGhanaMatchResults(matches) {
  const matchFeed = document.getElementById("matchFeed");
  if (!matchFeed) return;

  matchFeed.innerHTML = ""; 

  matches.forEach(match => {
    const matchItem = document.createElement("div");
    matchItem.innerHTML = `
      <h3>${match.homeTeam} vs ${match.awayTeam}</h3>
      <p><strong>Score:</strong> ${match.score}</p>
      <p><strong>Status:</strong> ${match.status}</p>
      <p><strong>Venue:</strong> ${match.venue}</p>
      <p><strong>Date:</strong> ${match.date}</p>
      <hr>
    `;
    matchFeed.appendChild(matchItem);
  });
}

