// Promo Bar Logic
function initPromoBar() {
    $(document).off('click.closepromo').on('click.closepromo', '#close-promo', function() {
        $('#promo-bar').hide();
        $('#main-header').css('top', '0');
    });
}
