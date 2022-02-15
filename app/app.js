

// Set the date we're counting down to
var countDownDate = new Date()
countDownDate.setHours(17)
countDownDate.setMinutes(30)
countDownDate.setSeconds(0)
var mirava = countDownDate.getTime();
var todaysdate = new Date();
var today = todaysdate.getFullYear() + ' ' + todaysdate.getMonth() + ' ' +  todaysdate.getDate();
var pausemidi = new Date();
pausemidi.setHours(12)
pausemidi.setMinutes(30)
pausemidi.setSeconds(0)
var pausepm = new Date();
pausepm.setHours(15)
pausepm.setMinutes(0)
pausepm.setSeconds(0)
var pausematin = new Date();
pausematin.setHours(10)
pausematin.setMinutes(0)
pausematin.setSeconds(0)
var pmatin = pausematin.getTime()
var pmidi = pausemidi.getTime()
var psoir = pausepm.getTime()
var x;

var pm = document.getElementById("pm")
var am = document.getElementById("am")
var midi = document.getElementById("midi")
var bye = document.getElementById("bye")
am.addEventListener("click", function(){
     clearInterval(x)
     x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = pmatin - now;


        if(distance > 0)
        {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("days").innerHTML = days + "d";
            document.getElementById("hours").innerHTML = hours + "h";
            document.getElementById("minutes").innerHTML = minutes + "m";
            document.getElementById("seconds").innerHTML = seconds + "s";
        }else{
            document.getElementById("days").innerHTML = "Expired";
            document.getElementById("hours").innerHTML = "Expired";
            document.getElementById("minutes").innerHTML = "Expired";
            document.getElementById("seconds").innerHTML = "Expired";
        }
    }, 1000);


})

midi.addEventListener("click", function(){
    
    clearInterval(x);
    x =setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = pmidi - now;


        if(distance > 0)
        {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("days").innerHTML = days + "d";
            document.getElementById("hours").innerHTML = hours + "h";
            document.getElementById("minutes").innerHTML = minutes + "m";
            document.getElementById("seconds").innerHTML = seconds + "s";
        }else{
            document.getElementById("days").innerHTML = "Expired";
            document.getElementById("hours").innerHTML = "Expired";
            document.getElementById("minutes").innerHTML = "Expired";
            document.getElementById("seconds").innerHTML = "Expired";
        }
    }, 1000);

})

pm.addEventListener("click", function(){
    

    clearInterval(x)
     x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = psoir - now;


        if(distance > 0)
        {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("days").innerHTML = days + "d";
            document.getElementById("hours").innerHTML = hours + "h";
            document.getElementById("minutes").innerHTML = minutes + "m";
            document.getElementById("seconds").innerHTML = seconds + "s";
        }else{
            document.getElementById("days").innerHTML = "Expired";
            document.getElementById("hours").innerHTML = "Expired";
            document.getElementById("minutes").innerHTML = "Expired";
            document.getElementById("seconds").innerHTML = "Expired";
        }
    }, 1000);

})

bye.addEventListener("click", function(){
    

    clearInterval(x)
     x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = mirava - now;


        if(distance > 0)
        {
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
            document.getElementById("days").innerHTML = days + "d";
            document.getElementById("hours").innerHTML = hours + "h";
            document.getElementById("minutes").innerHTML = minutes + "m";
            document.getElementById("seconds").innerHTML = seconds + "s";
        }else{
            document.getElementById("days").innerHTML = "Expired";
            document.getElementById("hours").innerHTML = "Expired";
            document.getElementById("minutes").innerHTML = "Expired";
            document.getElementById("seconds").innerHTML = "Expired";
        }
    }, 1000);

})

