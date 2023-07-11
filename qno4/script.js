function toggleNavbarMenu() {
    var navbarItems = document.getElementById('navbarItems');
    navbarItems.classList.toggle('show');
    navbarItems.style="display: block";
    document.getElementById('navbar-toggle').style="display:none";
  }