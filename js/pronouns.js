jQuery(function() {

    var $cells = $('tr.cells td');

    $cells.hover(
        function() {
            $( this ).addClass('hover');
        }, function() {
            $( this ).removeClass('hover');
        }
    );

    var options = {
        'html':true,
        'container': 'body'
    };
    $cells.tooltip(options);

});
