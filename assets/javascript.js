// var stark = document.getElementById("stark");
// var targaryan = document.getElementById("targaryan");
// var nightWatch = document.getElementById("nightwatch");
// var tully = document.getElementById("tully");
// var unsullied = document.getElementById("unsullied");  

var starkEnemy = $("#starkEnemy");
var targaryanEnemy = $("#targaryanEnemy");
var nightEnemy = $("#nightEnemy");
var tullyEnemy = $("#tullyEnemy");
var unsulliedEnemy = $("#unsulliedEnemy"); 


var starkFight = $("#starkFight");
var targaryanFight = $("#targaryanFight");
var nightFight = $("#nightFight");
var tullyFight = $("#tullyFight");
var unsulliedFight = $("#unsulliedFight");

var fight = $(".fight");
var Enemies = $(".Enemies");

var Fighters = [];
You = []
var EnemyList = []

            
// each of the folliwng sets the attributes for each fighter: name, chance of hitting certain damage, health.
var stark = {   
        name: "Rob",
        health: 100,
        attack: function(){
            mainAttack = Math.round(Math.random() *10);    //create a random number b/w 0 and 10
        
            console.log(this.name);
            console.log(mainAttack);
            console.log("health:",this.health);
            console.log("Attack: roll 0 - 5; Power Attack: roll 7, 8 or 9; One hit Wonder: roll 10");
            if (mainAttack < 6){                                // set probabilites for certain attack power
                robattackPower = 50;
                console.log("Attack!")
                console.log("Attack Power:",robattackPower);
                
            } else if (mainAttack === 10) {
                robattackPower = 100;
                console.log("One Hit Wonder!");
                console.log("Attack Power:",robattackPower);

            } else if (mainAttack === 6 || 7 || 8 || 9){
                robattackPower = 75;
                console.log("Power Attack");
                console.log("Attack Power:",robattackPower);   
            }  

            console.log("--------------------");
        } 
    };

var targaryan = {
        name: "Dany",
        health: 75,
        attack: function(mainAttack){
            mainAttack = Math.round(Math.random() *10);
            console.log(this.name);
            console.log(mainAttack);
            console.log("health:", this.health);
            console.log("Attack: roll 0 - 3; Power Attack: roll 5, 6 or 7; Dragons: roll 8, 9, or 10");
            if (mainAttack < 4){
                danyattackPower = 50;
                console.log("Attack!")
                console.log("Attack Power:",danyattackPower);
                
            } else if (mainAttack === 4 || 5 || 6 || 7){
                danyattackPower = 75;
                console.log("Power Attack");
                console.log("Attack Power:",danyattackPower);
                
            }  else if (mainAttack === 8 || 9 || 10) {
                danyattackPower = 100;
                console.log("Dragons!");
                console.log("Attack Power:",danyattackPower);

            } 
            console.log("--------------------")
        }
    };

var nightWatch = {
        name: "John",
        health: 200,
        attack: function(mainAttack){
            mainAttack = Math.round(Math.random() *10);
            console.log(this.name);
            console.log(mainAttack);
            console.log("health:", this.health);
            console.log("Attack: roll 0 - 5; Power Attack: roll 6, 7, 8; One Hit Wonder: roll 9, or 10");
            if (mainAttack < 6){
                johnattackPower = 25;
                console.log("Attack!")
                console.log("Attack Power:",johnattackPower);
                
            } else if (mainAttack === 9 || 10) {
                johnattackPower = 100;
                console.log("One Hit Wonder!");
                console.log("Attack Power:",johnattackPower);

            } else if (mainAttack === 6 || 7 || 8){
                johnattackPower = 60;
                console.log("Power Attack");
                console.log("Attack Power:",johnattackPower);  
            } 
            console.log("--------------------")
        }
    };

