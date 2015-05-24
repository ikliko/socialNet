$.noty.layouts.topCenter = {
    name     : 'topCenter',
    options  : { // overrides options

    },
    container: {
        object  : '<div id="noty_topCenter_layout_container" style="z-index: 99999;" class="alert alert-dismissible alert-success"><button type="button" class="close" data-dismiss="alert">×</button></div>',
        selector: 'div#noty_topCenter_layout_container',
        style   : function() {
            $(this).css({
                top          : 20,
                left         : 0,
                position     : 'fixed',
                width        : '570px',
                height       : 'auto',
                margin       : '-4px',
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 10000000
            });

            $(this).css({
                left: ($(window).width() - $(this).outerWidth(false)) / 2 + 'px'
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none',
        width  : '310px'
    },
    addClass : ''
};
