const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

menuBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

const bookings = [];


document.querySelector("#bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    
    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;
    const email = document.querySelector("#email").value;
    const datetime = document.querySelector("#datetime").value;
    const service = document.querySelector("#service").value;

    const messageElement = document.querySelector("#message");

   
    const isConflict = bookings.some(booking => 
        booking.datetime === datetime && booking.service === service
    );

    if (isConflict) {
        
        messageElement.textContent = `Sorry, the ${service} is already booked on ${datetime}. Please choose another time or service.`;
        messageElement.style.color = "red";
    } else {
       
        bookings.push({ name, number, email, datetime, service });

      
        messageElement.textContent = "Booked Successfully!";
        messageElement.style.color = "green";

        
        event.target.reset();
    }
});