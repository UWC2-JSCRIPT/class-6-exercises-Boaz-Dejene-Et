$( document ).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */
  $('li').click(function() {
    $( this ).toggleClass( "done" );
  });
  /**
   * Delete element when delete link clicked
   */
  $('.delete').bind('click', function(e) {
    e.stopPropagation()
    $(this).parent().fadeOut(1000);
    // $(this).parent().remove()
  });
  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();
    const text = $('input').val();
    var txt1 = $("<span></span>").text(text);
    var txt2 = $("<a></a>").text("Delete").addClass('delete');;
    var wrapper = $(`<li></li>`).append(txt1, txt2);
    $("ul").append(wrapper);

    $(wrapper).click(function() {
      $( this ).toggleClass( "done" );
    });
    $(txt2).bind('click', function(e) {
      e.stopPropagation()
      $(this).parent().fadeOut(1000);
    });
    // rest here...
  };

  // add listener for add
  $('.add-item').bind('click', addListItem);
})