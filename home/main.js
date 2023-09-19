const nome = document.getElementById('name');
 
fetch('https://statsapi.web.nhl.com/api/v1/teams/19?expand=team.roster').then(resposta => {
    return resposta.json();
})


.then(data => {
        const datas = data.teams[0].roster.roster
        

         const players = datas.map((user, index, array) => {
            const getPersonalLink = `https://statsapi.web.nhl.com/api/v1/people/${user.person.id}`
            
             const html = `
                    <div class="card">
                        <div class="player">
                            <img class="player-img" src="https://assets.nhle.com/mugs/nhl/20222023/STL/${user.person.id}.png">
                            <p class="player-info person-fullname">Player: ${user.person.fullName}</p>
                            <p class="player-info person-jerseynumber">#${user.jerseyNumber}</p>
                            <p class="player-info person-position-code">Pos: ${user.position.code}</p>
                            <!-- <p class="player-info person-id">${getPersonalLink}</p> -->
                        </div>
                    </div>
                `

            if (user.position.type === "Goalie") {
                document.getElementById('goaliePlayers').innerHTML += html
            }

            if (user.position.type === "Defenseman") {
                document.getElementById('defensePlayers').innerHTML += html 
            }
                
            if (user.position.type === "Forward") {
                document.getElementById('forwardPlayers').innerHTML += html 
            }
        })
            
       console.log(datas)
    
})