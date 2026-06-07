// Search Overlay Logic

function initSearch() {
    $(document).off('click.opensearch').on('click.opensearch', '#open-search', function() {
        window.isSearchOpen = true;
        $('#search-overlay').fadeIn(300);
        $('#backdrop').fadeIn(200);
        $('#search-input').focus();
    });

    $(document).off('click.closesearch').on('click.closesearch', '.close-search', function() {
        window.isSearchOpen = false;
        $('#search-overlay').fadeOut(300);
        if (!window.activeMenu) $('#backdrop').fadeOut(200);
    });
}
