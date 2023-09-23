// WEB303 Assignment 2



/*  $(function(){
    //Creating the method to replace the value of #amount
    $("#prospect").on('click', function(){
        request();
    });

});

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


    $(function(){
    var content = document.getElementById('content');

    function request() {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);

        xhr.onload = function() {
            if (xhr.status === 200) {
                animateContent(xhr.responseText);
            } 
        };

        xhr.send();
    }

    function animateContent(newContent) {
        $(content).fadeOut(500, function () {
            $(this).html(newContent).fadeIn(500);
        });
    }

    // Handle clicks on links
    var links = document.querySelectorAll('a');
    links.forEach(function (link) {
        link.on('click', function (e) {
            e.preventDefault();

            var contentFile;

            if (this.id === 'prospect') {
                contentFile = 'prospect.html';
            } else if (this.id === 'convert') {
                contentFile = 'convert.html';
            } else if (this.id === 'retain') {
                contentFile = 'retain.html';
            }

            $(content).fadeOut(500, function () {
                $(this).html('');
                request(contentFile);
            });
        });
    });
});  