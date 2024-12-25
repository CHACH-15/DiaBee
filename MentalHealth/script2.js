document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".advice-card");
    const descriptionBox = document.getElementById("description-box");
  
    cards.forEach((card) => {
      card.addEventListener("mouseenter", (e) => {
        const description = card.getAttribute("data-description");
        if (description) {
          descriptionBox.textContent = description;
          descriptionBox.style.display = "block";
  
          const rect = card.getBoundingClientRect();
          const viewportHeight = window.innerHeight;
  
          
          let top = rect.bottom + window.scrollY + 10;
          let left = rect.left + window.scrollX;
  
        
          if (rect.bottom + descriptionBox.offsetHeight > viewportHeight) {
            top = rect.top + window.scrollY - descriptionBox.offsetHeight - 10;
          }
  
          descriptionBox.style.top = `${top}px`;
          descriptionBox.style.left = `${left}px`;
        }
      });
  
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
  
        // Default position: below the card
        let top = rect.bottom + window.scrollY + 10;
        let left = rect.left + window.scrollX;
  
        // If there's not enough space below, show it above the card
        if (rect.bottom + descriptionBox.offsetHeight > viewportHeight) {
          top = rect.top + window.scrollY - descriptionBox.offsetHeight - 10;
        }
  
        descriptionBox.style.top = `${top}px`;
        descriptionBox.style.left = `${left}px`;
      });
  
      card.addEventListener("mouseleave", () => {
        descriptionBox.style.display = "none";
      });
    });
  });
  function calculateResult() {
    const questions = document.querySelectorAll('.question');
    let score = 0;

    
    questions.forEach((question, index) => {
      const selectedOption = question.querySelector('input[type="radio"]:checked');
      if (selectedOption) {
        score += parseInt(selectedOption.value);
      }
    });

    
    const resultDiv = document.getElementById('result');
    if (score === 0) {
      resultDiv.innerHTML = "Please answer all the questions.";
      resultDiv.style.display = "block";
      return;
    }

    let feedback = "";
    if (score <= 6) {
      feedback = "You're managing your diabetes and mental health well. Keep up the great work!";
    } else if (score <= 9) {
      feedback = "You're doing okay, but there’s room for improvement. Consider incorporating relaxation techniques or consulting with a professional.";
    } else {
      feedback = "It looks like you're feeling overwhelmed. Don’t hesitate to reach out to a healthcare provider or counselor for support.";
    }

    resultDiv.innerHTML = feedback;
    resultDiv.style.display = "block";
  }