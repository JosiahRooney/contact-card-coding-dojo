jQuery(function($) {
	$(document).ready(function() {
		
		// Show/Hide Description
		// $(document).on('click','.contact',function() {
		// 	if ( $(this).hasClass('shown_children') ) {
		// 		$('.shown_children').removeClass('shown_children');
		// 	} else {
		// 		$('.shown_children').removeClass('shown_children');
		// 		$(this).addClass('shown_children');	
		// 	}
		// });

		// Save Contact as Card
		$('.submit').on('click',function() {
			var fname = $('#fname').val();
			var lname = $('#lname').val();
			var desc = $('#description').val();

			if ( fname.length > 0 && lname.length > 0 && desc.length > 0 ) {
				$('.output').append('<div class="contact">'+'<div class="top">'+'<h2>'+fname+" "+lname+"</h2>"+"<small>Click for Description</small></div><div class='desc'>"+desc+"</div>");

				$('.input input, .input textarea').val('');
			} else {
				alert('Please enter a first name, last name, and description.');
			}
		});


		$(document).on('click','.contact',function() {
			$(this).children().each(function(){
				$(this).toggle();
			});
		});
	});
});