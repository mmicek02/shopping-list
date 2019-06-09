/* Objectives of this assignment
Using DOM manipulation and traversal to dynamically add and remove HTML elements 
and apply styles.
Linking to an externally hosted library (jQuery) and a locally hosted JavaScript 
file (index.js).
Linking to your application JavaScript file from the index.html page.
Using this and event delegation

Things the user needs to be able to do

Enter items they need to purchase by entering text and hitting "Return" or 
clicking the "Add item" button
Check and uncheck items on the list by clicking the "Check" button
Permanently remove items from the list
*/
$(function() {
    // This block of code allows the user to input a new item into the list.
   $('#js-shopping-list-form').submit(event => {
        const userTextInput = $(event.currentTarget).find('#shopping-list-entry');
        const newItem = [];
            newItem.push($(
            `<li>
                <span class="shopping-item">${userTextInput.val()}</span>
                <div class="shopping-item-controls"> 
                <button class="shopping-item-toggle">
            <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
            <span class="button-label">delete</span>
                </button>
                </div>
            </li>`));
        $(".shopping-list").append(newItem);
        event.preventDefault();
    });

   //This allows for items to be checked off the list
   $(".shopping-item-toggle").on( "click", function() {
        $(".shopping-item").closest("span").toggleClass("shopping-item__checked");
    });

    // This allows the user to delete an item from their list
    $(".shopping-item-delete").on( "click", function( event ) {
        this.closest( "li" ).remove(); 
    });
});   
