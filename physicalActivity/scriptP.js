document.querySelector("#checkButton").addEventListener("click", function () {
    const bloodSugar = parseFloat(document.querySelector("#bloodSugar").value);
    const adviceElement = document.querySelector("#advice");

    
    adviceElement.textContent = "";
    adviceElement.className = "advice-output";

   
    if (isNaN(bloodSugar) || bloodSugar <= 0) {
        adviceElement.textContent = "Please enter a valid blood sugar level.";
        adviceElement.style.color = "#e74c3c";
        return;
    }

   
    if (bloodSugar < 70) {
        adviceElement.textContent = "Your blood sugar is LOW. Eat fast-acting carbs like juice or candy immediately.";
        adviceElement.classList.add("low");
    } else if (bloodSugar >= 70 && bloodSugar <= 140) {
        adviceElement.textContent = "Your blood sugar is NORMAL. Keep up the good work!";
        adviceElement.classList.add("normal");
    } else {
        adviceElement.textContent = "Your blood sugar is HIGH. Consider insulin or physical activity. Consult your doctor.";
        adviceElement.classList.add("high");
    }
});