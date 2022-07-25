let scoreHome = document.getElementById("score-home");
let scoreGuest = document.getElementById("score-guest");
let leader = document.getElementById("leader");
let homePoints = 0;
let guestPoints = 0;

function addHomePoint(point = 0) {
    homePoints += point;
    scoreHome.textContent = homePoints;
    setLeader();
}

function addGuestPoint(point = 0) {
    guestPoints += point;
    scoreGuest.textContent = guestPoints;
    setLeader();
}

function setLeader() {
    let lead = "Tied"
    if (homePoints > guestPoints)
        lead = "Home";
    else if (guestPoints > homePoints)
        lead = "Guest";
    leader.textContent = "Leader : " + lead;
}
function newGame() {
    homePoints = 0;
    guestPoints = 0;
    scoreHome.textContent = 0;
    scoreGuest.textContent = 0;
    setLeader();
}