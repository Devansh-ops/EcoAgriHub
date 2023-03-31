// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Responsive menu
  const nav = document.querySelector('nav');
  const menuButton = document.createElement('button');
  menuButton.textContent = 'Menu';
  menuButton.classList.add('menu-button');
  
  nav.appendChild(menuButton);
  
  menuButton.addEventListener('click', () => {
    const menuItems = nav.querySelector('ul');
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
      menuItems.style.display = 'flex';
    } else {
      menuItems.style.display = 'none';
    }
  });
  
  // Handle menu display on window resize
  window.addEventListener('resize', () => {
    const menuItems = nav.querySelector('ul');
    if (window.innerWidth > 768) {
      menuItems.style.display = 'flex';
    } else {
      menuItems.style.display = 'none';
    }
  });
  