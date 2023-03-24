window.onload = (event) => {
    redrawButtons();
};

// Dibawah ini controllers. Ubah value untuk kostumisasi game.
const stats = {
    money: 0,   // uang mulai
    moneyup: 1, // nilai tambah saat click
    autoclicker: 0, // jumlah autoclicker awal
    multiplier: 1 // jumlah multiplier awal
};

    // Cost =  Harga awal
    // Value = Jumlah yang ditambah ketika dibeli
    // Incr = Setelah beli, harga naik sesuai ini
upgradeCost = [10, 20, 30];
upgradeValue = ["Tahu", "Pizza", "Emas"];

autoClickCost = [50, 200, 500];
autoClickValue = [1, 2, 5];
autoClickIncr = [200, 500, 1000];

mulCost = [50, 100, 250];
mulValue = [2, 3, 4];
mulIncr = [200, 500, 1000];

// saat klik
function clicked(){
    stats.money += (stats.moneyup * stats.multiplier * boost.onMultiplier);
    document.getElementById("moneyDisplay").innerHTML = "Money: " + stats.money;
    clickAnimation();
}

// Lakukan ini setiap satu detik
setInterval(function(){
    if(stats.autoclicker > 0){
        autoClicker();
    }
    checkIfLockedUnlocked();
    document.getElementById("moneyDisplay").innerHTML = "Money: " + stats.money;
}, 1000);

// autoclicker
var iClicker = 0;
function autoClicker(){
    setTimeout(function(){
        clickAnimation();
        stats.money += (stats.moneyup * stats.multiplier * boost.onMultiplier);
        iClicker++;
        if(iClicker < stats.autoclicker){
            autoClicker();
        }else{
            iClicker = 0;
            document.getElementById("moneyDisplay").innerHTML = "Money: " + stats.money;
        }
    }, 100); // kecepatan animasi
}

// saat coba beli autoclicker
function buyAutoClicker(level){
    if(stats.money < autoClickCost[level]){
        alert("Uang anda tidak cukup! :(");
    }else{
        stats.money -= autoClickCost[level];
        stats.autoclicker += autoClickValue[level];
        autoClickCost[level] += autoClickIncr[level];
        redrawButtons();
        document.getElementById("displayAutoClickerCount").innerHTML = "Auto Clicker (" + stats.autoclicker + " cps)";
    }
}

// saat coba beli multiplier
function buyMultiplier(level){
    if(stats.money < mulCost[level]){
        alert("Uang anda tidak cukup! :(");
    }else{
        stats.money -= mulCost[level];
        if(stats.multiplier == 1){
            stats.multiplier += mulValue[level] - 1;
        }else{
            stats.multiplier += mulValue[level];
        }
        mulCost[level] += mulIncr[level];
        redrawButtons();
        document.getElementById("displayMultiplierCount").innerHTML = "Multiplier (" + stats.multiplier + "x)";
    }
}

// animasi klik, digunakan pada klik dan autoclicker
function clickAnimation(){
    var moneyAnimation = document.createElement("p");
    moneyAnimation.innerHTML = "+" + (stats.moneyup * stats.multiplier * boost.onMultiplier);
    document.getElementById("moneyAnimation").appendChild(moneyAnimation);
    moneyAnimation.classList.add("moneyAnimation");
}

// Render ulang button
function redrawButtons(){
    for(i = 0; i < 3; i++){
        document.getElementById("menuUpgrade" + (i + 1)).childNodes[1].innerHTML = "Jual " + upgradeValue[i] + " (Cost: " + upgradeCost[i] + ")";
        document.getElementById("menuMultiplier" + (i + 1)).childNodes[1].innerHTML = "Multiplier " + mulValue[i] + "x (Cost: " + mulCost[i] + ")";
        document.getElementById("menuAutoClicker" + (i + 1)).childNodes[1].innerHTML = "Pekerja L" + (i + 1) + " [+" + autoClickValue[i] +" cps] (Cost: " + autoClickCost[i] + ")";
    }
}

// Set warna jika item bisa dibeli
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

// Random booster, setiap detik dibawah
const boost = {
    boostOn: false,
    boostCountDownStart: 30, // jumlah waktu saat off, default
    boostCountDown: 30, // jumlah waktu saat off, awal
    boostIncr: 5,   // increment jumlah waktu saat off
    onCountdownStart: 5, // jumlah waktu saat on, default
    onCountdown: 5, // jumlah waktu saat on, awal
    onMultiplier: 1 // simpan multiplier random
}

setInterval(function(){
    console.log(boost.boostOn);
    if(boost.boostOn == false){
        if(boost.boostCountDown > 0){
            boost.boostCountDown--;
            document.getElementById("boosterDisplay").innerHTML = "Random Booster (" + boost.boostCountDown + "s):";
        }
        if(boost.boostCountDown <= 0){
            document.getElementById("boosterButton").setAttribute("class", "btn btn-warning btn-sm ms-2");
        }
    }else{
        if(boost.onCountdown > 0){
            boost.onCountdown--;
            document.getElementById("boosterDisplay").innerHTML = "Random Booster " + boost.onMultiplier + "x <span class='text-success'>ON</span> (" + boost.onCountdown + "s):";
        }else{
            boost.onCountdown = boost.onCountdownStart;
            boost.onMultiplier = 1;
            boost.boostOn = false;
        }
    }
}, 1000);

function claimBoost(){
    document.getElementById("boosterButton").setAttribute("class", "btn btn-warning btn-sm ms-2 disabled");
    boost.boostOn = true;
    // dari 2x -> 5x
    // Rumus: Math.floor(Math.random() * (max - min + 1) ) + min;
    boost.onMultiplier = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    boost.boostCountDownStart += boost.boostIncr;
    boost.boostCountDown = boost.boostCountDownStart;
}