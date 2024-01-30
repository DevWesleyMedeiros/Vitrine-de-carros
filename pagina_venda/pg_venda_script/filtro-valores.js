$(document).ready(function(){

    var currentValue = 0;
    var isDrag = false;
    var maxPrice = 70000;
    var currentPrice = 0;

    $('.pointer_barra').mousedown(function() {
        isDrag = true;
    });
    $(document).mouseup(function () { 
        isDrag = false;
        enableTextSelected();
    });
    $('.barra_preco').mousemove(function (e) { 
        if (isDrag) {
            disableTextSelected();
            var elBase = $(this);
            var mouseX = e.pageX - elBase.offset().left;
            if (mouseX < 0) {
                mouseX = 0;
            }
            if (mouseX > elBase.width()) {
                mouseX = elBase.width();
            }
            $('.pointer_barra').css('left', (mouseX - 13)+'px');
            currentValue = (mouseX / elBase.width()) * 100;
            $('.barra_preco_fill').css('width', currentValue+'%');

            currentPrice = (currentValue / 100) * maxPrice;
            currentPrice = formatarPreco(currentPrice);
            $('.preco-pesquisa').html("R$" + currentPrice);
        }
    });
    function formatarPreco(precoAtual) {
        precoAtual = precoAtual.toFixed(2);
        precoArr = precoAtual.split(".");

        var novoPreco = formatarPrecoTotal(precoArr);

        return novoPreco;
    }
    function formatarPrecoTotal(precoArr) {
        if (precoArr[1] == '00') {
            return precoArr[0] + ',' + precoArr[1];
        }else if(precoArr[0] < 1000){
            return precoArr[0][0]+ '.' + precoArr[0].substr(1, precoArr[0].length)+ ',' + precoArr[1];
        }else{
            return precoArr[0][0] + precoArr[0][1] + '.' + precoArr[0].substr(2, precoArr[0].length) + ',' + precoArr[1];
        }
    };

    function disableTextSelected() {
        $("body").css("webkit-user-select", "none");
        $("body").css("moz-user-select", "none");
        $("body").css("ms-user-select", "none");
        $("body").css("o-user-select", "none");
        $("body").css("user-select", "none");
    };
    function enableTextSelected(){
        $("body").css("webkit-user-select", "auto");
        $("body").css("moz-user-select", "auto");
        $("body").css("ms-user-select", "auto");
        $("body").css("o-user-select", "auto");
        $("body").css("user-select", "auto");
    };
});
