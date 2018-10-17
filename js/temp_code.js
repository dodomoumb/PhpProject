/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function valider() {
    var tObligatoires = $(".obligatoire");
       //  var labels = $("label");
    var ok = true;
    var lsMessage = "";

//console.log("***********" + tObligatoires.length );
    for (var i = 0; i < tObligatoires.length -1; i++) {
        var info = tObligatoires[i];
        
            //    var info_label = labels[i]; // pour capturer le bon etiquette  
        
        if ($(info).val() === "") {
            ok = false;
            
            //lsMessage += $(info).attr("placeholder") + ", ";
             //lsMessage += $(info).val() + ", ";
             
            //  lsMessage += $(info_label).html() + ", ";
        }
    }
   // lsMessage = lsMessage.substring(0, lsMessage.length - 2) + " sont obligatoires";
       $("#lblMessage").html(" Toutes les " + tObligatoires.length + "  données sont obligatoires"); 

    if (!ok) {
        $("#lblMessage").html(lsMessage);
    } else {
        $("#lblMessage").html("Jusque là ...");
    }
} /// valider
