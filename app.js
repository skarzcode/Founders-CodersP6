const themeToggle = document.querySelector(".switch");
themeToggle.addEventListener('change', switchTheme);
window.addEventListener("scroll", reveal);
window.addEventListener("scroll", reveal1);
window.addEventListener("scroll", reveal2);
window.addEventListener("scroll", reveal3);
window.addEventListener("scroll", reveal4);

function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.style.transition = "all 2s"
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.style.transition = "all 2s"
        localStorage.setItem('theme', 'light');
    }


}
// translate up and down
function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function reveal1() {
    var reveals1 = document.querySelectorAll(".reveal1")
    for (var i = 0; i < reveals1.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals1[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals1[i].classList.add("active1");
        } else {
            reveals1[i].classList.remove("active1");
        }
    }
}

// opacity animation
function reveal2() {
    var reveals2 = document.querySelectorAll(".reveal2")
    for (var i = 0; i < reveals2.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals2[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTOP < windowHeight - revealPoint) {
            reveals2[i].classList.add("active2");

        } else {
            reveals2[i].classList.remove("active2");
        }
    }
};

// Translate Horizontal animation
function reveal3() {
    var reveals3 = document.querySelectorAll(".reveal3")
    for (var i = 0; i < reveals3.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals3[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals3[i].classList.add("active3");

        } else {
            reveals3[i].classList.remove("active3");
        }
    }
};

// Translate Horizontal animation2
function reveal4() {
    var reveals4 = document.querySelectorAll(".reveal4")
    for (var i = 0; i < reveals4.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTOP = reveals4[i].getBoundingClientRect().top;
        var revealPoint = 0;

        if (revealTOP < windowHeight - revealPoint) {
            reveals4[i].classList.add("active4");

        } else {
            reveals4[i].classList.remove("active4");
        }
    }
};








