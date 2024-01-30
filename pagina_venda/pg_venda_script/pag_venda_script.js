 $(function(){
    $('#icone_menu').on('click', ()=>{
        $('.menu').slideDown(2000);
        $('nav .menu').insertAfter('#icone_menu');
        $('nav #icone_menu').css('display', 'none');
        $('.icone_close').css('display', 'block');
    });
    $('.icone_close').on('click', ()=>{
        $('.menu').slideUp(2000);
        $('nav .menu').insertBefore('#icone_menu');
        $('nav #icone_menu').css('display', 'block');
        $('.icone_close').css('display', 'none');
    });
})