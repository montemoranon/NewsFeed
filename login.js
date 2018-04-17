function attemptSignIn() {
    var name = document.getElementById("userName");
    var password = document.getElementById("userPassword");

    var data = {username: name, password: password};

    $.ajax({
        type: "POST",
        url: "authenticate.php",
        data: data,
        success: function(data) {
            alert(data);
        }
    })
}