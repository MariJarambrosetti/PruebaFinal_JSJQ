$(document).ready(function(){

	var tweet = $('#comentarea').val();

	$('#myform').on('submit', function(event){
		event.preventDefault();
		$('.comments').append('<div class="comment">'+
			'<img src="assets/images/profilepic.jpg" alt="profile" class="commentimg img-responsive">'+
			'<h3>Homero Jimeno Simpsons</h3>'+
			tweet+
			'<i class="fas fa-trash-alt basura"></i>'+
			'<i class="fas fa-heart corazon"></i>'
		)

	})


})