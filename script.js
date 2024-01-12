// Wait for the Ionicons library to load
document.addEventListener('DOMContentLoaded', function () {
    // get element by id
    let toggleBtn = document.getElementById('dark-mode-btn');

    // add event listener
    toggleBtn.addEventListener('click', function () {
        // toggle the icon name
        toggleBtn.setAttribute('name', toggleBtn.getAttribute('name') === 'sunny-outline' ? 'moon-outline' : 'sunny-outline');

        // change theme
        document.body.classList.toggle('dark-theme');
    });
});
