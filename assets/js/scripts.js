$(document).ready(function(){

	

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
			'</div>')
		$('#comentarea').val('');
		$('#comentarea').focus();
	});

	$('.comments').on('click', '.corazon', function(event){
		event.preventDefault();
		event.stopPropagation();
		$(this).toggleClass('corazon_likeable');
	})




});