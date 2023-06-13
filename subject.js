document.getElementById('generate-button').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default button click behavior

    var subject = getUrlParameter('subject');

    // Replace this with your own logic to fetch questions for the given subject
    var questions = fetchQuestionsFromServer(subject);

    var questionsContainer = document.getElementById('questions-container');

    // Clear previous questions
    questionsContainer.innerHTML = '';

    // Loop through the fetched questions and create HTML elements to display them
    for (var i = 0; i < questions.length; i++) {
        var questionDiv = document.createElement('div');
        questionDiv.className = 'question';

        var questionText = document.createElement('p');
        questionText.textContent = questions[i].question;

        var answerText = document.createElement('p');
        answerText.textContent = 'Answer: ' + questions[i].answer;

        questionDiv.appendChild(questionText);
        questionDiv.appendChild(answerText);

        questionsContainer.appendChild(questionDiv);
    }

    // Enable the submit button
    document.getElementById('submit-button').disabled = false;
});

document.getElementById('answers-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var subject = getUrlParameter('subject');
    var form = document.getElementById('answers-form');
    var formData = new FormData(form);

    // You can process the form data or send it to the server using AJAX (XMLHttpRequest or fetch)

    // Example AJAX request using fetch
    fetch('submit_answers.php', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Error submitting answers');
    })
    .then(function(responseText) {
        console.log('Response:', responseText);
        // Handle the response as needed
    })
    .catch(function(error) {
        console.log('Error submitting answers:', error);
    });
});

// Function to retrieve the value of a URL parameter by name
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Replace this function with your own logic to fetch questions from the server
function fetchQuestionsFromServer(subject) {
    // Dummy data for demonstration
    var questions = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
        { question: 'Question 3', answer: 'Answer 3' }
    ];

    return questions;
}
