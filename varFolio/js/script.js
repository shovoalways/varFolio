// Get all the anchor elements inside the nav
let links = document.querySelectorAll('#mainmenu ul li a');

// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', function (event) {
    // Remove 'active' class from all li elements
    links.forEach(link => {
      link.parentElement.classList.remove('active');
    });

    // Add 'active' class to the clicked li element
    this.parentElement.classList.add('active');
  });
});
