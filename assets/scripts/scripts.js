function slide(direction) {
    var container = document.getElementById('content');
    scrollCompleted = 0;
    var slideVar = setInterval(function () {
        if (direction == 'left') {
            container.scrollLeft -= 1000;
        } else {
            container.scrollLeft += 1000;
        }
        scrollCompleted += 800;
        if (scrollCompleted >= 1200) {
            window.clearInterval(slideVar);
        }
    }, 1000);
}