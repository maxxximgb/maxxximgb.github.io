function removeBackground() {
    document.querySelector('.background').style.background = 'black';
    document.querySelector('video').remove();
}

function lightTheme() {
    let allElements = document.querySelectorAll('*');
    allElements.forEach((element) => {
        if (element.classList.contains('bg-dark')) {
            element.classList.remove('bg-dark');
            element.classList.add('bg-light');
        }
        if (element.classList.contains('text-dark')) {
            element.classList.remove('text-dark');
            element.classList.add('text-light');
        }
        element.style.color = 'black';
    });
    removeBackground()
    document.querySelector('.background').style.background = 'white';
}

function getActiveSlideNumber() {
    let activeSlide = document.querySelector('.carousel-item.active');
    let allSlides = Array.from(document.querySelectorAll('.carousel-item'));
    return allSlides.indexOf(activeSlide) + 1;
}

function showSlideNumber() {
    let slideNumber = getActiveSlideNumber();
    if (slideNumber === 1) {
        $('#myModal').modal('show');
    } else if (slideNumber === 2) {
        $('#sec').modal('show');
    } else if (slideNumber === 3) {
        $('#6th').modal('show');
    } else if (slideNumber === 4) {
        $('#th').modal('show');
    } else if (slideNumber === 5) {
        $('#fth').modal('show');
    } else if (slideNumber === 6) {
        $('#ffth').modal('show');
    }
}

document.querySelector('.btn.btn-primary').addEventListener('click', showSlideNumber);
