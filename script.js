document.addEventListener('DOMContentLoaded', () => {
    // Set up ScrollMagic controller
    let controller = new ScrollMagic.Controller();

    // GSAP animations for individual cards
    gsap.utils.toArray('.card').forEach(card => {
        new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.8, // Trigger the animation when the card comes into view
            reverse: false // Animation should only happen once
        })
        .setTween(gsap.fromTo(card, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }))
        .addTo(controller);
    });

    // GSAP animations for each section with ScrollMagic
    gsap.utils.toArray('section').forEach(section => {
        new ScrollMagic.Scene({
            triggerElement: section,
            triggerHook: 0.5,
            reverse: false
        })
        .setTween(gsap.from(section, { duration: 1, xPercent: -100, opacity: 0 }))
        .addTo(controller);
    });

    // Select navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Smooth scrolling with active link highlighting
    navbarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            let section = document.querySelector(this.hash);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update active state on scroll
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        navbarLinks.forEach(link => {
            let section = document.querySelector(link.hash);
            if (section) {
                let sectionTop = section.offsetTop;
                let sectionHeight = section.offsetHeight;
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });
});
