<?php
session_start();
?>
<!DOCTYPE html>
<html>

<head>
    <link rel="stylesheet" type="text/css" href="./style.css">

    <!-- bootstrap 4 -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.3.1.js"
            integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>

    <script type="text/javascript" src="./newsFeed.js"></script>
    <script type="text/javascript" src="./addFavorites.js"></script>

</head>
<body>
<?php
if ($_SESSION['username'] != "") {
?>
<div id="heading">
    <h3 id="title">ESPN RSS feed <?php echo " - " . $_SESSION['username']; ?></h3>
    <div id="sport-selection-container">
        <div class="dropdown" id="sport-selection">
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                Sport Selection
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="nfl-check-box" checked>
                    <label class="form-check-label" for="nfl-check-box">
                        NFL
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="nhl-check-box" checked>
                    <label class="form-check-label" for="nhl-check-box">
                        NHL
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="nba-check-box" checked>
                    <label class="form-check-label" for="nba-check-box">
                        NBA
                    </label>
                </div>
            </div>
        </div>
        <button class="btn-default" id="submit-new-sports" onclick="reloadNewsItems()">Go!</button>
    </div>
    <button id="favorites-list-button" class="btn btn-secondary">Favorites</button>
</div>
<div id="topNewsItemsDiv">
</div>
</body>

</html>
<?php
} else {
?>

<h1> Sorry, you must sign in! </h1>
<br>
<p>Please <a href="login.html">login</a> or <a href="signup.php">sign up</p>
<?php
}
?>
