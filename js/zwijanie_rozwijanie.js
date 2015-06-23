(function () {
    $.fn.zwijanie_rozwijanie = function () {
        $(this).each(function () {
            $(this).find('p').hide();

            $(this).find('a').click(function (e) {
                e.preventDefault();
                if ($(this).text() === '+') {
                    $(this).text('-').parent().parent().find('p').slideDown();
                } else if($(this).text() === '-') {
                    $(this).text('+').parent().parent().find('p').slideUp();
                } else {
                    switch ($(this).attr('id')) {
                        case 'galeria': window.location.href = 'http://the-witcher-3-wild-hunt.github.io/the-witcher-3-wild-hunt-rep/galeria.html'; break;
                        case 'stronaGlowna': window.location.href = 'http://the-witcher-3-wild-hunt.github.io/the-witcher-3-wild-hunt-rep/index.html'; break;
                    }
                }
            });
        });
        return this;
    };
})(jQuery);