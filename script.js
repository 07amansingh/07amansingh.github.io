document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navList = document.getElementById('nav-list');
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;

    // Toggle navigation menu
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });

    // Close navigation menu on link click
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('open');
        });
    });

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // Lazy loading images
    var lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });

    // Set up Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        let lazyImages = document.querySelectorAll('img.lazy');
        let imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
});
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('menu-toggle').addEventListener('click', () => {
    const navMenu = document.querySelector('nav ul');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});
document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menu-toggle');
    var navList = document.getElementById('nav-list');
    var darkModeToggle = document.getElementById('dark-mode-toggle');
    var body = document.body;

    // Toggle navigation menu
    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('open');
    });

    // Close navigation menu on link click
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navList.classList.remove('open');
        });
    });

    // Toggle dark mode
    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
        var isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('dark-mode', isDarkMode);
    });

    // Check for dark mode preference
    var savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    if (savedDarkMode) {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️';
    } else {
        darkModeToggle.textContent = '🌙';
    }

    // Lazy loading images
    var lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(function(img) {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
    });

    // Set up Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
        let lazyImages = document.querySelectorAll('img.lazy');
        let imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    let image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove('lazy');
                    imageObserver.unobserve(image);
                }
            });
        });
        lazyImages.forEach(image => {
            imageObserver.observe(image);
        });
    } else {
        // Fallback for browsers without IntersectionObserver support
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
            img.classList.remove('lazy');
        });
    }
});


