class Player {
  constructor() {
    this.width = 5;
    this.height = 10;
    this.positionX = 50;
    this.positionY = 50;

    this.thePlayer = document.getElementById("player");
    this.thePlayer.style.width = this.width + "vw";
    this.thePlayer.style.height = this.height + "vh";
    this.thePlayer.style.left = this.positionX + "vw";
    this.thePlayer.style.bottom = this.positionY + "vh";
    this.coins = [];
  }
  moveLeft() {
    this.positionX--;
    this.thePlayer.style.left = this.positionX + "vw";
    this.coin();
  }
  moveRight() {
    this.positionX++;
    this.thePlayer.style.left = this.positionX + "vw";
    this.coin();
  }
  moveDown() {
    this.positionY--;
    this.thePlayer.style.bottom = this.positionY + "vh";
    this.coin();
  }
  moveUp() {
    this.positionY++;
    this.thePlayer.style.bottom = this.positionY + "vh";
    this.coin();
  }
  coin() {
    if (this.coins.length === 0);

    const coinElements = document.getElementsByClassName("coins");
    for (let i = coinElements.length - 1; i >= 0; i--) {
      const coin = this.coins[i];
      const coinElement = coinElements[i];

      if (
        this.positionX < coinElement.positionX + coinElement.width &&
        this.positionX + this.width > coinElement.positionX &&
        this.positionY < coinElement.positionY + coinElement.height &&
        this.positionY + this.height > coinElement.positionY
      ) {
      
        
      }
    }
  }
}

const jimmy = new Player();
const allTheCoins = [];

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      jimmy.moveLeft();
      break;
    case "ArrowRight":
      jimmy.moveRight();
      break;
    case "ArrowUp":
      jimmy.moveUp();
      break;
    case "ArrowDown":
      jimmy.moveDown();
      break;
  }
});

class Money {
  constructor() {
    this.width = 2;
    this.height = 4;
    this.positionX = Math.floor(Math.random() * (100 - this.width + 1));
    this.positionY = Math.floor(Math.random() * (100 - this.height + 1));
    
    this.createDomElement();
  }

  

  createDomElement() {
    this.theMoney = document.createElement("div");

    this.theMoney.classList.add("coins");
    this.theMoney.style.width = this.width + "vw";
    this.theMoney.style.height = this.height + "vh";
    this.theMoney.style.left = this.positionX + "vw";
    this.theMoney.style.bottom = this.positionY + "vh";
    this.theMoney.style.borderRadius = 25 + "px";

    const parentElm = document.getElementById("skyview");
    parentElm.appendChild(this.theMoney);
  }
}

function createCoin() {
  const coin = new Money();
  allTheCoins.push(coin);
  setTimeout(createCoin, 1000);
}

createCoin();
