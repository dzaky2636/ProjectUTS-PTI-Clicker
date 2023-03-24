// Controllers. Kostumisasi game.
const stats = {
    money: 0,
    moneyup: 1
};

upgradeCost = [10, 20, 30];
upgradeValue = ["Tahu", "Pizza", "Emas"];
mulCost = [10, 20, 30];
mulValue = [2, 3, 4];
autoClickCost = [10, 20, 30];
autoClickValue = [1, 2, 4];

for(i = 0; i < 3; i++){
    document.getElementById("menuUpgrade" + (i + 1)).childNodes[1].innerHTML = "Jual " + upgradeValue[i] + " (Cost: " + upgradeCost[i] + ")";
    document.getElementById("menuMultiplier" + (i + 1)).childNodes[1].innerHTML = "Multiplier " + mulValue[i] + "x (Cost: " + mulCost[i] + ")";
    document.getElementById("menuAutoClicker" + (i + 1)).childNodes[1].innerHTML = "Pekerja " + (i + 1) + " [+" + autoClickValue[i] +" cps] (Cost: " + autoClickCost[i] + ")";
}

// Lakukan ini setiap satu detik
setInterval(function(){
    document.getElementById("moneyDisplay").innerHTML = "Money: " + stats.money;
    checkIfLockedUnlocked();
    stats.money--;
    console.log(stats.autoClickerLevel);
}, 1000);

// Random booster
setInterval(function(){
    // do this
}, 60000);

// Saat klik
function clicked(){
    var moneyAnimation = document.createElement("p");
    moneyAnimation.innerHTML = "+" + stats.moneyup;

    stats.money += stats.moneyup;
    document.getElementById("moneyDisplay").innerHTML = "Money: " + stats.money;
    document.getElementById("moneyAnimation").appendChild(moneyAnimation);
    moneyAnimation.classList.add("moneyAnimation");
}

// Beli
function buyMultiplier(level){
    if(money >= mulCost[0]){

    }
}

// Check apa bisa dibeli
function checkIfLockedUnlocked(){
    up1 = document.getElementById("menuUpgrade1").childNodes[3];
    up2 = document.getElementById("menuUpgrade2").childNodes[3];
    up3 = document.getElementById("menuUpgrade3").childNodes[3];
    mul1 = document.getElementById("menuMultiplier1").childNodes[3];
    mul2 = document.getElementById("menuMultiplier2").childNodes[3];
    mul3 = document.getElementById("menuMultiplier3").childNodes[3];
    auto1 = document.getElementById("menuAutoClicker1").childNodes[3];
    auto2 = document.getElementById("menuAutoClicker2").childNodes[3];
    auto3 = document.getElementById("menuAutoClicker3").childNodes[3];

    if(stats.money >= mulCost[0]){
        mul1.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < mulCost[0]){
        mul1.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= mulCost[1]){
        mul2.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < mulCost[1]){
        mul2.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= mulCost[2]){
        mul3.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < mulCost[2]){
        mul3.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= autoClickCost[0]){
        auto1.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < autoClickCost[0]){
        auto1.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= autoClickCost[1]){
        auto2.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < autoClickCost[1]){
        auto2.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= autoClickCost[2]){
        auto3.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < autoClickCost[2]){
        auto3.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= upgradeCost[0]){
        up1.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < upgradeCost[0]){
        up1.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= upgradeCost[1]){
        up2.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < upgradeCost[1]){
        up2.setAttribute("class", "btn btn-secondary col-2");
    }
    if(stats.money >= upgradeCost[2]){
        up3.setAttribute("class", "btn btn-success col-2");
    }else if(stats.money < upgradeCost[2]){
        up3.setAttribute("class", "btn btn-secondary col-2");
    }
}   