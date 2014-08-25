$(document).ready(function() {
  $('#enter-item').keydown(function (e){
      if(e.keyCode == 13){
        add_item();
      }
  });

  $('#add-item').on('click', function() {
    add_item();
  });

  $('#item-list-container').on('click', '.check', function() {
    $(this).closest('li').find('input[type="text"]').addClass('completed');
  });

  $('#item-list-container').on('click', '.remove', function() {
    $(this).closest('li').remove();
    display_item_list();
  });
});

function add_item() {
    var item_text = $('#enter-item').val();
    if (!item_text)
    {
      alert("Please enter an item!");
    }
    else
    {
      var item = $('<li><input type="text" value="' + item_text + '" disabled></input><img src="images/ok_checkmark_green.png" title="Check item" class="check"></img><img src="images/delete-icon.png" title="Remove item" class="remove"></img></li>');
      $('#item-list-container ul').append(item);
      $('#enter-item').val('');
      display_item_list();
    }
}

function display_item_list () {
    if ($('#item-list-container li').length == 0)
    {
      $('#item-list-container').hide();
    }
    else
    {
      $('#item-list-container').show();
    }
}