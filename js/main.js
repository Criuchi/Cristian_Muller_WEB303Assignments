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
    // Attach a click event handler to all anchor tags in the menu
    $('#prospect').on('click', function() {
  
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
        };
  
        // Send the request
        xhr.send();
    });
  });