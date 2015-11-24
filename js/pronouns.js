jQuery(function() {

    $('tr.cells td').hover(
        function() {
            $( this ).css( {'color':'red' } );

          /*  var idx = ($(this).index())+1;
            $('table tr.rank td:nth-child('+idx+')').css( {'color':'orange' } );*/

        }, function() {
            $( this ).css( {'color':'white' } );

           /* var idx = ($(this).index())+1;
            $('table tr.rank td:nth-child('+idx+')').css( {'color':'white' } );*/
        }
    );

});
