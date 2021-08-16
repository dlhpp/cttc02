let sidenavActive = false;

const toggleSideMenu = (e) => {
    console.log("toggleSideMenu(): ", e);
    sidenavActive = !sidenavActive;
    navbarLinks.classList.toggle("active");
    interceptBackground.classList.toggle("active");
    // event.preventDefault();
};

const detectEscapeKey = (e) => {
    console.log("detectEscapeKey(): ", e);
    if (sidenavActive && (e.key === "Escape" || e.keyCode === 27)) {
        toggleSideMenu();
    }
};

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const interceptBackground = document.getElementsByClassName("intercept-background")[0];

toggleButton.addEventListener("click", toggleSideMenu);
interceptBackground.addEventListener("click", toggleSideMenu);

// keypress ONLY works on printable characters.
document.addEventListener("keydown", detectEscapeKey);
