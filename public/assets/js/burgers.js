
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");

    var newDevouredState = {
      devoured: newDevoured
    };

   
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

   
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
        location.reload();
      }
    );
  });

  $(".delete").on("click", function(event) {
    event.preventDefault();
    var id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
     
    }).then(
      function() {
        console.log("deleted burger");
       
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
