$(document).ready(function(){

var wins =0;
var losses =0;
var stonevalue = [];


function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

var compguess = randomIntFromInterval(19,120);
    console.log("compguess is : " + compguess);

for (var i =0; i<=5;i++){
    stonevalue[i] = randomIntFromInterval(1,12);
    console.log ("stone " +i +"s value is " + stonevalue[i]);
    }


    var usertotal = 0;  

    $("#mind").on("click", ".stonesize", function() {

       
        usertotal += 1;});
    

console.log(usertotal);


//$("##htmlelement").html("<html>fjdkal</html>"); will put second thing into html id or class





});//document.ready