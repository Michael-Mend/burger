$(function() {
	// New burger send form

	$('#create-form').on('submit', (e) => {
		e.preventDefault();

		let newBurger = {
			burger_name: $('#burg').val().trim(),
			devoured: $('[name=devouredStatus]:checked').val().trim()
		};

		$.ajax('/api/burgers', {
			type: 'POST',
			data: newBurger
		}).then(() => {
			location.reload();
		});
	});
	// Update burger to go to devour list

	$('.burgerDevour').on('click', function(e) {
		e.preventDefault();

		let id = $(this).data('id');

		let newDevourState = {
			id: id,
			devoured: 1
		};

		$.ajax(`/api/burgers/${id}`, {
			type: 'PUT',
			data: newDevourState
		}).then(() => {
			location.reload();
		});
	});
});
