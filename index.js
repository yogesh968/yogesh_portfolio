if(menuBtn.className === "nav-menu"){
  menuBtn.className += " responsive";
} else {
  menuBtn.className = "nav-menu";
}
if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

  navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
  navHeader.style.height = "70px";
  navHeader.style.lineHeight = "70px";

} else {

  navHeader.style.boxShadow = "none";
  navHeader.style.height = "90px";
  navHeader.style.lineHeight = "90px";

}
if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

  document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

}  else {

document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

}
/* ----- NAVIGATION TOGGLE FUNCTION ----- */
function toggleNavigationMenu() {
  var navMenu = document.getElementById("navigationMenu");

  if (navMenu.className === "nav-menu") {
      navMenu.className += " active";
  } else {
      navMenu.className = "nav-menu";
  }
}

/* ----- ADD SHADOW TO NAVIGATION BAR ON SCROLL ----- */
window.onscroll = function() { applyHeaderShadow() };

function applyHeaderShadow() {
  const headerElement = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      headerElement.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      headerElement.style.height = "70px";
      headerElement.style.lineHeight = "70px";
  } else {
      headerElement.style.boxShadow = "none";
      headerElement.style.height = "90px";
      headerElement.style.lineHeight = "90px";
  }
}

/* ----- TYPING ANIMATION ----- */
var typingAnimation = new Typed(".animatedText", {
  strings: ["Designer", "YouTuber", "Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const revealAnimation = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

/* -- HOME SECTION -- */
revealAnimation.reveal('.highlighted-text-card', {});
revealAnimation.reveal('.highlighted-name', { delay: 100 });
revealAnimation.reveal('.highlighted-text-info', { delay: 200 });
revealAnimation.reveal('.highlighted-text-btn', { delay: 200 });
revealAnimation.reveal('.social-icons', { delay: 200 });
revealAnimation.reveal('.highlighted-image', { delay: 300 });

/* -- PROJECT BOXES -- */
revealAnimation.reveal('.project-item', { interval: 200 });

/* -- HEADINGS -- */
revealAnimation.reveal('.main-header', {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT & CONTACT INFO -- */
const revealFromLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

revealFromLeft.reveal('.about-details', { delay: 100 });
revealFromLeft.reveal('.contact-details', { delay: 100 });

/* -- ABOUT SKILLS & FORM SECTION -- */
const revealFromRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

revealFromRight.reveal('.skills-section', { delay: 100 });
revealFromRight.reveal('.form-input', { delay: 100 });

/* ----- UPDATE ACTIVE LINK ----- */
const sectionElements = document.querySelectorAll('section[id]');

function updateActiveLink() {
  const scrollPosition = window.scrollY;

  sectionElements.forEach(currentSection => {
      const sectionHeight = currentSection.offsetHeight,
          sectionTop = currentSection.offsetTop - 50,
          sectionId = currentSection.getAttribute('id');

      if (scrollPosition > sectionTop && scrollPosition <= sectionTop + sectionHeight) {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else {
          document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      }
  });
}

window.addEventListener('scroll', updateActiveLink);