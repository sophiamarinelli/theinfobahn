//get time
setInterval(function() {
    d = new Date();

    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000 * -6));

    // return time as a string
    localTime = nd.toLocaleTimeString();
    document.getElementById("getTime").innerHTML = localTime;
    // console.log('hello');
}, 1);

//front page show/hide event
$(function() {
    $('.wrapper').hover(function() {
        $('.happeningContainerDescription').show();
        $('.happeningContainer').hide();
    }, function() {
        $('.happeningContainerDescription').hide();
        $('.happeningContainer').show();
    });
});

//sort function 

$('.box').on('click', function() {
    console.log('click')

    if ($('.classBlock').hasClass("class")) {
        $('.experience').hide();
        $('.performance').hide();
        $('.workshop').hide();
        $('.discussion').hide();
    } else if ($('.classBlock').hasClass("experience")) {
        $('.class').hide();
        $('.performance').hide();
        $('.workshop').hide();
        $('.discussion').hide();
    } else if ($('.classBlock').hasClass("performance")) {
        $('.class').hide();
        $('.experience').hide();
        $('.workshop').hide();
        $('.discussion').hide();
    } else if ($('.classBlock').hasClass("discussion")) {
        $('.class').hide();
        $('.experience').hide();
        $('.workshop').hide();
        $('.performance').hide();
    } else if ($('.classBlock').hasClass("workshop")) {
        $('.class').hide();
        $('.experience').hide();
        $('.discussion').hide();
        $('.performance').hide();
    }

});