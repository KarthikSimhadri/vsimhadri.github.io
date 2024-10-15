// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Example Form Validation (if there's a form on the page)
function validateForm() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        let isValid = true;
        const inputs = form.querySelectorAll('input, textarea');
        
        inputs.forEach(input => {
            if (input.value === '') {
                isValid = false;
                input.style.borderColor = 'red';
                alert('Please fill out all fields.');
            } else {
                input.style.borderColor = '';
            }
        });
        
        if (!isValid) {
            e.preventDefault();
        }
    });
}

// Call the form validation function (if applicable)
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('form')) {
        validateForm();
    }
});
