$(document).ready(function() {
    $('.menu__button').click(function(event) {
        event.preventDefault();
        $('.navbar').toggleClass('navbar_active')
        
    })
})