$(document).ready(function() {

// var todos = JSON.parse(localStorage.getItem('todos')) || [];

// for(var i = 0; i < todos.length; i++) {
// 	addToDo(Todos[i]);
// }

//$('ul').on('click', 'input:checkbox', strikethrough);


/*--- CREATE EVENT LISTERS ---*/
$('#form_new_entry').submit(addEntry);

$('#form_delete').submit(removeEntry);

$('#form_reset').submit(resetList);
// function strikethrough(e){
// 	console.log(e);
// 	e.preventDefault();
// 	$(this).next().style.textDecoration('strikethrough');
// }

});

var addEntry = function(e) {
	e.preventDefault();

	var str = $('input:text').val();
	if(str === ''){
		return;
	}

	$('ul').sortable();

	// create a list item

	// create a delete button
	var deleteButton = $('<div class="class_button"></div>');
	var editButton = $('<div class="class_button"</div>');
	deleteButton.click(mark);

	var listItem = $('<li></li>');
	$('ul').append(listItem);
	listItem.append(deleteButton);
	listItem.append(editButton);
	listItem.append(str);

	$('input:text').val('');
}

var removeEntry = function(e) {
	event.preventDefault();

	$('.class_strike').remove();
}

var resetList = function(e) {
	event.preventDefault();

	$('li').remove();
}

var mark = function(e) {
	$(this).parent().toggleClass('class_strike');
}
