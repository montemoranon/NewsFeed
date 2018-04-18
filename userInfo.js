$(document).ready(function () {
    //event handler for login button
    $("#login-submit").click(function () {
        //collect userName and password entered by users
        var userName = $("#username").val();
        var password = $("#password").val();

        //call the authenticate function
        authenticate(userName, password);
    });

    // event handler for sign-up button
    $("#sign-up-submit").click(function () {
        //collect userName and password entered by users
        var userName = $("#username").val();
        var password = $("#password").val();

        //call the authenticate function
        createNewUser(userName, password);
    });

});

function createNewUser(userName, password) {
    var userInfo = {username: userName, password: password};

    $.ajax({
        type: "POST",
        url: "createUser.php",
        datatype: "json",
        data: userInfo,
        success: function(data) {
            if (data['success'] == true) {
                window.location.replace("index.php");
            } else {
                if (document.getElementById("sign-up-error-message")) {
                    document.getElementById("sign-up-error-message").remove();
                }

                var errorMessage = document.createElement("p");
                errorMessage.setAttribute("id", "sign-up-error-message");

                errorMessage.innerHTML = "Username already exists";
                errorMessage.style.color = "red";

                var container = document.getElementById("login-container");
                container.appendChild(errorMessage);
            }
        }
    })
}

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
                    document.getElementById("login-error-message").remove();
                }

                var errorMessage = document.createElement("p");
                errorMessage.setAttribute("id", "login-error-message");

                errorMessage.innerHTML = dataAsJSON["message"];
                errorMessage.style.color = "red";

                var container = document.getElementById("login-container");
                container.appendChild(errorMessage);
			}
        },
    })
}
