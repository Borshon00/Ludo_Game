function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let diceImage = document.getElementById("ludo");
    diceImage.src = "img/" + randomNumber + ".png";
}