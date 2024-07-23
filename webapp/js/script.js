async function loadCommonPasswords() {
    const response = await fetch('/passwords/10-million-password-list-top-1000000.txt');
    const text = await response.text();
    return text.split('\n').map(pw => pw.trim());
}

async function verifyPassword() {
    const commonPasswords = await loadCommonPasswords();
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // OWASP Password Requirements
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        message.textContent = 'Password must be at least 8 characters long.';
    } else if (!hasUpperCase) {
        message.textContent = 'Password must contain at least one uppercase letter.';
    } else if (!hasLowerCase) {
        message.textContent = 'Password must contain at least one lowercase letter.';
    } else if (!hasNumber) {
        message.textContent = 'Password must contain at least one number.';
    } else if (!hasSpecialChar) {
        message.textContent = 'Password must contain at least one special character.';
    } else if (commonPasswords.includes(password)) {
        message.textContent = 'Password is too common. Please choose a different password.';
    } else {
        // Redirect to welcome.html and pass the password
        window.location.href = `welcome.html?password=${encodeURIComponent(password)}`;
        console.log('sent to index');
    }
}
