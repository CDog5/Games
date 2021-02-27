const cardwrapper = document.querySelector('.card-wrapper');
const cards = new Array(7);
const startbtn = document.querySelector('#start');
var before = null;
class StartCard {
  constructor(id) {
    this.id = id;
    this.value = Math.floor((Math.random() * 10) + 1);
    before = this.value;
    this.colour = "#BEBEBE";
    this.element = document.createElement("div");
    this.element.classList.add('card');
    this.element.style.backgroundColor = this.colour;
    this.element.innerText = this.value;
    this.element.id = id;
    cardwrapper.appendChild(this.element);
  }
}
class Card {
    constructor(id) {
      this.id = id;
      this.no = Math.floor((Math.random() * 10) + 1);
      this.value = "?";
      this.colour = "#BEBEBE";
      this.element = document.createElement("div");
      this.lower = document.createElement("button");
      this.lower.innerText = "LOWER"
      this.element.classList.add('card');
      this.element.style.backgroundColor = this.colour;
      this.element.innerText = this.value;
      this.element.id = id;
      this.element.appendChild(this.lower);
      this.higher = document.createElement("button");
      this.higher.innerText = "HIGHER"
      this.element.appendChild(this.higher);
      this.higher.id = id;
      this.lower.id = id;
      this.lower.onclick = this.lowerClick;
      this.higher.onclick = this.upperClick;
      cardwrapper.appendChild(this.element);
    }
    lowerClick(){
      const thiscard = document.getElementById(this.id)
      thiscard.innerText = cards[this.id].no;
      if(before > parseInt(thiscard.innerText)){
        thiscard.style.backgroundColor = "#1FD537";
      }
      else{
        thiscard.style.backgroundColor = "#E40010";
      }
      before = parseInt(thiscard.innerText);
    }
    upperClick(){
      const thiscard = document.getElementById(this.id)
      thiscard.innerText = cards[this.id].no;
      if(before < parseInt(thiscard.innerText)){
        thiscard.style.backgroundColor = "#1FD537";
      }
      else{
        thiscard.style.backgroundColor = "#E40010";
      }
    }

  }
function start() {
  cardwrapper.innerHTML = "";
  for(var i = 0; i < 7; i++){
    if(i == 0){
      cards[i] = new StartCard(i);
    }
    else{
      cards[i] = new Card(i);
    }
  }
}
startbtn.onclick = start;
