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

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;

}


$(window).on('load', function() {
    let gradient = [];
    for (var i = 0; i < 10; i++) {
        var value = getRandomColor();
        gradient.push(value);
        console.log(gradient[0])
    }
    console.log('blue')

    // $('.filter').css('background', `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]}, ${gradient[3]}, ${gradient[4]}, ${gradient[5]}, ${gradient[6]}, ${gradient[7]}, ${gradient[8]}, ${gradient[9]})`);
    $('.filter').css({
        'background': `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]}, ${gradient[3]}, ${gradient[4]}, ${gradient[5]}, ${gradient[6]}, ${gradient[7]}, ${gradient[8]}, ${gradient[9]})`,
        'background-size': '200%, 200%'
    });


    $('.lozenge').hover(function() {
        $(this).css({ 'color': `${gradient[3]}` })
    }).mouseleave(function() {
        $(this).css({ 'color': 'white' })
    });

    $('.tag').hover(function() {
        $(this).css({ 'color': `${gradient[3]}` })
    }).mouseleave(function() {
        $(this).css({ 'color': 'white' })
    });

    $('.box').hover(function() {
        $(this).css({ 'color': `${gradient[3]}` })
    }).mouseleave(function() {
        $(this).css({ 'color': 'white' })
    });

    $('#watchButton').on('click', function() {
        $('.playerContainer').toggle();
    });

    var currentDiv = $("#a");
    var nextDiv, count = 1;
    var myInterval = setInterval(function() {
        if (count == 3) {
            currentDiv.fadeOut(300);
            currentDiv = $("#a");
            currentDiv.delay(500).fadeIn(300);
            count = 1;
        } else {
            count++;
            currentDiv.fadeOut(300);
            currentDiv = currentDiv.next();
            currentDiv.delay(500).fadeIn(300);
        }
    }, 6000);

});





//front page show/hide event
// $(function() {
//     $('.wrapper').hover(function() {
//         $('.happeningContainerDescription').show();
//         $('.happeningContainer').hide();
//     }, function() {
//         $('.happeningContainerDescription').hide();
//         $('.happeningContainer').show();
//     });
// });

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