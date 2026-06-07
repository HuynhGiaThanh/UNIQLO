// Banner Slider Logic
let currentIdx = 0;
let isPlaying = true;
let isLocked = false;
let autoPlayTimer;
const TOTAL_SLIDES = 3;

function initBannerSlider() {
    updateSliderUI();
    bindSliderEvents();
    startAutoPlay();
}

function updateSliderUI() {
    $('.slide').removeClass('active');
    $('.slide[data-index="' + currentIdx + '"]').addClass('active');

    $('.slide .slide-content').removeClass('animate-in');
    setTimeout(function() {
        $('.slide[data-index="' + currentIdx + '"] .slide-content').addClass('animate-in');
    }, 50);

    $('.dot').removeClass('active');
    $('.dot-btn[data-index="' + currentIdx + '"] .dot').addClass('active');

    var num   = String(currentIdx + 1).padStart(2, '0');
    var total = String(TOTAL_SLIDES).padStart(2, '0');
    $('#slide-number').text(num + ' / ' + total);
}

function togglePlay() {
    isPlaying = !isPlaying;
    if (isPlaying) {
        $('#pause-icon').show();
        $('#play-icon').hide();
        startAutoPlay();
    } else {
        $('#pause-icon').hide();
        $('#play-icon').show();
        clearInterval(autoPlayTimer);
    }
}

function startAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(function() {
        // Chỉ auto play khi banner-slider đang hiển thị và không mở menu/search
        if (!window.activeMenu && !window.isSearchOpen && $('#banner-slider').is(':visible')) {
            nextSlide();
        }
    }, 5000);
}

function nextSlide() {
    currentIdx = (currentIdx + 1) % TOTAL_SLIDES;
    updateSliderUI();
}

function prevSlide() {
    currentIdx = (currentIdx - 1 + TOTAL_SLIDES) % TOTAL_SLIDES;
    updateSliderUI();
}

function handleSliderWheel(e) {
    if (isLocked || window.activeMenu || window.isSearchOpen || !$('#banner-slider').is(':visible')) return;
    if (Math.abs(e.deltaY) < 20) return;
    isLocked = true;
    if (e.deltaY > 0) nextSlide(); else prevSlide();
    setTimeout(function() { isLocked = false; }, 800);
}

function bindSliderEvents() {
    $('#play-pause').off('click').on('click', function(e) {
        e.stopPropagation();
        togglePlay();
    });

    $(document).off('click.dots').on('click.dots', '.dot-btn', function() {
        currentIdx = parseInt($(this).data('index'));
        updateSliderUI();
    });

    // Scroll để chuyển slide
    window.removeEventListener('wheel', handleSliderWheel);
    window.addEventListener('wheel', handleSliderWheel);
}
