
var wins =0;
var losses =0;
var stonevalue = [];
var usertotal = 0;
var c;

function totalcount(c)
{usertotal= usertotal + stonevalue[c]; };

//random number funtion from 19-120
function randomIntFromInterval(min,max)
{return Math.floor(Math.random()*(max-min+1)+min);}

//random computer guess
var compguess = randomIntFromInterval(19,120);
    $("#computer").text(compguess);


//random assignment of stone value from 1-12;
for (var i =0; i<=5;i++){
    stonevalue[i] = randomIntFromInterval(1,12);
    console.log ("stone " +i +"s value is " + stonevalue[i]);};
    
    /*  could i include
    $("#s"+i).click(function()
    {totalcount(i); $("#user").text(usertotal);})
    in the for loop???  */

    $("#s0").click(function()
    {totalcount(0); $("#user").text(usertotal);
        if (usertotal === compguess) {
            wins++;
            $("#winupdate").text(wins);
            reset();
        };   

        if (usertotal > compguess){
            losses++;
            $("#lossupdate").text(losses);
            reset();
        };
    })
        
    
    $("#s1").click(function()
    {totalcount(1); $("#user").text(usertotal);
        if (usertotal == compguess) {
            wins++;
            $("#winupdate").text(wins);
            reset();
        }; 

        if (usertotal > compguess){
            losses++;
            $("#lossupdate").text(losses);
            reset();
        };
    })

    $("#s2").click(function()
    {totalcount(2); $("#user").text(usertotal);
        if (usertotal == compguess) {
            wins++;
            $("#winupdate").text(wins);
            reset();
        };    

        if (usertotal > compguess){
            losses++;
            $("#lossupdate").text(losses);
            reset();
        };
    })

    $("#s3").click(function()
    {totalcount(3); $("#user").text(usertotal);
        if (usertotal == compguess) {
            wins++;
            $("#winupdate").text(wins);
            reset();
        }; 

        if (usertotal > compguess){
            losses++;
            $("#lossupdate").text(losses);
            reset();
        };
    })

    $("#s4").click(function()
        {totalcount(4); $("#user").text(usertotal);
        if (usertotal == compguess) {
            wins++;
            $("#winupdate").text(wins);
            reset();
        };   

        if (usertotal > compguess){
            losses++;
            $("#lossupdate").text(losses);
            reset();
        };
    })

    $("#s5").click(function()
    {totalcount(5); $("#user").text(usertotal);
        if (usertotal == compguess) {
            wins++;
            $("#winupdate").text(wins);
            reset();
        };    

        if (usertotal > compguess){
            losses++;
            $("#lossupdate").text(losses);
            reset();
        };  
    })

    function reset(){
        var compguess = randomIntFromInterval(19,120);
        for (var i =0; i<=5;i++){
            stonevalue[i] = randomIntFromInterval(1,12);
            console.log ("stone " +i +"s value is " + stonevalue[i]);};
        $("#computer").text(compguess);
        usertotal = 0;
        $("#user").text(usertotal);
    }





