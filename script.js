// 脚本文件：script.js

//// 语言切换功能
//function toggleLanguage() {
//    var currentLang = document.documentElement.lang;
//    var newLang = currentLang === 'en' ? 'zh' : 'en';
//    var newPath = newLang === 'en' ? 'topic4_en.html' : 'topic4.html';
//
//    // 保存语言偏好
//    localStorage.setItem('preferredLanguage', newLang);
//
//    // 跳转到相应的页面
//    window.location.href = newPath;
//}
//
//// 设置语言切换按钮的文本
//function setLanguageButtonText() {
//    var currentLang = document.documentElement.lang;
//    var languageButton = document.getElementById('languageToggle');
//    languageButton.textContent = currentLang === 'en' ? '中文' : 'English';
//}
//
//// 页面加载时执行
//document.addEventListener('DOMContentLoaded', function() {
//    setLanguageButtonText();
//});
        function toggleLanguage() {
            var currentLang = document.documentElement.lang;
            var newLang = currentLang === 'en' ? 'zh' : 'en';

            // 获取当前页面的文件名
            var currentPath = window.location.pathname;
            var currentFileName = currentPath.split('/').pop();

            // 生成新的文件名
            var newFileName;
            if (currentFileName.endsWith('_en.html')) {
                newFileName = currentFileName.replace('_en.html', '.html');
            } else if (currentFileName.endsWith('.html')) {
                newFileName = currentFileName.replace('.html', '_en.html');
            } else {
                newFileName = currentFileName;
            }

            // 构造新的 URL
            var newPath = currentPath.replace(currentFileName, newFileName);

            // 保存语言偏好
            localStorage.setItem('preferredLanguage', newLang);

            // 重定向到新页面
            window.location.href = newPath;
        }

        function setLanguageButtonText() {
            var currentLang = document.documentElement.lang;
            var languageButton = document.getElementById('languageToggle');
            languageButton.textContent = currentLang === 'en' ? '中文' : 'English';
        }

        function redirectToPreferredLanguage() {
            var savedLang = localStorage.getItem('preferredLanguage');
            var currentLang = document.documentElement.lang;

            if (savedLang && savedLang !== currentLang) {
                var currentPath = window.location.pathname;
                var currentFileName = currentPath.split('/').pop();
                var newFileName;

                if (savedLang === 'en' && !currentFileName.endsWith('_en.html')) {
                    newFileName = currentFileName.replace('.html', '_en.html');
                } else if (savedLang === 'zh' && currentFileName.endsWith('_en.html')) {
                    newFileName = currentFileName.replace('_en.html', '.html');
                } else {
                    return; // 不需要重定向
                }

                var newPath = currentPath.replace(currentFileName, newFileName);
                window.location.href = newPath;
            }
        }

        // 页面加载时检查保存的语言偏好并进行重定向
        document.addEventListener('DOMContentLoaded', function() {
            redirectToPreferredLanguage();
            setLanguageButtonText();
        });
