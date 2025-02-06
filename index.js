document.getElementById('langSwitch').addEventListener('click', function() {
    let isEnglish = document.documentElement.lang === 'pl';
    document.documentElement.lang = isEnglish ? 'en' : 'pl';
    this.textContent = isEnglish ? '🇵🇱' : '🇬🇧' ;
    
    document.querySelectorAll('[data-en]').forEach(el => {
        el.textContent = isEnglish ? el.getAttribute('data-en') : el.getAttribute('data-pl');
    });
});