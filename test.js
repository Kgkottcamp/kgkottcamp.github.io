window.addEventListener('scroll', checkSlideIn);

function checkSlideIn() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        // half way through the box
        const slideInAt = (window.scrollY + window.innerHeight) - box.offsetHeight / 2;

        // bottom of the box
        const boxBottom = box.offsetTop + box.offsetHeight;

        const isHalfShown = slideInAt > box.offsetTop;
        const isNotScrolledPast = window.scrollY < boxBottom;

        if (isHalfShown && isNotScrolledPast) {
            box.classList.add('active');
        } else {
            box.classList.remove('active');
        }
    });
}
