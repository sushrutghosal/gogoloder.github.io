document.addEventListener('DOMContentLoaded', () => {
    // Function to simulate typing effect
    function typeEffect(element, speed) {
        const text = element.innerHTML;
        element.innerHTML = "";
        
        let i = 0;
        const timer = setInterval(function() {
            if (i < text.length) {
                element.append(text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
    }

    // Grab all elements you want to apply the typing effect to
    const elements = document.querySelectorAll('.typewriter');
    
    // Apply typing effect to each element
    elements.forEach((element) => {
        typeEffect(element, 75); // Speed in milliseconds
    });

    // Optional: Add interactive command-line functionality
    const commandInput = document.querySelector('#commandInput');
    if (commandInput) {
        commandInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                processCommand(this.value);
                this.value = ''; // Clear input after enter
            }
        });
    }

    // Function to process commands (for a fun interactive part)
    function processCommand(command) {
        const output = document.querySelector('#commandOutput');
        switch (command.toLowerCase()) {
            case 'help':
                output.innerHTML += '<p>Type "list" to see all projects</p>';
                break;
            case 'list':
                output.innerHTML += '<p>Project 1: AI Neural Network</p><p>Project 2: Machine Learning Model</p>';
                break;
            default:
                output.innerHTML += `<p>Command not recognized: ${command}</p>`;
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const distanceFromTop = window.scrollY + section.getBoundingClientRect().top;
            if (window.scrollY + window.innerHeight >= distanceFromTop) {
                section.style.opacity = 1;
                section.style.transform = 'translateX(0)';
            }
        });
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const triggerHeight = window.innerHeight / 2; // Trigger animation halfway through the screen

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerHeight) {
            section.style.animation = 'zoomIn 0.5s forwards';
        } else {
            section.style.animation = 'zoomOut 0.5s forwards';
        }
    });
});
