// Custom JavaScript for Reviews Slider
$(document).ready(function(){
    // Initialize the reviews carousel
    $('#reviewsCarousel').carousel({
        interval: 5000, // Change slides every 5 seconds
        pause: "hover" // Pause on hover
    });
    
    // Add touch swipe functionality for mobile
    $("#reviewsCarousel").on("touchstart", function(event){
        var xClick = event.originalEvent.touches[0].pageX;
        $(this).one("touchmove", function(event){
            var xMove = event.originalEvent.touches[0].pageX;
            if(Math.floor(xClick - xMove) > 10){
                $(this).carousel('next');
            } else if(Math.floor(xClick - xMove) < -10){
                $(this).carousel('prev');
            }
        });
        $("#reviewsCarousel").on("touchend", function(){
            $(this).off("touchmove");
        });
    });
    
    // Add keyboard navigation
    $(document).on('keyup', function(e) {
        if(e.keyCode == 37) { // left arrow
            $('#reviewsCarousel').carousel('prev');
        }
        if(e.keyCode == 39) { // right arrow
            $('#reviewsCarousel').carousel('next');
        }
    });
    
    // Smooth height transition for varying content heights
    $('#reviewsCarousel').on('slide.bs.carousel', function (e) {
        var nextH = $(e.relatedTarget).height();
        $(this).find('.active.carousel-item').parent().animate(
            { height: nextH }, 500
        );
    });
});