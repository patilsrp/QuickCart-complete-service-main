// Toggle the navigation bar in mobile view
const navbar = document.getElementById('navbar');
const toggleButton = document.createElement('button');
toggleButton.classList.add('navbar-toggle');
toggleButton.innerHTML = '<i class="fas fa-bars"></i>';

toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('navbar-expanded');
});

document.getElementById('header').appendChild(toggleButton);

// Add event listeners to "Shop Now" buttons in the product boxes
const shopNowButtons = document.querySelectorAll('.product-box button, .pro-container .pro button, .section-m1 button');

shopNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Shop Now button clicked!');
  });
});
