// Global Variables and Functions
window.activeMenu = null;
window.isSearchOpen = false;

function closeAll() {
    window.activeMenu = null;
    window.isSearchOpen = false;

    $('#mega-menu').stop(true).slideUp(200);
    $('#search-overlay').fadeOut(200);
    $('#backdrop').fadeOut(150);

    // Chỉ gỡ class header-white nếu KHÔNG ở trang category
    if (!$('#category-container').is(':visible')) {
        $('#main-header').removeClass('header-white');
    }
    $('.nav-item').removeClass('active');

    $('#banner-slider').css({ opacity: 1, transform: 'scale(1)', pointerEvents: 'auto' });
}

function initGlobal() {
    $('#backdrop').click(closeAll);

    // Nhấn ESC để đóng
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') closeAll();
    });

    // Nhấp vào Logo → Quay lại trang chủ (Banner Slider)
    $(document).on('click', '#logo', function(e) {
        e.preventDefault();
        
        // Ẩn trang danh mục, hiện lại banner slider trang chủ
        $('#category-container').hide();
        $('#banner-slider-container').show();
        
        // Cập nhật UI slider hoạt động bình thường
        if (typeof updateSliderUI === 'function') {
            updateSliderUI();
        }
        
        // Cuộn trang lên đầu mượt mà
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        
        // Reset trạng thái header
        $('#main-header').removeClass('header-white');
        
        closeAll();
    });
}
