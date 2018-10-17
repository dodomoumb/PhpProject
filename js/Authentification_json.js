/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function init() {

    // Nettoyage le label
 $("#lblMessage_authen").html("");

    $("#btValider").on("click", authentifier);

} /// init


/// faire la version d'authentification avec php

function authentifier() {


    let email = $("#email").val();
    let mdp = $("#mdp").val();


    /// console.log(lsMDP + "----- " + lsEmail);

    // connection au serveur  . dans notre cas juste au ficher (json)
    var jqXHR = $.get("../json/user.json", "json");


    // manipulation de la reponse de requette 

    jqXHR.done(function (data) { // capture du data


        // parcour du data 

        // ici il le fait globalement
        // if ( (in_array(email, data)) && (in_array(mdp, data)) ){}
       
        let $i = 0;
        let $test = true;
        
        while ( $i <= data.length - 1 && $test) {

          console.log(" mail json " + data[$i].mail);
          console.log(" psw json " + data[$i].psw);
           console.log(" psw html " + mdp);
           console.log(" mail html " + email);
            
           if (data[$i].mail === $("#email").val() && data[$i].psw === $("#mdp").val())
           //    if ((data[i].mail == "a@a") && (data[i].psw == "a"))
            {
                $("#lblMessage_authen").html("you are a valide user");
               $test = false;

            } else {
                $("#lblMessage_authen").html("you are a invalide user");
            }
            $i++;
        }

   
    });
    jqXHR.fail(function (xhr, statut, erreur) {
        console.log("Erreur AJAX : " + xhr.status + "-" + xhr.statusText + " : " + statut);
    });

}
/*
 * MAIN
 */
$(document).ready(init);

