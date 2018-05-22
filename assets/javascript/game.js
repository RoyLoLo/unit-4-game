$(document).ready(function(){

var wins =0;
var losses =0;
var stonevalue = [];
var usertotal = 0;

//game function to reset all starting values and randomize computer guess and stone values


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var compguess = randomIntFromInterval(19,120);
    console.log("compguess is : " + compguess);

for (var i =0; i<=5;i++){
    stonevalue[i] = randomIntFromInterval(1,12);
    console.log ("stone " +i +"s value is " + stonevalue[i]);
    }



     
// use $().on("click", function{}) to add stonevalues to usertotal for each stone

//whileloop (usertotal < compguess){keep playing}

//if (usertotal = compguess){display winner to #counter in html,wins++ and call game function to restart}

//else {display loser to #counter in html, losses++ and call game function to restart}