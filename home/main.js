function createPlayersCard(player) {
    const card = document.createElement('div');
    card.classList.add('card');

    const playerInfo = document.createElement('div');
    playerInfo.classList.add('player');

    const imgSrc = `https://assets.nhle.com/mugs/nhl/20222023/STL/${player.person.id}.png`;

    const playerImg = document.createElement('img');
    playerImg.classList.add('player-img');
    playerImg.src = imgSrc;

    const playerName = document.createElement('p');
    playerName.classList.add('player-info', 'person-fullname');
    playerName.textContent = `Player: ${player.person.fullName}`;

    const jerseyNumber = document.createElement('p');
    jerseyNumber.classList.add('player-info', 'person-jerseynumber');
    jerseyNumber.textContent = `#${player.jerseyNumber}`;

    const positionCode = document.createElement('p');
    positionCode.classList.add('player-info', 'person-position-code');
    positionCode.textContent = `Pos: ${player.position.code}`;

    playerInfo.appendChild(playerImg);
    playerInfo.appendChild(playerName);
    playerInfo.appendChild(jerseyNumber);
    playerInfo.appendChild(positionCode);

    card.appendChild(playerInfo);
    document.querySelector('#roster').appendChild(card);
}

async function getPlayers() {
    const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams/19?expand=team.roster');
    
    const data = await response.json();
    const players = data.teams[0].roster.roster;

    players.forEach(createPlayersCard);

    
}


getPlayers();