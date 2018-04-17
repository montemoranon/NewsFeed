$( "#login-form" ).submit(function( event ) {
    var posting = $.post( "authenticate.php", $("login-form").serialize());

    posting.done(function( data ) {
      console.log(data); 
    });
  });