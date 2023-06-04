var userProfiles = [
  {
    username: "John",
    id: 1,
    email: "john@example.com"
  },
  {
    username: "Jane",
    id: 2,
    email: "jane@example.com"
  }
  
];

var table = document.getElementById('user-profile-table');

for (var i = 0; i < userProfiles.length; i++) {
  var row = document.createElement('tr');
  var usernameCell = document.createElement('td');
  var idCell = document.createElement('td');
  var emailCell = document.createElement('td');

  usernameCell.textContent = userProfiles[i].username;
  idCell.textContent = userProfiles[i].id;
  emailCell.textContent = userProfiles[i].email;

  row.appendChild(usernameCell);
  row.appendChild(idCell);
  row.appendChild(emailCell);

  table.appendChild(row);
}
