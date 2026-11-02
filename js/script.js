console.log("script.js connected!");

let userAnswers = [];

let questions = document.querySelectorAll(".question-block");

questions.forEach(function(question, index) {
    let buttons = question.querySelectorAll(".answer-btn");
    
    buttons.forEach(function(button) {
        
        button.addEventListener("click", function() {
            buttons.forEach(function(btn) {
                btn.classList.remove("selected");
            });

            button.classList.add("selected");
            userAnswers[index] = button.getAttribute("data-answer");

            console.log(userAnswers);
        });
    });
});

function displayResult() {
    

    if (userAnswers.length !== 5 || userAnswers.length !== questions.length) {
        alert("Please answer all five questions!");
        return;
    }

    let totalScore = 0;

    userAnswers.forEach(function(answer) {
        if (answer === "A") {
            totalScore += 1;
        } else if (answer === "B") {
            totalScore += 2;
        } else if (answer === "C") {
            totalScore += 3;
        } else if (answer === "D") {
            totalScore += 4;
        }
    });

    let result ="";

    if (totalScore <= 8) {
        result = "Your dream vacation is Hawaii! You love beautiful beaches and sunny weather.";
    } else if (totalScore <= 12) {
        result = "Your dream vacation is Paris! You enjoy exploring the city, its rich culture, and the beatiful histroical landmarks.";
    } else if (totalScore <= 16) {
        result = "Your dream vacation is Switzerland! You love the breathtaking landscapes and outdoor activities.";
    } else {
        result = "Your dream vacation is New York! You enjoy the vibrant city life, diverse culture, entertainment, and iconic landmarks.";
    }

    document.getElementById("result-text").textContent = result;

    document.getElementById("result-container").style.display = "block";

    console.log("Total Score", totalScore);
    console.log("Final Result", result);

}

document.getElementById("show-result").addEventListener("click", displayResult);