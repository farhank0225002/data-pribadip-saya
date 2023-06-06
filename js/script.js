const hamburgerMenu = document.getElementById("hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

hamburgerMenu.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});

// Toggle navbar-nav visibility when hamburger is clicked
document
  .getElementById("hamburger-menu")
  .addEventListener("click", function () {
    var navbarNav = document.querySelector(".navbar-nav");
    if (navbarNav.style.display === "block") {
      navbarNav.style.display = "none";
    } else {
      navbarNav.style.display = "block";
    }
  });

// sembunyikan hamburger menu ketika layar lebar
function hideHamburgerMenu() {
  hamburgerMenu.style.display = "none";
}

// tampilkan hamburger menu ketika layar kecil
function showHamburgerMenu() {
  hamburgerMenu.style.display = "block";
}

// sembunyikan navbar-nav ketika layar kecil
function hideNavbarNav() {
  navbarNav.style.display = "none";
}

// tampilkan navbar-nav ketika layar lebar
function showNavbarNav() {
  navbarNav.style.display = "flex";
}

// cek ukuran layar saat halaman dimuat
if (window.innerWidth > 768) {
  hideHamburgerMenu();
  showNavbarNav();
} else {
  showHamburgerMenu();
  hideNavbarNav();
}

// cek ukuran layar saat halaman diubah ukurannya
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    hideHamburgerMenu();
    showNavbarNav();
  } else {
    showHamburgerMenu();
    hideNavbarNav();
  }
});

// login google
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log("ID: " + profile.getId());
  console.log("Full Name: " + profile.getName());
  console.log("Given Name: " + profile.getGivenName());
  console.log("Family Name: " + profile.getFamilyName());
  console.log("Image URL: " + profile.getImageUrl());
  console.log("Email: " + profile.getEmail());
}
