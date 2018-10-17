/* 
 ControleSaisiesPartiel.js
 */


/**
 * 
 * @returns {undefined}
 */
function init() {
    // Efface le contenu du <label>
    $("#lblMessage").html("");
    // Associe le clic sur le bouton btValider à une fonction anonyme
    //  qui contient des instructions de récupération, de concaténation et d'affectation
    $("#btValider").on("click", valider);

} /// init


/**
 * 
 * @returns {undefined}
 */
function valider() {
    var tObligatoires = $(".obligatoire");
     var ok = true;
     var i = 0;

/// validation des vides globales
     while (i <= tObligatoires.length - 1 && ok) {
        var info = tObligatoires[i];
        if ($(info).val() !== "") {  i++;}
        else {
            ok = false;
            $("#lblMessage").html(" Toutes les " + tObligatoires.length + "  sont obligatoires");
        }
   }
   
 // validation champ par champ
         if ($("#dateNaissance").val() !== "") 
         { 
             console.log($("#dateNaissance").val());
            valid = isNum($("#dateNaissance").val());
             
         }





} /// valider

// il faut spliter chaque datede naissance
function isNum(st) {
    let ok = true;
    if (st.in_array("/")){ st = st.split("/");}
    if (st.in_array("-")){ st = st.split("-");}
   
    
    for (let i = 0; i < st.length; i++) {
        if (st[i] < '0' || st[i] > '9') {
            ok = false;
        }
    }
    return ok;
} /// isNum

/**
 * 
 * @param st 
 */
function isZip(st) {
    let ok = true;
    if (st.length === 8) {
        if (!isNum(st)) {
            ok = false;
        }
    }
    else {
        ok = false;
    }
    return ok;
} /// isZIp

// Exécution de la fonction init() à la fin du chargement du dco HTMl
$(document).ready(init);