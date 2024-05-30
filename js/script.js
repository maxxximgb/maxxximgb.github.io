function removeBackground() {
    if (document.querySelector('.background').style.background !== 'white)' {
        document.querySelector('.background').style.background = 'black';
        document.querySelector('video').remove();
    }
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
    document.querySelector('video').remove();
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

function toggleFullScreen() {
    let videoContainer = document.getElementById('video-container');
    if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        } else if (videoContainer.mozRequestFullScreen) {
            videoContainer.mozRequestFullScreen();
        } else if (videoContainer.webkitRequestFullscreen) {
            videoContainer.webkitRequestFullscreen();
        } else if (videoContainer.msRequestFullscreen) {
            videoContainer.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}
