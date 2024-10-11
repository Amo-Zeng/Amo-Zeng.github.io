// 脚本文件：script.js

// 语言切换功能
function toggleLanguage() {
    var currentLang = document.documentElement.lang;
    var newLang = currentLang === 'en' ? 'zh' : 'en';
    var newPath = newLang === 'en' ? 'topic4_en.html' : 'topic4.html';

    // 保存语言偏好
    localStorage.setItem('preferredLanguage', newLang);

    // 跳转到相应的页面
    window.location.href = newPath;
}

// 设置语言切换按钮的文本
function setLanguageButtonText() {
    var currentLang = document.documentElement.lang;
    var languageButton = document.getElementById('languageToggle');
    languageButton.textContent = currentLang === 'en' ? '中文' : 'English';
}

// 页面加载时执行
document.addEventListener('DOMContentLoaded', function() {
    setLanguageButtonText();
});
