//MENU FIXE
jQuery(document).ready(function() {
    jQuery("#header_wrapp").sticky({
        topSpacing: 0
    })
});

//MENU RESPONSIVE
jQuery(function () {
    jQuery("#navtop_bt_resp").click(function () {
        jQuery(".header_nav").slideToggle("slow");
    });
});

/* Burger menu */
let burger = document.querySelector("#navToggle");

burger.addEventListener("click", function(event){
        event.preventDefault();
		burger.classList.toggle("active");
});


jQuery(document).ready(function() {
    jQuery('.actualites').click( function() {
        var page = jQuery(this).attr('href');
        var speed = 1000;
        jQuery('html, body').animate( { scrollTop: jQuery(page).offset().top -150 }, speed );
        return false;
    });
});
