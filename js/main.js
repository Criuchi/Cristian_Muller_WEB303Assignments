// WEB303 Assignment 2
// Cristian Muller - 0785530

$(function() {    
    // load the html pages after clicking
    $('#prospect').on('click', function() {
        request();
    });

    $('#convert').on('click', function() {
        request1();
    });

    $('#retain').on('click', function() {
        request2();
    });
});

// Function for loading prospect.html
function request(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','prospect.html', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                $('#content').fadeOut('fast', function() {
                $('#content').html(xhr.responseText);
                $('#content').fadeIn('fast');
            });
        } 
    }

    xhr.send();
};

//Function for loading convert.html
function request1(){
    var xhr1 = new XMLHttpRequest();
    xhr1.open('GET','convert.html', true);

    xhr1.onload = function() {
            if (xhr1.status === 200) {
                $('#content').fadeOut('fast', function() {
                $('#content').html(xhr1.responseText);
                $('#content').fadeIn('fast');
            });
        } 
    }

    xhr1.send();
};

//Function for loading retain.html
function request2(){
    var xhr2 = new XMLHttpRequest();
    xhr2.open('GET','retain.html', true);

    xhr2.onload = function() {
            if (xhr2.status === 200) {
                $('#content').fadeOut('fast', function() {
                $('#content').html(xhr2.responseText);
                $('#content').fadeIn('fast');
            });
        } 
    }

    xhr2.send();
};
