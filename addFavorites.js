$(document).ready(function(){
    $(".like-button").click(function(){
        var postData = {link: this.dataset.link, text: this.dataset.text, date: this.dataset.date}
        
        $.ajax({
            type: "POST",
            url: "addFavorite.php",
            data: postData,
            datatype: "json",
            success: function(data) {
                dataAsJSON = JSON.parse(data);
                console.log(dataAsJSON);
            }

        })
    })
})