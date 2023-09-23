// WEB303 Assignment 2



/*  $(function(){
    $("#prospect").on('click', function(){
        request();
    });

/* });

function request(){
 var xhr = new XMLHttpRequest;
 xhr.open('GET','prospect.html',true);
 xhr.onload = function()
 {
  if(this.status=== 200)
  {
    let el = document.getElementById("content");
  
    el.innerHTML=xhr.responseText;
 
  }
 }   
  xhr.send();
}  */ 


$(function() {    
    $('#prospect').on('click', function() {
        request();
    });

    $('#convert').on('click', function() {
        request1();
    });
});

function request(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET','prospect.html', true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                // Animate the #content div to hide it
                $('#content').fadeOut('fast', function() {
                // Replace the content with the loaded HTML
                $('#content').html(xhr.responseText);
                // Animate the #content div to show the new content
                $('#content').fadeIn('fast');
            });
        } 
    }
    // Send the request
    xhr.send();

};

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

