// Get the username from localStorage
const username = localStorage.getItem('username');
if (username) {
  document.getElementById('user-name').textContent = username;

  // Redirect to index.html after 3 seconds
  setTimeout(function() {
    window.location.href = "homepage.html";
  }, 3000); // 3000 ms = 3 seconds
} else {
  // If no username is found, redirect to login
  window.location.href = "index.html";
}
