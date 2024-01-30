$('#menu_mobile').click(function (e) { 
    $('#menu_mobile').fadeOut(1000, function() {
        $(this).css('display', 'none');
    });
    $('#lista_links').slideDown(1000, function() {
        $('#close_menu_mobile').fadeIn(1000, function() {
            $(this).css('display', 'block');
        });
    });
});
$('#close_menu_mobile').click(function() {
    $('#close_menu_mobile').fadeOut(1000, function(){
        $(this).css('display', 'none');
    })
    $('#lista_links').slideUp(1000, function() {
        $('#menu_mobile').fadeIn(1000, function () {
            $(this).css('display', 'flex');
        })
    });
})

