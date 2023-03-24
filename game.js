// Game Layout

money = 0;
moneyup = 1;

function clicked(){
    var moneyAnimation = document.createElement("p");
    moneyAnimation.innerHTML = "+1";

    money += moneyup;
    document.getElementById("moneyDisplay").innerHTML = "Money: " + money;
    document.getElementById("moneyAnimation").appendChild(moneyAnimation);
    moneyAnimation.classList.add("moneyAnimation");
}