var tully = {
        name: "Tully",
        health: 100,
        attack: function(mainAttack){
            mainAttack = Math.round(Math.random() *10);
            console.log(this.name);
            console.log(mainAttack);
            console.log("health:", this.health);
            console.log("Attack: roll 0 - 3; Power Attack: roll 4, 5, 6, 7, 8 or 9; One Hit Wonder: roll 8, 9, or 10");
            if (mainAttack < 4){
                tullyattackPower = 25;
                console.log("Attack!")
                console.log("Attack Power:",tullyattackPower);
                
            } else if (mainAttack === 10) {
                tullyattackPower = 100;
                console.log("One Hit Wonder!");
                console.log("Attack Power:",tullyattackPower);

            } else if (mainAttack === 4 || 5 || 6 || 7 || 8 || 9){
                tullyattackPower = 60;
                console.log("Power Attack");
                console.log("Attack Power:",tullyattackPower);  
            } 
            console.log("--------------------")
        }
    };

var unsullied = {
        name: "Greyworm",
        health: 150,
        attack: function(mainAttack){
            mainAttack = Math.round(Math.random() *10);
            console.log(this.name);
            console.log(mainAttack);
            console.log("health:", this.health);
            console.log("Attack: roll 0 - 6; Power Attack: roll 7, 8, or 9; One Hit Wonder: roll 10");
            if (mainAttack < 7){
                greyWormattackPower = 60;
                console.log("Attack!")
                console.log("Attack Power:",greyWormattackPower);
                
            } else if (mainAttack === 10) {
                greyWormattackPower = 85;
                console.log("One Hit Wonder?");
                console.log("Attack Power:",greyWormattackPower);

            } else if (mainAttack === 7 || 8 || 9){
                greyWormattackPower = 70;
                console.log("Power Attack");
                console.log("Attack Power:",greyWormattackPower);
                
            } 
            console.log("--------------------")        
        }
    };

stark.attack();
Fighters.push(stark);  

targaryan.attack();
Fighters.push(targaryan);

nightWatch.attack();
Fighters.push(nightWatch);

tully.attack();
Fighters.push(tully);

unsullied.attack();
Fighters.push(unsullied);

function repeatFunc(x) {
        i = Math.floor(Math.random() * 4);
        fight.css("visibility", "hidden");  
        x.css("visibility", "visible");
        $(".Enemies").css("visibility", "hidden");
        EnemyList[i].css("visibility", "visible");
}

//test make visible on particular hidden house symbol

$(document).ready(function() {

    $("#stark").on('click', function(){
        You = [];
        EnemyList = [];
        EnemyList.push(targaryanEnemy, nightEnemy, tullyEnemy, unsulliedEnemy);
        You.push(starkFight);
        repeatFunc(starkFight);
        // $("#fightButton").attr("id", "starkButton");
    });

    $("#targaryan").on('click', function(){
        You = [];
        EnemyList = [];
        EnemyList.push(starkEnemy, nightEnemy, tullyEnemy, unsulliedEnemy);
        You.push(targaryanFight);
        repeatFunc(targaryanFight);
    });

    $("#nightwatch").on('click', function(){
        You = [];
        EnemyList = [];
        EnemyList.push(targaryanEnemy, starkEnemy, tullyEnemy, unsulliedEnemy);
        You.push(nightFight);
        repeatFunc(nightFight);
    });

    $("#tully").on('click', function(){
        You = [];
        EnemyList = [];
        EnemyList.push(targaryanEnemy, nightEnemy, starkEnemy, unsulliedEnemy);
        You.push(tullyFight);
        repeatFunc(tullyFight);
    });

    $("#unsullied").on('click', function(){
        You = [];
        EnemyList = [];
        EnemyList.push(targaryanEnemy, nightEnemy, tullyEnemy, starkEnemy);
        You.push(unsulliedFight);
        repeatFunc(unsulliedFight);
    });

});



        battle = function (x, y, a, b, c, d){
            
            if (y !== 0 && x !== 0) {
                    c.attack();
                    d.attack();   
                }
                if (a > b) {
                    alert("rob wins fight");
                    x = x - a;
                    console.log(x);

                    // return x;
                    
                
                }  else if (b > a) {
                    y = y - b;
                    alert("dany wins fight");
                    console.log(y);
                    // return y;
                } 
                if (x <= 0) {
                    alert ("you won the battle!");
                    EnemyList[i].css("visibility", "hidden");
                    $("targaryan").attr("class", "hidden");
                }

        }



$("#fightButton").on('click', function(){
    battle(targaryan.health, stark.health, robattackPower, danyattackPower, stark, targaryan);
});
