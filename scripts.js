function newItem(){
  
  //adds a new item to the list
  let li = $('<li></li>'); //creates a new list on the DOM
  let inputValue = $('#input').val(); //content of the list is what the value of the text input is
  li.append(inputValue); //appending the value to the list item

  if (inputValue === '') {
    alert('You must write something!'); //if value is blank have the user fill something out
  } else {
    $('#list').append(li); //if it's filled out, append the new list(with its value) to the OL section (#list)
  }

  //Crossing an item out
  function crossOut() {
    li.toggleClass('strike'); // for new function, toggles the class (strike) for list items
  }
  li.on('dblclick', function() {
    li.toggleClass('strike'); // when a list item is double clicked, toggle the strike class
  });



  //Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton'); //creates a new element (delete button)
  crossOutButton.append(document.createTextNode('X')); //appends the text (X) to the newly created button
  li.append(crossOutButton); // append newly created button, which is the X, to the li variable

  crossOutButton.on('click', deleteListItem); //when the cross out button is clicked, fire the deleteListItem function which removes the list item by adding delete class
  function deleteListItem() {
    li.addClass('delete')
  }
  $('#list').sortable(); //allows you to drag around and change order or LI items

}









