jQuery(function() {

    $('tr.cells td').hover(
        function() {
            $( this ).addClass('hover');

          /*  var idx = ($(this).index())+1;
            $('table tr.rank td:nth-child('+idx+')').css( {'color':'orange' } );*/

        }, function() {
            $( this ).removeClass('hover');
           /* var idx = ($(this).index())+1;
            $('table tr.rank td:nth-child('+idx+')').css( {'color':'white' } );*/
        }
    );

});
