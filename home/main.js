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
    playerName.textContent = `${player.person.fullName}`;

    const jerseyNumber = document.createElement('p');
    jerseyNumber.classList.add('player-info', 'person-jerseynumber');
    jerseyNumber.textContent = `#${player.jerseyNumber}`;

    const positionType = document.createElement('p');
    positionType.classList.add('player-info', 'person-position-type');
    //positionType.textContent = `Position Type: ${player.position.type}`;

    const positionName = document.createElement('p');
    positionName.classList.add('player-info', 'person-position-name');
    positionName.textContent = `Position: ${player.position.name}`;

    playerInfo.appendChild(playerImg);
    playerInfo.appendChild(playerName);
    playerInfo.appendChild(jerseyNumber);
    playerInfo.appendChild(positionType);
    playerInfo.appendChild(positionName);

    if(player.position.type === "Goalie") {
        console.log(playerInfo)
        card.appendChild(playerInfo);
        document.querySelector('#goalie').appendChild(card);
    }

    if(player.position.type === "Defenseman") {
        console.log(playerInfo)
        card.appendChild(playerInfo);
        document.querySelector('#defenseman').appendChild(card);
    }

    if(player.position.type === "Forward") {
        console.log(playerInfo)
        card.appendChild(playerInfo);
        document.querySelector('#forward').appendChild(card);
    }
}

async function getPlayers() {
    const response = await fetch('https://statsapi.web.nhl.com/api/v1/teams/19?expand=team.roster');
    
    const data = await response.json();
    const players = data.teams[0].roster.roster;

    players.forEach(createPlayersCard);  
}

getPlayers();