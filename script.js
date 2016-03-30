$(document).ready(function() {

$('#form_new_entry').submit(function(event){
	event.preventDefault();
	var str = $('input:text').val();
	if(str === ''){
		return;
	}

	$('ul').append('<li><input class="class_check" type="checkbox"></input>' + str + '</li>');
	$('input:text').val('');
});

$('#form_delete').submit(function(event){
	event.preventDefault();

	$(':checked').parent().remove();

});

$('#form_reset').submit(function(event){
	event.preventDefault();

	$('li').remove();
});

});