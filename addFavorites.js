$(document).ready(function(){
    $(".like-button").click(function(){
        // if the button is not checked, the item must be added as a favorite on click
        if (!this.checked) {
            var postData = {link: this.dataset.link, text: this.dataset.text, date: this.dataset.date}

            $.ajax({
                type: "POST",
                url: "addFavorite.php",
                data: postData,
                datatype: "json",
                success: function(data) {
                    //dataAsJSON = JSON.parse(data);
                    console.log(data);
                }
    
            })
        } else {
            var postData = {link: this.dataset.link};

            $.ajax({
                type: "POST",
                url: "removeFavorite.php",
                data: postData,
                dataType: "json",
                success: function(data) {
                    //dataAsJSON = JSON.parse(data);
                    console.log(data);
                }
            })
        }
    })
})
