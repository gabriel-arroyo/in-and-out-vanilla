/*!
 * Start Bootstrap - New Age v6.0.6 (https://startbootstrap.com/theme/new-age)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-new-age/blob/master/LICENSE)
 */
//
// Scripts
//

window.addEventListener("DOMContentLoaded", (event) => {
  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

function togglePlay() {
  var vid = document.getElementById("bg-video");
  if (vid.paused) {
    vid.play();
  } else {
    vid.pause();
  }
}

let muted = true;
function toggleMute() {
  var vid = document.getElementById("bg-video");
  vid.muted = !muted;
  muted = vid.muted;
}
function mute() {
  var vid = document.getElementById("bg-video");
  vid.muted = true;
  muted = vid.muted;
}
function unmute() {
  var vid = document.getElementById("bg-video");
  vid.muted = false;
  muted = vid.muted;
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
let firstUnmute = false;
const unmuteStart = async () => {
  if (!firstUnmute) {
    await delay(2000);
    console.log("unmuted");
    unmute();
    firstUnmute = true;
  }
};

function reveal() {
  try {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function appear() {
  try {
    var reveals = document.querySelectorAll(".appear");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function spin() {
  try {
    var reveals = document.querySelectorAll(".spin");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function slide() {
  try {
    var reveals = document.querySelectorAll(".slide");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  } catch (error) {
    console.log(error);
  }
}

function showSnackbar() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

window.addEventListener("scroll", reveal);
window.addEventListener("scroll", appear);
window.addEventListener("scroll", spin);
window.addEventListener("scroll", slide);

// To check the scroll position on page load
reveal();
appear();
spin();
slide();
