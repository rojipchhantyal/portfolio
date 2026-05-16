
//script to chnage the underline of the nav options
const navOptions = document.querySelectorAll('.options');

navOptions[0].classList.add('active');

navOptions.forEach(option => {
    option.addEventListener('click', () => {
        navOptions.forEach(opt => opt.classList.remove('active'));
        
        option.classList.add('active');
    });
});


//for date select effect
const dates = document.querySelectorAll('.dates li');

dates[0].classList.add('bgc');

dates.forEach(date => {
    date.addEventListener('click', () => {
        dates.forEach(dt => dt.classList.remove('bgc'));

        date.classList.add('bgc');
    });
});


//to show the conetent according to the nav
const welCon = document.getElementById("welcome-content");
const porCon = document.getElementById("portfolio-content");
const forCon = document.getElementById("form-content");

function showSection(id){

    welCon.style.display = "none";
    porCon.style.display = "none";
    forCon.style.display = "none";

    document.getElementById(id).style.display = "block";
}

// search bar pop up open
function searchOpen(){
    document.getElementById("search-pop-up-wrapper-id").classList.add('pop');
    document.body.classList.add('stopscrolling');
}

//search bar pop up close
function searchClose(){
    document.getElementById("searchbar-input").value = "";
    document.getElementById("search-pop-up-wrapper-id").classList.remove('pop');
    document.body.classList.remove('stopscrolling');
}

//for light mode
const darkMode = document.getElementById("mode-theme");
const lightMode = document.getElementById("dark-mode-theme");

function enableLightMode(){
    document.body.classList.add('lightmode');
    darkMode.style.display = "none";

    lightMode.style.display = "flex";
}
function disableLightMode(){
    document.body.classList.remove('lightmode');
    darkMode.style.display = "flex";

    lightMode.style.display = "none";
}

//functions to  open and close the side menu bar
function openMenu(){
    document.body.classList.add('stopscrolling');
    document.getElementById("menu").classList.add('open');
}

function closeMenu(){
    document.body.classList.remove('stopscrolling');
    document.getElementById("menu").classList.remove('open');
}