$(document).ready(function(){
    $(".like-button").click(function(){
        console.log(this.dataset.text + " "  + this.dataset.link + " " + this.dataset.date);
    })
})