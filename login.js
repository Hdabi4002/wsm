document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Hardcoded credentials for demonstration (you can replace this with an actual login system)
    const correctUsername = "user123";
    const correctPassword = "password123";
  
    // Check login credentials
    if (username === correctUsername && password === correctPassword) {
      // Store username in localStorage for later use (on welcome.html)
      localStorage.setItem('username', username);
  
      // Redirect to the welcome page (welcome.html)
      window.location.href = "welcome.html";
    } else {
      // Show error message if credentials are incorrect
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = "Incorrect username or password. Please try again.";
      errorMessage.style.display = 'block';
    }
  });
  