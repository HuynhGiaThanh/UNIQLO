// Header Logic
function initHeader() {
    // Cập nhật top theo promo bar
    function updateHeaderTop() {
        var h = $('#promo-bar').is(':visible') ? ($('#promo-bar').outerHeight() || 40) : 0;
        $('#main-header').css('top', h + 'px');
    }
    updateHeaderTop();
}
