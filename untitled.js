
// Get the banner and button elements with the new class name
const banner2 = document.querySelector('.banner2');
const button2 = document.querySelector('.banner2-button');

// Add a click event listener to the new button
button2.addEventListener('click', () => {
  // Toggle the .active class on the new banner
  banner2.classList.toggle('active');
});

// Add hover effect to the new banner
banner2.addEventListener('mouseenter', () => {
  banner2.classList.add('active');
});

banner2.addEventListener('mouseleave', () => {
  banner2.classList.remove('active');
});





