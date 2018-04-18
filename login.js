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
    var userInfo = {username: userName, password: password};

    $.ajax({
        type: "POST",
        url: "authenticate.php",
        datatype: "json",
        data: userInfo,
        success: function(data) {
           var dataAsJSON = JSON.parse(data);

           if (dataAsJSON["success"] == true) {
               window.location.replace("index.php");
            } else {

               // check whether the login has already failed and produce error message
               // if prior failure, erase previous message
                if (document.getElementById("login-error-message")) {
                    document.getElementById("login-error-message").innerHTML = "";
                } else {
                    var errorMessage = document.createElement("p");
                    errorMessage.setAttribute("id", "login-error-message");
                }

                document.getElementById("login-error-message").innerHTML = dataAsJSON["message"];
                document.getElementById("login-error-message").style.color = "red";

                var container = document.getElementById("login-container");
                container.appendChild(errorMessage);
			}
        },
    })
}
