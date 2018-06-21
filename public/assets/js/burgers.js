// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
      //data: id
    }).then(
      function() {
        console.log("deleted burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  /*$(".update1").on("click", function(event) {
    event.preventDefault();
    event.stopPropagation();
    var id = $(this).data("id");
    /*if ($('form[data-id='+id+']').attr('display: none')) {
    $('form[data-id='+id+']').show();

    } else {
      $('form[data-id='+id+']').hide();

    }*/
   /* $('form[data-id='+id+']').toggle();
  });*/

  $(".update1").on("click", function(event) {
    event.preventDefault();    
    var id = $(this).data("id");
    if (event.originalEvent.detail != 0) {
      
      $('form[data-id='+id+']').toggle();
      $(this).blur();  
    }
  });

  $(".update2").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");    
    var update = $('input[data-id='+id+']').val().trim();    
    var newName = {
      name: update
    }

    $.ajax("/api/" + id, {
      type: "PUT",
      data: newName
    }).then(
      function() {
        console.log("changed name to", update);        
        location.reload();
      }
    );
  });
  /*document.body.addEventListener(
    "click", 
    function (ev) { ev.stopPropagation(); ev.preventDefault(); alert('hi') },
    true);*/
 /* var x = document.getElementsByClassName('input');  
  x.addEventListener(
    "click", 
    function (ev) { ev.stopPropagation(); ev.preventDefault(); alert("hi")},
    true
  );*/
  $('.form').on('click', function(ev) {
    ev.stopPropagation(); 
    ev.preventDefault();
    $('.update1').blur();
   // alert('helo');
  }) 
});
