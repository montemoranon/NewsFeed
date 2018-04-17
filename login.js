$(document).ready(function () {
    //event handler for submit button
    $("#login-submit").click(function () {
        //collect userName and password entered by users
        var userName = $("#username").val();
        var password = $("#password").val();

        //call the authenticate function
        authenticate(userName, password);
    });
});

function authenticate(userName, password) {
    var fakeData = {name: "nick", password: "pass"}

    $.ajax({
        type: "POST",
        url: "authenticate.php",
        datatype: "json",
        data: fakeData,
        success: function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(errorThrown);
         }
    })
}

// $( "#login-form" ).submit(function( event ) {
//     // stop the form from submitting normally
//     event.preventDefault();

//     var posting = $.post( "authenticate.php", $("login-form").serialize());

//     posting.done(function( data ) {
//       console.log(data); 
//     });
//   });