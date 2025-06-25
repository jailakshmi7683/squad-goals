const playerData = {
  player1: {
    name: "Virat Smash",
    jersey: 18,
    matches: 250,
    strike: "145.3",
    best: "183 vs Pakistan"
  },
  player2: {
    name: "Rohit Blaster",
    jersey: 45,
    matches: 230,
    strike: "140.0",
    best: "264 vs SL"
  },
  player3: {
    name: "Jasprit Fire",
    jersey: 93,
    matches: 120,
    strike: "0.0",
    best: "6/19 vs Eng"
  },
  player4: {
    name: "Hardik Storm",
    jersey: 33,
    matches: 150,
    strike: "135.2",
    best: "91* vs Aus"
  },
  player5: {
    name: "KL Quick",
    jersey: 1,
    matches: 130,
    strike: "142.7",
    best: "111* vs WI"
  },
  player6: {
    name: "Shubman Speed",
    jersey: 77,
    matches: 70,
    strike: "134.8",
    best: "208 vs NZ"
  },
  player7: {
    name: "Ravindra Spin",
    jersey: 8,
    matches: 200,
    strike: "110.5",
    best: "7/42 vs SA"
  },
  player8: {
    name: "Suryakumar Sky",
    jersey: 63,
    matches: 100,
    strike: "175.6",
    best: "117 vs ENG"
  },
  player9: {
    name: "Axar Angle",
    jersey: 20,
    matches: 85,
    strike: "125.0",
    best: "5/29 vs BAN"
  },
  player10: {
    name: "Mohammed Thunder",
    jersey: 13,
    matches: 110,
    strike: "0.0",
    best: "5/26 vs AUS"
  },
};

function openModal(playerId) {
  const data = playerData[playerId];
  document.getElementById("modalName").innerText = data.name;
  document.getElementById("modalJersey").innerText = data.jersey;
  document.getElementById("modalMatches").innerText = data.matches;
  document.getElementById("modalStrike").innerText = data.strike;
  document.getElementById("modalBest").innerText = data.best;

  document.getElementById("playerModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("playerModal").style.display = "none";
}
