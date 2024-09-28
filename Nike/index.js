const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        dropdown.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        dropdown.style.display = 'none';
    });
});
       
        const items = document.querySelectorAll('.carousel-item');
        const track = document.querySelector('.carousel-track');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;
        const itemCount = items.length;
        const itemsToShow = 3;
        const itemWidth = 100 / itemsToShow;
        items.forEach((item) => {
          item.style.flex = `0 0 ${itemWidth}%`;
        });
        function updateCarousel() {
          const offset = -(currentIndex * itemWidth);
          track.style.transform = `translateX(${offset}%)`;
        }
        nextButton.addEventListener('click', () => {
          currentIndex = (currentIndex + 1) % (itemCount - itemsToShow + 1);
          updateCarousel();
        });
        prevButton.addEventListener('click', () => {
          currentIndex = (currentIndex - 1 + (itemCount - itemsToShow + 1)) % (itemCount - itemsToShow + 1);
          updateCarousel();
        });
        updateCarousel();