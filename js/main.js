$document.ready(function(){

$('.play').click(function(){
    $(this).parent('#welcome').fadeOut(500);
});

$('.play').click(function(){
    $(this).parent('#boundary').fadeIn(500);
});

$('.boundary').css('cursor','crosshair');



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
}, 1000);
function(){
    if (seconds ==0) {
         $('#GameOver').fadeIn();
            $('#retry').click(function () {
                $('#GameOver').fadeOut();
            });
    }
};
});

