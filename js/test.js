
                    
   function affichage(categrorie){
     if (categorie.c_showInMenu==1)
     $(#new_div().id).append(categorie.name);
   }

    function new_div()
    {
     htmldiv = document.createElement("div");
     htmldiv.id = 'id_de_la_div';
     htmldiv.className = 'nouvelle';
     htmldivinnerHTML = document.getElementById('zonetxt').value;
     document.getElementById("cadre").appendChild(maDiv);
    }
