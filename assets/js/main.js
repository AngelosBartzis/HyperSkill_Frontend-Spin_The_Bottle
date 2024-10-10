/*Start of stage 2.
const gameStatus = document.getElementById('status');
const players = document.querySelectorAll('#players li');

let spinnedPlayers = [];

generateRandomPlayer();

function generateRandomPlayer() {
    for (let i = 0; i < players.length -1; i++) {
        spinnedPlayers.push(`Selected player: Player ${Math.floor(Math.random() * 6) + 1}`);
    }
}

function getRandomPlayer() {
    const randomPlayer = spinnedPlayers[Math.floor(Math.random() * spinnedPlayers.length)];
    gameStatus.textContent = randomPlayer;
    return randomPlayer;
}

function spin() {
    gameStatus.textContent = "Spinning...";
    console.log(setTimeout(getRandomPlayer, 2000));
}

document.querySelector('#spin').addEventListener('click', spin);
End of stage 2.*/

const gameStatus = document.getElementById('status');
const players = document.querySelectorAll('#players li');

let spinnedPlayers = [];

const addPlayerButton = document.getElementById('add-player');
addPlayerButton.addEventListener('click', savePlayerToList);


function savePlayerToList() {
    const playerInput = document.getElementById('player-name');
    const player = playerInput.value.trim();
    if (spinnedPlayers.includes(player) === false) {
        spinnedPlayers.push(player);
        playerInput.value = '';
        displayList();
        gameStatus.textContent = "Spin the bottle!";
    } else {
        gameStatus.textContent = "Player already exists!";
        playerInput.value = '';
    }
}

function displayList() {
    const listContainer = document.getElementById('players');
    listContainer.innerHTML = '';
    for (let i = 0; i < spinnedPlayers.length; i++) {
        const listPlayer = document.createElement('li');
        listPlayer.textContent = spinnedPlayers[i];
        listContainer.appendChild(listPlayer);
    }
}

function getRandomPlayer() {
    const randomPlayer = spinnedPlayers[Math.floor(Math.random() * spinnedPlayers.length)];
    gameStatus.textContent = (`Selected player: ${randomPlayer}`);
    return randomPlayer;
}

function spin() {
    gameStatus.textContent = "Spinning...";
    console.log(setTimeout(getRandomPlayer, 2000));
}

document.querySelector('#spin').addEventListener('click', spin);