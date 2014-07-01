
                    
   function affichage(categrorie){
     if (categorie.c_showInMenu==1)
     $('#'+new_div(id_div+1).id).append(categorie.name);
   }

    function new_div(id_div)
    {
     htmldiv = document.createElement("div");
     htmldiv.id = id_div;
     htmldiv.className = 'affichage_categorie';
     htmldivinnerHTML = document.getElementById('zonetxt').value;
     document.getElementById("cadre").appendChild(maDiv);
    }
