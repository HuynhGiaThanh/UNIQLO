// Mega Menu Logic

function initMegaMenu() {
    bindMenuHover();
    bindCategoryClicks();
}

function bindMenuHover() {
    // Hover vào nav item → mở menu
    $(document).on('mouseenter', '.nav-item', function() {
        var menu = $(this).data('menu');
        openMenu(menu);
    });

    // Hover ra khỏi cả header + mega-menu → đóng
    $(document).on('mouseleave', '#main-header', function(e) {
        var to = e.relatedTarget;
        if (!$(to).closest('#mega-menu').length) {
            closeAll();
        }
    });

    $(document).on('mouseleave', '#mega-menu', function(e) {
        var to = e.relatedTarget;
        if (!$(to).closest('#main-header').length) {
            closeAll();
        }
    });
}

function openMenu(menu) {
    window.activeMenu = menu;
    window.isSearchOpen = false;
    $('#search-overlay').hide();

    $('#main-header').addClass('header-white');
    $('.nav-item').removeClass('active');
    $('.nav-item[data-menu="' + menu + '"]').addClass('active');

    // Chuyển đối tượng menu sang ID tương ứng trong HTML
    var gridId = 'NU';
    if (menu === 'NAM') gridId = 'NAM';
    else if (menu === 'TRE EM') gridId = 'TRE_EM';
    else if (menu === 'EM BE') gridId = 'EM_BE';

    $('.category-grid-content').hide();
    $('#category-grid-' + gridId).show();

    // Tính top = promo bar height + header height
    var promoH = $('#promo-bar').is(':visible') ? ($('#promo-bar').outerHeight() || 40) : 0;
    var headerH = $('#main-header').outerHeight() || 46;
    var menuTop = promoH + headerH;

    $('#mega-menu').css({ top: menuTop + 'px', maxHeight: 'calc(100vh - ' + menuTop + 'px)' });

    if ($('#mega-menu').is(':visible')) {
        // Đã mở, chỉ cập nhật vị trí
    } else {
        $('#mega-menu').stop(true).slideDown(200);
        $('#banner-slider').css({ opacity: 0.3, pointerEvents: 'none' });
    }
}

function bindCategoryClicks() {
    // Nhấp vào category-item trên Mega Menu
    $(document).off('click.categoryItem').on('click.categoryItem', '.category-item', function(e) {
        e.preventDefault();
        var catId = $(this).attr('data-cat');
        if (catId) {
            // Hiển thị phần category, ẩn slider
            $('#banner-slider-container').hide();
            $('#category-container').show();
            
            // Gọi hàm showCategory tương ứng
            if (typeof showCategory === 'function') {
                showCategory(catId);
            }
            
            // Cuộn trang lên đầu để xem nội dung
            $('html, body').animate({ scrollTop: 0 }, 'fast');

            // Đóng menu
            closeAll();
        }
    });
}
