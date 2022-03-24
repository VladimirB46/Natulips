document.addEventListener("DOMContentLoaded", function() {
    // slider
    $('.slides-container').slick({
        arrows: true,
        nextArrow: ('.next-arrow'),
        prevArrow: ('.prevous-arrow'),
    });
    
    // water next to bottle
    const productAndWaterHeight = $('.product').height();
    $(".water-behind-product-absolute-part-img").css('height', productAndWaterHeight);
    
    const productAndWaterWidth = $(".product").width() - 25; 
    $(".water-behind-product-absolute-part").css('left', productAndWaterWidth);
})