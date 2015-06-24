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
                    if($(this).attr('id') === 'przelaczanie') {
                        var link = 'http://the-witcher-3-wild-hunt.github.io/the-witcher-3-wild-hunt-rep/'
                        link += $(this).attr('href');
                        window.location.link = link;
                    }
                    switch ($(this).attr('id')) {
                        case 'przelaczanie':
                            var link = 'http://the-witcher-3-wild-hunt.github.io/the-witcher-3-wild-hunt-rep/'
                            link += $(this).attr('href');
                            window.location.href = link;
                            break;
                        case 'przelaczHref':
                            var link = $(this).attr('href');
                            window.location.href = link;
                            break;
                    }
                    /*switch ($(this).attr('id')) {
                        case 'galeria': window.location.href = 'http://the-witcher-3-wild-hunt.github.io/the-witcher-3-wild-hunt-rep/galeria.html'; break;
                        case 'stronaGlowna': window.location.href = 'http://the-witcher-3-wild-hunt.github.io/the-witcher-3-wild-hunt-rep/index.html'; break;
                    }*/
                }
            });
        });
        return this;
    };
})(jQuery);