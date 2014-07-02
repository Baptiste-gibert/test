$(document).ready(function() {
    $.ajax({
        url: "http://www.quiksilver.fr/s/QS-FR/dw/shop/v13_1/categories/root?levels=2&client_id=a76723ac-440f-4814-bd34-d492a140d78e",
        dataType: "text",
        success: function(data) {
            var json = $.parseJSON( data );

            var tbl_row = "";
            $.each( json, function() {

                if ( json.c_showInMenu === 0 ) {
                tbl_row += "<td>"+json.categories;
                    if ( json.c_showInMenu === 1 ) {
                        tbl_row += "<td>"+json.categories+"</td>";
                    }
                    else tbl_row+="</td>";
                }
                $.each(this, function(k , v) {
                    tbl_body += "<tr>"+tbl_row+"</tr>";
                })

            });

            $("#table").html(tbl_body);
        });
    });
});

// var url: "http://www.quiksilver.fr/s/QS-FR/dw/shop/v13_1/categories/root?levels=2&client_id=a76723ac-440f-4814-bd34-d492a140d78e",

// $.getJSON(url , function(data) {
//     var tbl_body = "";
//     $.each(data, function() {
//         var tbl_row = "";
//         $.each(this, function(k , v) {
//             tbl_row += "<td>"+v+"</td>";
//         })
//         tbl_body += "<tr>"+tbl_row+"</tr>";                 
//     })
//     $("#target_table_id tbody").html(tbl_body);
// });