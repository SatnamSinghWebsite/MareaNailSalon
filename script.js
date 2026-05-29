// Toggle Menu Function
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navMenu').classList.remove('active');
            document.querySelector('.hamburger').classList.remove('active');
        });
    });

    // Set current year
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Set minimum date
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Form Submit - Sends to WhatsApp
function handleSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const serviceSelect = document.getElementById('service-select');
    const service = serviceSelect.options[serviceSelect.selectedIndex].text;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const salonNumber = "13054094338";
    const message = `Hi Marea Nails, I would like to book an appointment:%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${service}%0A*Date:* ${date}%0A*Time:* ${time}`;
    
    window.open(`https://wa.me/${salonNumber}?text=${message}`, '_blank');
}
