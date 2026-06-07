/**
 * JS cho Component Category (Tương tác & Điều hướng cơ bản trên HTML tĩnh)
 */

function initCategory() {
    console.log("Category module initialized");

    // Gắn sự kiện hover màu (Thay đổi viền và đổi ảnh sản phẩm)
    $(document).on('mouseenter', '.color-swatch', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        
        // Cập nhật hình ảnh sản phẩm tương ứng với màu
        const newImgSrc = $(this).attr('data-img');
        $(this).closest('.product-card').find('.product-card__image').attr('src', newImgSrc);
    });

    // Sự kiện mở dropdown bộ lọc
    $(document).on('click', '.filter-dropdown', function() {
        if(!$(this).hasClass('filter-dropdown--icon')) {
            $(this).toggleClass('open');
        }
    });

    // Sự kiện click chuyển danh mục phụ (top nav) để mô phỏng bộ lọc sản phẩm
    $(document).on('click', '.category-nav__item', function(e) {
        e.preventDefault();
        if($(this).hasClass('active')) return;
        
        var $parent = $(this).closest('.category-nav');
        $parent.find('.category-nav__item').removeClass('active');
        $(this).addClass('active');
        
        // Mô phỏng bộ lọc sản phẩm: ẩn/hiện ngẫu nhiên một số sản phẩm
        var $section = $(this).closest('.category-section-content');
        var $cards = $section.find('.product-card');
        var visibleCount = 0;
        
        $cards.each(function() {
            if (Math.random() > 0.4) {
                $(this).show();
                visibleCount++;
            } else {
                $(this).hide();
            }
        });
        
        // Nếu ngẫu nhiên ẩn hết thì hiện lại ít nhất 2 cái
        if (visibleCount === 0) {
            $cards.slice(0, 2).show();
            visibleCount = 2;
        }

        $section.find('.results-bar__count').text('Kết quả: ' + visibleCount + ' sản phẩm');
    });

    // Khởi tạo scroll logic cho sticky headers
    initStickyScroll();
}

function showCategory(catId) {
    console.log("Showing category: " + catId);
    
    // Đảm bảo header đổi thành màu trắng
    $('#main-header').addClass('header-white');
    
    // Ẩn tất cả các khối danh mục sản phẩm
    $('.category-section-content').hide();
    
    // Hiển thị khối được chọn
    var $targetSection = $('#cat-section-' + catId);
    if ($targetSection.length) {
        $targetSection.show();
        // Reset sub-nav và products của section đó về mặc định
        $targetSection.find('.category-nav__item').removeClass('active');
        $targetSection.find('.category-nav__item[data-index="0"]').addClass('active');
        $targetSection.find('.product-card').show();
        $targetSection.find('.results-bar__count').text('Kết quả: 8 sản phẩm');
    } else {
        // Fallback về áo khoác nếu không tìm thấy
        $('#cat-section-ao-khoac').show();
    }

    // Reset styles và các class sticky của wrappers
    $('.category-nav').removeClass('is-sticky').css({ 'transform': '', 'top': '', 'opacity': '', 'pointer-events': '' });
    $('.filters-bar').removeClass('is-sticky').css({ 'transform': '', 'top': '' });
    $('.category-nav-wrapper').css('height', '');
    $('.filters-bar-wrapper').css('height', '');
}

function initStickyScroll() {
    const $mainHeader = $('#main-header');
    const $filtersBar = $('.filters-bar');
    
    // Tạo wrapper cho filters-bar nếu chưa có
    if ($filtersBar.length && !$filtersBar.parent().hasClass('filters-bar-wrapper')) {
        $filtersBar.wrap('<div class="filters-bar-wrapper"></div>');
    }
    const $filtersWrapper = $('.filters-bar-wrapper');

    let lastScrollTop = 0;
    let isSticky = false;

    $(window).off('scroll.categoryScroll').on('scroll.categoryScroll', function() {
        // Chỉ hoạt động khi category-container đang hiển thị
        if (!$('#category-container').is(':visible')) return;

        const scrollTop = $(window).scrollTop();
        const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';
        const headerHeight = 46; // Chiều cao cố định của main-header

        const $activeSection = $('.category-section-content:visible');
        if (!$activeSection.length) return;

        const $categoryNav = $activeSection.find('.category-nav');
        if (!$categoryNav.length) return;

        // Tạo wrapper cho category-nav của section hiện tại nếu chưa có
        if (!$categoryNav.parent().hasClass('category-nav-wrapper')) {
            $categoryNav.wrap('<div class="category-nav-wrapper"></div>');
        }
        const $navWrapper = $categoryNav.parent();

        // 1. Xử lý vị trí Header chính (Promo Bar)
        const promoHeight = $('#promo-bar').is(':visible') ? $('#promo-bar').outerHeight() : 0;
        if (scrollTop > promoHeight) {
            $mainHeader.css('top', '0px');
        } else {
            $mainHeader.css('top', (promoHeight - scrollTop) + 'px');
        }

        // 2. Logic dính (sticky) cho Category Nav và Filters
        const navTrigger = $navWrapper.offset().top - headerHeight;
        
        if (scrollTop > navTrigger) {
            if (!isSticky) {
                // Thiết lập chiều cao cố định cho wrapper trước khi làm con sticky để tránh giật trang
                $navWrapper.height($categoryNav.outerHeight());
                $filtersWrapper.height($filtersBar.outerHeight());
                
                $categoryNav.addClass('is-sticky');
                $filtersBar.addClass('is-sticky');
                isSticky = true;
            }
            
            // Xử lý hướng cuộn
            if (scrollDirection === 'down') {
                // Ẩn thanh điều hướng phụ bằng cách di chuyển lên và làm mờ
                $categoryNav.css({
                    'transform': `translateY(-100%)`,
                    'opacity': '0',
                    'pointer-events': 'none',
                    'top': headerHeight + 'px'
                });
                $filtersBar.css({
                    'transform': `translateY(-${$categoryNav.outerHeight()}px)`,
                    'top': (headerHeight + $categoryNav.outerHeight()) + 'px'
                });
            } else {
                // Hiện lại thanh điều hướng phụ
                $categoryNav.css({
                    'transform': `translateY(0)`,
                    'opacity': '1',
                    'pointer-events': 'auto',
                    'top': headerHeight + 'px'
                });
                $filtersBar.css({
                    'transform': `translateY(0)`,
                    'top': (headerHeight + $categoryNav.outerHeight()) + 'px'
                });
            }

        } else {
            if (isSticky) {
                $categoryNav.removeClass('is-sticky');
                $filtersBar.removeClass('is-sticky');
                
                // Khôi phục lại toàn bộ styles ban đầu
                $categoryNav.css({ 'transform': '', 'top': '', 'opacity': '', 'pointer-events': '' });
                $filtersBar.css({ 'transform': '', 'top': '' });
                $navWrapper.css('height', '');
                $filtersWrapper.css('height', '');
                
                isSticky = false;
            }
        }

        lastScrollTop = scrollTop;
    });
}
