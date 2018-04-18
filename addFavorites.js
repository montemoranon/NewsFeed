$(document).ready(function(){
    $(".like-button").click(function(){
        console.log(this.getAttribute + " "  + this.dataset.link + " " + this.dataset.date);
    })
})