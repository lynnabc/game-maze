$(document).ready(function(){

    $('#maze').css({'cursor': 'crosshair'});
    $('#retry').replaceWith(function() {
     return $("<a></a>").attr("href","index.html").append($(this).contents());
   });

       var minutes = 1;
    var seconds = minutes * 60;

    function convertIntToTime (num) {
        var mins = Math.floor(num/60);
        var secs = num % 60;
        var timerOutput = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;
        return(timerOutput);
    }

    var countdown = setInterval(function() {
        var current = convertIntToTime(seconds); 
        $('.timer').html(current); 
        if(seconds == 0) { 
        clearInterval(countdown); 
        }
        seconds--; 
    }, 1000);var minutes = 1;
    var seconds = minutes * 60;

    function convertIntToTime (num) {
        var mins = Math.floor(num/60);
        var secs = num % 60;
        var timerOutput = (mins < 10 ? "0" : "" ) + mins + ":" + (secs < 10 ? "0" : "" ) + secs;
        return(timerOutput);
    }

    var countdown = setInterval(function() {
        var current = convertIntToTime(seconds); 
        $('.timer').html(current); 
        if(seconds == 0){ 
        clearInterval(countdown); 
        setTimeout("window.location.href='lose.html';");
        }
        seconds--; 
    }, 1000);
    

});


