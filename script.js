document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (you can replace this with actual authentication logic)
    if (username === 'admin' && password === 'password') {
        document.getElementById('message').textContent = 'Login successful!';
        document.getElementById('message').style.color = 'green';
        // Redirect or perform other actions here
    } else {
        document.getElementById('message').textContent = 'Invalid username or password.';
    }
});

