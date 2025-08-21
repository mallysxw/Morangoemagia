const board = document.getElementById("game-board");

const personagens = [
  "moranguinho",
  "limãozinho",
  "cerejinha",
  "laranjinha",
  "amora linda"
];

// duplicar para formar pares
let cards = [...personagens, ...personagens];

// embaralhar
cards.sort(() => 0.5 - Math.random());

let firstCard = null;
let lockBoard = false;

// criar cartas
cards.forEach(personagem => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <img src="imagens/${personagem}.png" alt="${personagem}" width="100" height="100">
      </div>
      <div class="card-back">
        <img src="imagens/verso.png" alt="verso" width="100" height="100">
      </div>
    </div>
  `;

  card.addEventListener("click", () => flipCard(card, personagem));
  board.appendChild(card);
});

function flipCard(card, personagem) {
  if (lockBoard) return;
  if (card.classList.contains("flipped")) return;

  card.classList.add("flipped");

  if (!firstCard) {
    firstCard = { card, personagem };
  } else {
    if (firstCard.personagem === personagem) {
      // achou par 🎉
      firstCard = null;
    } else {
      // errou 😅
      lockBoard = true;
      setTimeout(() => {
        card.classList.remove("flipped");
        firstCard.card.classList.remove("flipped");
        firstCard = null;
        lockBoard = false;
      }, 1000);
    }
  }
}
