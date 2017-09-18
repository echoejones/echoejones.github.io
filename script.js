var guest_count = document.getElementById("guest-count");

guest_count.addEventListener("input", function(){
	var current_count = guest_count.value;
	for (i = 1; i < 11; i++){
		var guest_name_element = document.getElementById("guest-name" + i).parentElement;
		if (i <= current_count){
			if (guest_name_element.classList.contains("hidden")) {
				guest_name_element.classList.remove("hidden");
			}
		} else {
			if (!guest_name_element.classList.contains("hidden")) {
				guest_name_element.classList.add("hidden");
			}
		}
	}
});

$(function() {

	// Get the form.
	var form = $('#RSVP Form');

	// Get the messages div.
	var formMessages = $('#form-messages');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Serialize the form data.
		var formData = $(form).serialize();

		// Submit the form using AJAX.
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			// Make sure that the formMessages div has the 'success' class.
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');

			// Set the message text.
			$(formMessages).text(response);

			// Clear the form.
			$('#name').val('');
			$('#email').val('');
			$('#phone-number').val('');
		})
		.fail(function(data) {
			// Make sure that the formMessages div has the 'error' class.
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			// Set the message text.
			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});

	});

});
