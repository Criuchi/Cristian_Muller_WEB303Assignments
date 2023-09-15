/*
	WEB 303 Assignment 1 - jQuery
	{Cristian Muller - 0785530}
*/

	$(function(){
		//Creating the method to replace the value of #amount
		$("#yearly-salary, #percent").on('change', function(){
			calculationValue();
		});

	});
	
	//Creating the function
	function calculationValue(){
		//Declaring variables
		
		var salary = $('#yearly-salary').val();
		var percent = $('#percent').val();
		var result = (salary * percent)/100;
		
		//Replace the new result in span
		$('#amount').html("$" + result.toFixed(2));
	};
	
