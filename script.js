$(function () {
    var end = new Date('04/03/2017 08:00 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            $('#days').html() = '0';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        var message =

        message = days + ' dage ';
        message += hours + ' timer ';
        message += minutes + ' minuter ';
        message += seconds + ' sekunder';

        // not assigning
        $('#days').html(message);
    }

    timer = setInterval(showRemaining, 1000);

    
});