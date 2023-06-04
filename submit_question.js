document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var questionInput = document.getElementById("question");
    var answerInput = document.getElementById("answer");

    var question = questionInput.value;
    var answer = answerInput.value;

    
    console.log("Question: " + question);
    console.log("Answer: " + answer);

  
});
