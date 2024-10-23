const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header_image img", {
    ...scrollRevealOption,
    origin: "right",
});
ScrollReveal().reveal(".header_content h2", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header_btns", {
    ...scrollRevealOption,
    delay: 2000,
});