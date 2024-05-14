const questions = [
    { question: "What is the capital of France?", answerList: { A: "Berlin", B: "Madrid", C: "Paris", D: "Rome" }, correctAnswer: "C" },
    { question: "Which planet is known as the Red Planet?", answerList: { A: "Earth", B: "Mars", C: "Jupiter", D: "Venus" }, correctAnswer: "B" },
    { question: "Who wrote the play 'Romeo and Juliet'?", answerList: { A: "William Shakespeare", B: "Charles Dickens", C: "Jane Austen", D: "Mark Twain" }, correctAnswer: "A" },
    { question: "What is the chemical symbol for water?", answerList: { A: "O2", B: "H2", C: "CO2", D: "H2O" }, correctAnswer: "D" },
    { question: "Which element has the atomic number 1?", answerList: { A: "Helium", B: "Oxygen", C: "Hydrogen", D: "Carbon" }, correctAnswer: "C" },
    { question: "Who was the first President of the United States?", answerList: { A: "Thomas Jefferson", B: "Abraham Lincoln", C: "George Washington", D: "John Adams" }, correctAnswer: "C" },
    { question: "What is the largest ocean on Earth?", answerList: { A: "Atlantic Ocean", B: "Indian Ocean", C: "Arctic Ocean", D: "Pacific Ocean" }, correctAnswer: "D" },
    { question: "Which country is the largest by land area?", answerList: { A: "Canada", B: "United States", C: "Russia", D: "China" }, correctAnswer: "C" },
    { question: "What is the smallest prime number?", answerList: { A: "1", B: "2", C: "3", D: "5" }, correctAnswer: "B" },
    { question: "Which of these is a mammal?", answerList: { A: "Crocodile", B: "Sparrow", C: "Whale", D: "Salmon" }, correctAnswer: "C" },
    { question: "Who painted the Mona Lisa?", answerList: { A: "Vincent van Gogh", B: "Pablo Picasso", C: "Leonardo da Vinci", D: "Claude Monet" }, correctAnswer: "C" },
    { question: "What is the main ingredient in guacamole?", answerList: { A: "Tomato", B: "Avocado", C: "Cucumber", D: "Pepper" }, correctAnswer: "B" },
    { question: "In which year did the Titanic sink?", answerList: { A: "1912", B: "1920", C: "1898", D: "1935" }, correctAnswer: "A" },
    { question: "Which gas is most abundant in the Earth's atmosphere?", answerList: { A: "Oxygen", B: "Hydrogen", C: "Nitrogen", D: "Carbon Dioxide" }, correctAnswer: "C" },
    { question: "What is the hardest natural substance on Earth?", answerList: { A: "Gold", B: "Iron", C: "Diamond", D: "Silver" }, correctAnswer: "C" }
];
let currentQuestionIndex = 0;  // Tracks the current question index
let score = 0;  // Tracks the user's score
let selectedOption = null;  // Tracks the currently selected option
const answeredCorrectly = new Array(questions.length).fill(false);  


// Function to load the current question
function loadQuestion(index) {
    const currentQuestion = questions[index];
    const questionElement = document.getElementById('question');
    const optionButtons = document.querySelectorAll('.option');

    questionElement.textContent = currentQuestion.question;

    // Set the text content of option buttons
    optionButtons.forEach((button, i) => {
        const optionKey = Object.keys(currentQuestion.answerList)[i];
        button.textContent = currentQuestion.answerList[optionKey];
        button.dataset.value = optionKey; // Set dataset value to represent the option key
        button.classList.remove('selected');
    });

    // Reset result message
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    resultDiv.classList.remove('alert-success', 'alert-danger');
}

// Function to handle option selection
function selectOption(option) {
    const optionButtons = document.querySelectorAll('.option');
    optionButtons.forEach(button => button.classList.remove('selected'));
    option.classList.add('selected');
}

// Function to handle submitting an answer
// Function to handle submitting an answer
// Function to handle submitting an answer
// Function to handle submitting an answer
function submitAnswer() {
    const selectedOptionButton = document.querySelector('.option.selected');
    const resultDiv = document.getElementById('result');
    
    if (!selectedOptionButton) {
        resultDiv.textContent = 'Please select an option.';
        resultDiv.classList.add('alert-danger');
        resultDiv.classList.remove('alert-success');
        return;
    }
    
    const selectedOption = selectedOptionButton.dataset.value;
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        answeredCorrectly[currentQuestionIndex] = true;
        score++;
        resultDiv.textContent = 'Correct!';
        ;
    } else {
        answeredCorrectly[currentQuestionIndex] = false;
        resultDiv.textContent = 'Incorrect!';
        
    }
    console.log(answeredCorrectly);
    // Move to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        // Calculate score based on answeredCorrectly array
        score = answeredCorrectly.filter(Boolean).length;
        console.log(score);
        resultDiv.textContent = `Quiz completed. Your score: ${score} out of ${questions.length}`;
        resultDiv.classList.add('alert-info');
        resultDiv.classList.remove('alert-danger', 'alert-success');
        document.getElementById('submit').disabled = true; // Disable submit button after quiz completion
    }
}




// Function to handle navigation to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Function to handle navigation to the next question
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
}

// Load the first question when the page loads
document.addEventListener("DOMContentLoaded", function() {
    loadQuestion(currentQuestionIndex);
});


