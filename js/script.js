
//script to chnage the underline of the nav options
const navOptions = document.querySelectorAll('.options');

navOptions[0].classList.add('active');

navOptions.forEach(option => {
    option.addEventListener('click', () => {
        navOptions.forEach(opt => opt.classList.remove('active'));
        
        option.classList.add('active');
    });
});

