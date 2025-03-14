document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const skillsToggleButton = document.getElementById('toggle-skills');
    const skillsList = document.getElementById('skills-list');
    const contactForm = document.getElementById('contact-form');

    // Theme Toggle
    themeToggleButton.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeToggleButton.textContent = document.body.classList.contains('dark') ? 'Light Theme' : 'Dark Theme';
    });

    // Show/Hide Skills List
    skillsToggleButton.addEventListener('click', () => {
        if (skillsList.style.display === "none") {
            skillsList.style.display = "block";
        } else {
            skillsList.style.display = "none";
        }
    });

    // Form Validation
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (name === "") {
            alert("Please enter your name.");
            return;
        }

        if (email === "") {
            alert("Please enter your email.");
            return;
        }

        // Simple email format validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message === "") {
            alert("Please enter a message.");
            return;
        }

        // If all validations pass, you can submit the form or perform an action
        alert("Form submitted successfully!");
        contactForm.reset(); // Reset the form fields
    });
});
