$.noty.layouts.top = {
    name     : 'top',
    options  : {},
    container: {
        object  : '<ul id="noty_top_layout_container" style="background-color: #00b3ee; z-index: 99999;" />',
        selector: 'ul#noty_top_layout_container',
        style   : function() {
            $(this).css({
                top          : 0,
                left         : '5%',
                position     : 'fixed',
                width        : '90%',
                height       : 'auto',
                margin       : '100px 0 0 0',
                padding      : 0,
                listStyleType: 'none',
                zIndex       : 9999999999
            });
        }
    },
    parent   : {
        object  : '<li />',
        selector: 'li',
        css     : {}
    },
    css      : {
        display: 'none'
    },
    addClass : ''
};