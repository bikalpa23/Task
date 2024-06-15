const counts = document.querySelectorAll('.count')
const speed = 100

counts.forEach((counter) => {
    function upDate() {
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed
        if (count < target) {
            counter.innerText = Math.floor(inc + count)
            setTimeout(upDate, 10)
        } else {
            counter.innerText = target
        }
    }
    upDate()
})


// ..........................SCROLL...................

// scripts.js

document.getElementById('scrollUp').addEventListener('click', function () {
    window.scrollBy({
        top: -window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});


// document.getElementById('scrollDown').addEventListener('click', function () {
//     window.scrollBy({
//         top: window.innerHeight,
//         left: 0,
//         behavior: 'smooth'
//     });
// });


// Slider

// Basic initialization is like this:
// $('.your-class').slick();

// I added some other properties to customize my slider
// Play around with the numbers and stuff to see
// how it works.
$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 4, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
});
$('.slick-carousels').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
});
$('.slick-carouselll').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
});
$('.slick-carousells').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
});

$('.slick-carousellsss').slick({
    infinite: true,
    slidesToShow: 2, // Shows a three slides at a time
    slidesToScroll: 1, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
});
