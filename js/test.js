$(document).ready(function() {
    $.ajax({
        type: "POST",
        url: "http://www.quiksilver.fr/s/QS-FR/dw/shop/v13_1/categories/root?levels=2&client_id=a76723ac-440f-4814-bd34-d492a140d78e",
        dataType: "jsonp",
        success: function(data) {
            // console.log(data);
            var tbl = '<div class="row">';
            var j = 1;
            $.each(data.categories, function(cat) {
                if ( data.c_showInMenu === 1 ) {
                    for ( var i=0, len=data.categories.length; i<len; i++) {
                        // console.log(data.categories[i].id);
                        tbl=tbl+'<div class="col-lg-3 visible-xs-12"><div class="col-lg-12 visible-xs-12 parent-cat">'+data.categories[i].id +'</div></div>';

                        if ( j % 4 === 0 ) {
                            tbl+='</div><div class="row">';
                            console.log(i);
                        }
                        j++;
                    }
                }
            });
            tbl+='</div>';
            $(".container-fluid").append(tbl);
        }
    });
});