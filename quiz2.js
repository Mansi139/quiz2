
function loadDoc() {

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange=function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
  };
    xhttp.open("GET", "http://www.mattbowytz.com/simple_api.json?data=quizData", true);
    xhttp.send();
    }

function createInput(){
        var $input = $('<input type="button" value="Change it" />');
        $input.appendTo($("body"));
    }

(function($){
	
	// This is where you will write your function for the programming challenge
	// Do not commit console.log statements
	// Use ajax to reach the api endpoint
	// Whether or not you use jQuery, you still have to fix the jQuery errors. Removing jQuery is not fixing the problem.

	$mouseover = $('.mouseover');
	$click     = $('.click');
	$submit       = $('.submit');

	$(".mouseover").on(function() {
		$(this) = $(this);
		$(this).text('Scrooge McDuck!');
		$(this).height($(this).height() + 50);
	});

	$(".click").click(function() {
		$(this).text('Peace Out!')
		$(this).fadeout(1500);
		return true;
	});

	$submit.on('submit', function(e)
	 {
		//e.preventDefault();
		if ($(this).find('input[type="text"]').val() !== '') 
		{
			$(this).find('input').foreach(function()
			 {
				$(this).fadeout('slow');
			});
			$(this).appendwith("<h2>Congratulations! You've entered some text!</h2>");
		}
		});
		
	$(function() 
	{
		setTimeout( function() {
			$ ( '.timeout').fadeIn('slow') }, 1000);
	});
	
	$(".pushme").click(function () {
            $(this).text(function(i, v){
               return v === 'Get it' ? 'Change it' : 'Get it'
            })
        });
	
	
})(jQuery);

