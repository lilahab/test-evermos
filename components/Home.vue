<template>
    <div>
        <div>
        <header id="navbar">
            <nav class="navbar-container container">
                <a href="/" class="home-link">
                <div class="navbar-logo">
                    <img src="@/assets/evermos.png" width="100%">
                </div>
               
                </a>
                <button type="button" id="navbar-toggle" aria-controls="navbar-menu" aria-label="Toggle menu" aria-expanded="false">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                </button>
                <div id="navbar-menu" aria-labelledby="navbar-toggle">
                <ul class="navbar-links">
                    <li class="navbar-item"><a class="navbar-link" href="/careers">Shop</a></li>
                    <li class="navbar-item"><a class="navbar-link" href="/contact">Login</a></li>
                </ul>
                </div>
            </nav>
        </header>
        </div>
        <div class="banner">
            <img src="@/assets/img2.jpg" width="100%">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  mounted() {
    const navbarToggle = navbar.querySelector("#navbar-toggle");
    const navbarMenu = document.querySelector("#navbar-menu");
    const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");
    let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

    const toggleNavbarVisibility = () => {
    isNavbarExpanded = !isNavbarExpanded;
    navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
    };

    navbarToggle.addEventListener("click", toggleNavbarVisibility);

    navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
    navbarMenu.addEventListener("click", toggleNavbarVisibility);
  }
}

</script>