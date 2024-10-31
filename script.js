// Contact Form Submission Handler
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Thank you for contacting me! I'll get back to you soon.";
    responseMessage.style.color = '#FF8C66';
    responseMessage.style.animation = 'fadeIn 1s ease'; // Fade-in effect for response message

    event.target.reset();
});
