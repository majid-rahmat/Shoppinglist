$(document).ready(function() {
	$('button').click(function() {
		$('ul').append('<li>' + $('input').val() + '<button class="line-through">X</button><button class="remove">Remove</button></li>');
	});
	$('ul').on('click','.line-through',function() {
		$(this).parent().css('text-decoration','line-through');
	});
	$('ul').on('click','.remove',function() {
		$(this).parent().remove();
	});
});