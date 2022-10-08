const body = document.querySelector('body');
const inputs = document.querySelectorAll('input');

// Detect when the user uses the dark mode or light mode
function getSystemTheme(callback) {
    let media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', function (e) {
        callback && callback(e.matches ? "dark" : "light")
    })

    callback && callback(media.matches ? 'dark' : 'light')
};

getSystemTheme(function (theme) {
    console.log(theme);
    if (theme === 'dark') {
        body.style.backgroundColor = '#2b2b2b';
        inputs.forEach(input => {
            input.style.color = '#f5f5f5';
        });
    } else {
        body.style.backgroundColor = '#f5f5f5';
        inputs.forEach(input => {
            input.style.color = '#2b2b2b';
        });
    }
});
// end





