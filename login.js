$( "#login-form" ).submit(function( event ) {
    // stop the form from submitting normally
    event.preventDefault();

    var posting = $.post( "authenticate.php", $("login-form").serialize());

    posting.done(function( data ) {
      console.log(data); 
    });
  });