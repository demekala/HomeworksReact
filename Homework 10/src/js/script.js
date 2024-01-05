var users = [];

function login() {
  let user1Username = document.getElementById("user1-username").value;
  let user1Password = document.getElementById("user1-password").value;

  let user2Username = document.getElementById("user2-username").value;
  let user2Password = document.getElementById("user2-password").value;

  let user3Username = document.getElementById("user3-username").value;
  let user3Password = document.getElementById("user3-password").value;

  let user4Username = document.getElementById("user4-username").value;
  let user4Password = document.getElementById("user4-password").value;

  if (
    user1Username.length === 0 ||
    user1Password.length === 0 ||
    user2Username.length === 0 ||
    user2Password.length === 0 ||
    user3Username.length === 0 ||
    user3Password.length === 0 ||
    user4Username.length === 0 ||
    user4Password.length === 0
  ) {
    alert("input field is empty");
    return;
  }

  users.push({ username: user1Username, password: user1Password });
  users.push({ username: user2Username, password: user2Password });
  users.push({ username: user3Username, password: user3Password });
  users.push({ username: user4Username, password: user4Password });

  if (hasDuplicates(users, "username")) {
    alert("Duplicate usernames found!");
  } else if (hasDuplicates(users, "password")) {
    alert("Duplicate passwords found!");
  } else {
    alert("No duplicate usernames or passwords.");
    clearInputFields();
    console.log(users);
  }
}

function hasDuplicates(array, key) {
  return new Set(array.map((item) => item[key])).size !== array.length;
}

function clearInputFields() {
  document.getElementById("user1-username").value = "";
  document.getElementById("user1-password").value = "";

  document.getElementById("user2-username").value = "";
  document.getElementById("user2-password").value = "";

  document.getElementById("user3-username").value = "";
  document.getElementById("user3-password").value = "";

  document.getElementById("user4-username").value = "";
  document.getElementById("user4-password").value = "";
}
