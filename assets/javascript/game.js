$(document).ready(function(){
//function gamestart(){  //game function to reset all starting values and randomize computer guess and stone values
alert("game start");

var wins =0;
var losses =0;
var stonevalue = [];
var usertotal = 0;



//random number funtion from 19-120
function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

//random computer guess
var compguess = randomIntFromInterval(19,120);
    console.log("compguess is : " + compguess);


//random assignment of stone value from 1-12;
for (var i =0; i<=5;i++){
    stonevalue[i] = randomIntFromInterval(1,12);
    console.log ("stone " +i +"s value is " + stonevalue[i]);};
// use $().on("click", function{}) to add stonevalues to usertotal for each stone while loop to keep guessing
   
while (usertotal < compguess){

    $("#mind").on("click",function(){
        
        alert("you clicked  stone 1");
    })

    $("#power").on("click",function(){
        
        alert("you clicked  stone 2");
    })

    $("#soul").on("click",function(){
        
        alert("you clicked  stone 3");
    })

    $("#reality").on("click",function(){
        
        alert("you clicked  stone 4");
    })

    $("#space").on("click",function(){
        
        alert("you clicked  stone 5");
    })

    $("#time").on("click",function(){
        
        alert("you clicked  stone 6");
    })
}

if (usertotal === compguess) {
    $("#winloss").text("Nice Job!");
    wins++;
    $("#wintotal").text(wins);
    //restart game function
}


else{
    $("#winloss").text("You Suck!");
    losses++;
    $("#losstotal").texl(losses);
    //restart game function
};


     


//whileloop (usertotal < compguess){keep playing}

//if (usertotal = compguess){display winner to #counter in html,wins++ and call game function to restart}

//else {display loser to #counter in html, losses++ and call game function to restart}

 //gamestart};
}); //ready
