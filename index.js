document.getElementById('langSwitch').addEventListener('click', function() {
    let isEnglish = document.documentElement.lang === 'en';
    document.documentElement.lang = isEnglish ? 'pl' : 'en';
    this.textContent = isEnglish ? '🇵🇱' : '🇬🇧';
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = isEnglish ? el.getAttribute('data-pl') : el.getAttribute('data-en');
    });
});