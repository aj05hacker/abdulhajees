function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



window.addEventListener('scroll', function() {
  // Get the scroll position
  let scrollPosition = window.scrollY;
  // Get the total scrollable height of the document
  let documentHeight = document.documentElement.scrollHeight - window.innerHeight;
  // Calculate the scroll percentage
  let scrollPercentage = scrollPosition / documentHeight;

  // Calculate the background gradient based on the scroll percentage
  let gradientValue = scrollPercentage * 100;

  // Set the new background gradient
  document.getElementById('body').style.background = `linear-gradient(to bottom,   #FF9677 ${50 - gradientValue}%, white ${gradientValue}%, #FF9677 ${70 - gradientValue}%, white ${50 - gradientValue}%,#FF9677${70 - gradientValue}%,LightSalmon ${10 - gradientValue}%`;
});
