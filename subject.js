document.getElementById('generate-button').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    var subject = getUrlParameter('subject');

    
    var questions = fetchQuestionsFromServer(subject);

    var questionsContainer = document.getElementById('questions-container');

    
    questionsContainer.innerHTML = '';

    
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

    
    document.getElementById('submit-button').disabled = false;
});

document.getElementById('answers-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var subject = getUrlParameter('subject');
    var form = document.getElementById('answers-form');
    var formData = new FormData(form);

    
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
       
    })
    .catch(function(error) {
        console.log('Error submitting answers:', error);
    });
});


function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}


function fetchQuestionsFromServer(subject) {
    
    var questions = [
        { question: 'Question 1', answer: 'Answer 1' },
        { question: 'Question 2', answer: 'Answer 2' },
        { question: 'Question 3', answer: 'Answer 3' }
    ];

    return questions;
}
