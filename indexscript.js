function selectLanguage(language) {
    if (language === 'english') {
        localStorage.setItem('selectedLanguage', 'english');
        window.location.href = 'login.html';  // Redirect to login page
    } else if (language === 'hindi') {
        localStorage.setItem('selectedLanguage', 'hindi');
        window.location.href = 'loginhindi.html';  // Redirect to login hindi page
    }
}
