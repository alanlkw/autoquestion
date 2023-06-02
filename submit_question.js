document.getElementById("question-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var questionInput = document.getElementById("question");
    var answerInput = document.getElementById("answer");

    var question = questionInput.value;
    var answer = answerInput.value;

    // You can perform client-side validation here if required

    // You can use AJAX or fetch API to send the question to the server
    // Here, we'll just log the question and answer to the console
    console.log("Question: " + question);
    console.log("Answer: " + answer);

    // After submitting the question, you can redirect the user to a success page or perform any other necessary action
});
