function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

    // Here, you can just show a message or perform frontend validation
  if (username === "" || password === "") {
    wrongPassMessage.innerText = "Please enter both username and password.";
  } else {
    console.log("Login information (user: " + username + ", pass: " + password + ")");
    clearData(); // Optionally clear the data after success (this can be customized as per your needs)
  }
}
const wrongPassMessage = document.querySelector('.wrongPass');
function clearData() {

    // Clear the username and password fields
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    wrongPassMessage.innerText = "Wrong Password or Username. Please try again";  
}
