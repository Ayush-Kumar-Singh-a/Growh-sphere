let currentTestimonialIndex = 0;

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    alert("Dark mode has been " + (document.body.classList.contains('dark-mode') ? "enabled" : "disabled") + ".");
}

function toggleContent(contentId) {
    const content = document.getElementById(contentId).querySelector('.card-content');
    content.classList.toggle('active');
    const button = document.getElementById(contentId).querySelector('.cta-button');
    button.textContent = content.classList.contains('active') ? 'Hide Content' : 'Learn More';
}

function handleSearch() {
    const input = document.getElementById('searchBar').value.toLowerCase();
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const title = card.querySelector('h2').innerText.toLowerCase();
        const description = card.querySelector('p') ? card.querySelector('p').innerText.toLowerCase() : '';
        
        if (title.includes(input) || description.includes(input)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function prevTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-carousel blockquote');
    currentTestimonialIndex = (currentTestimonialIndex > 0) ? currentTestimonialIndex - 1 : testimonials.length - 1;
    updateTestimonialPosition();
}

function nextTestimonial() {
    const testimonials = document.querySelectorAll('.testimonial-carousel blockquote');
    currentTestimonialIndex = (currentTestimonialIndex < testimonials.length - 1) ? currentTestimonialIndex + 1 : 0;
    updateTestimonialPosition();
}

function updateTestimonialPosition() {
    const carouselItems = document.querySelector('.testimonial-carousel div');
    const offset = -currentTestimonialIndex * 100; 
    carouselItems.style.transform = `translateX(${offset}%)`;
}

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing, ${email}!`);
    event.target.reset(); 
});
document.getElementById('searchBar').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchFunction();
    }
});
