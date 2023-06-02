// Assuming the admin panel data is fetched from an API or stored in a JavaScript variable
var adminPanelData = [
  { username: "admin1", email: "admin1@example.com", question: "Question 1", answer: "Answer 1", subject: "Math", sent_date: "2023-05-21", last_action: "Action 1" },
  { username: "admin2", email: "admin2@example.com", question: "Question 2", answer: "Answer 2", subject: "Science", sent_date: "2023-05-20", last_action: "Action 2" },
  // Add more admin panel data objects as needed
];

var adminDataTable = document.getElementById("admin-data-table");

// Dynamically populate the admin data table
adminPanelData.forEach(function (data) {
  var row = adminDataTable.insertRow();

  var usernameCell = row.insertCell();
  usernameCell.innerHTML = data.username;

  var emailCell = row.insertCell();
  emailCell.innerHTML = data.email;

  var questionCell = row.insertCell();
  questionCell.innerHTML = data.question;

  var answerCell = row.insertCell();
  answerCell.innerHTML = data.answer;

  var subjectCell = row.insertCell();
  subjectCell.innerHTML = data.subject;

  var sentDateCell = row.insertCell();
  sentDateCell.innerHTML = data.sent_date;

  var lastActionCell = row.insertCell();
  lastActionCell.innerHTML = data.last_action;
});
