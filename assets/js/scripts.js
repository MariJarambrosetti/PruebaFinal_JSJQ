$(document).ready(function(){

// Variable para el like 
	// var corazonlike = 0;

// Integración de tweet en row 

	$('#myform').on('submit', function(event){
	event.preventDefault();
		var text = $('#comentarea').val();
		$('#comments').append(
			'<div class="comment">'+
			'<img src="assets/images/profilepic.jpg" alt="profile" class="commentimg img-responsive">'+
			'<h3>Homero Jimeno Simpsons</h3>'+
			'<p>'+
			text + 
			'</p>'+
			'<i class="fas fa-trash-alt basura"></i>'+
			'<i class="fas fa-heart corazon"></i>'+
			'<label id="display">0</label>'+
			'</div>')
		$('#comentarea').val('');
		$('#comentarea').focus();
	});

// Funcion likeable y display de like 

	$('#comments').on('click', '.corazon', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass('corazon_likeable');

		if ($(this).hasClass('corazon_likeable')) {
			$(this).next('#display').text(+1);
		} else {
			$(this).next('#display').text(0);
		}
	});




	

// Remove del twett

	$('#comments').on('click', '.basura', function(event){
		event.stopPropagation();
		$(this).parent().fadeOut();
	})
});