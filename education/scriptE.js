document.addEventListener("DOMContentLoaded", () => {
    const gameArea = document.getElementById("gameArea");
    const basket = document.getElementById("basket");
    const startButton = document.getElementById("startButton");
  
    let gameInterval;
    let basketPosition = 170; 
    let score = 0;
  
    const moveBasket = (direction) => {
      if (direction === "left" && basketPosition > 0) {
        basketPosition -= 20;
      } else if (direction === "right" && basketPosition < 350) {
        basketPosition += 20;
      }
      basket.style.left = `${basketPosition}px`;
    };
  
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        moveBasket("left");
      } else if (e.key === "ArrowRight") {
        moveBasket("right");
      }
    });
  
    const createFood = () => {
      const food = document.createElement("div");
      food.classList.add("food");
      food.style.left = `${Math.random() * 360}px`; 
      food.style.top = "0px"; 
      food.classList.add(Math.random() > 0.5 ? "healthy" : "unhealthy"); 
      gameArea.appendChild(food);
  
      let fallInterval = setInterval(() => {
        const foodTop = parseInt(food.style.top) || 0;
        const basketRect = basket.getBoundingClientRect();
        const foodRect = food.getBoundingClientRect();
  
        if (
          foodTop + 40 >= 580 && 
          foodRect.left < basketRect.right &&
          foodRect.right > basketRect.left
        ) {
          if (food.classList.contains("healthy")) {
            score += 10; 
          } else {
            score -= 5; 
          }
          food.remove(); 
          clearInterval(fallInterval);
        } else if (foodTop >= 600) {
          
          food.remove();
          clearInterval(fallInterval);
        } else {
          
          food.style.top = `${foodTop + 5}px`;
        }
      }, 50);
    };
  
    const startGame = () => {
      score = 0;
      startButton.disabled = true;
  
      gameInterval = setInterval(() => {
        createFood();
      }, 1000); 
  
      setTimeout(() => {
        clearInterval(gameInterval);
        alert(`Game Over! Your score: ${score}`);
        startButton.disabled = false;
      }, 30000); 
    };
  
    startButton.addEventListener("click", startGame);
  });