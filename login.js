function attemptSignIn() {
    $.ajax({
        type: "POST",
        url: "authenticate.php",
        data: $("#login-form").serialize(),
        success: function(data) {
           	console.log(data);
        }
    })
}
