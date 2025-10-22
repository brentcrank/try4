
// dashboardAndModal.js - Football Matrix UI Logic

function loadDashboard() {
    const dashboard = document.getElementById('dashboard');
    if (!dashboard) {
        console.error('Dashboard container not found');
        return;
    }

    // Mock team data
    const teams = [
        { name: 'Eagles', wins: 5, losses: 2 },
        { name: 'Tigers', wins: 4, losses: 3 },
        { name: 'Sharks', wins: 6, losses: 1 }
    ];

    // Clear existing content
    dashboard.innerHTML = '';

    // Render team cards
    teams.forEach(team => {
        const card = document.createElement('div');
        card.className = 'team-card';
        card.innerHTML = `
            <h3>${team.name}</h3>
            <p>Wins: ${team.wins}</p>
            <p>Losses: ${team.losses}</p>
        `;
        dashboard.appendChild(card);
    });
}

function openSimulationModal() {
    let modal = document.getElementById('simulation-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'simulation-modal';
        modal.className = 'modal';
        modal.innerHTML = `
            <div class='modal-content'>
                <span class='close-button'>&times;</span>
                <h2>Simulate Game</h2>
                <p>Game simulation logic goes here...</p>
            </div>
        `;
        document.body.appendChild(modal);

        // Close button logic
        modal.querySelector('.close-button').addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.style.display = 'block';
}
