
var typed_strings = $('.text-slider-items').text();
var typed = new Typed('.text-slider', {
    strings: [typed_strings],
    typeSpeed: 80,
    loop: false,
    backDelay: 1100,
    backSpeed: 30
});
