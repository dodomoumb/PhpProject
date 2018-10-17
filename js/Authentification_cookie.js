/* 
 * Authentification.js
 * Authentification avec AJAX et PHP
 * Mot de passe visible : text <--> password
 * Mot de passe oublié : envoi d'un mail avec PHP
 * Se souvenir de moi : cookie
 */

/**
 * 
 * @returns {undefined}
 * 
 */

// check cookie
/* var  cookie_Email; 
   
 // function afficherCookie()   // à tester
    function ()   // à tester
{    
    console.log(document.cookie);
    if (($("#email").val()==="")&&(cookie_Email !=="")){
        $("#email").attr("value", cookie_Email);
    }
     
     
  };*/
function init() {
   
    // Nettoyage le label
    $("#lblMessage1").html("");

    console.log("init");
    $("#btValider").on("click", controler);
    $("#btValider").on("click", valider);

    $("#chkMdpVisible").on("click", mdpVisible);
    $("#motDePasseOublie").on("click", mdpOublie);


} /// init

/**
 * 
 * @returns {undefined}
 */
function controler() {
    // Nettoyage
    $("#lblMessage").html("");

    // Recuperation des valeurs saisies
    let lsEmail = $("#email").val();
    let lsMDP = $("#mdp").val();

    // Tests sur les valeurs
    if (lsEmail === "" || lsMDP === "") {
        $("#lblMessage").html("Vides !!!");
    } else {
        $("#lblMessage").html("OK");
        valider(); // appeler la fonction plustot c'est quand on fait se souvenir de moi

    }
} /// controler



/**
 * 
 * @return {undefined}
 */
function mdpVisible() {
    console.log("");
    
    if ($("#chkMdpVisible").prop("checked")) {
        $("#mdp").attr("type", "text");
    } else {
        $("#mdp").attr("type", "password");
    }
} /// mdpVisible

/**
 * 
 * @return {undefined}
 */
function mdpOublie() {
    console.clear();
    console.log("mdpOublie");

} /// mdpOublie


// ----------------------------------------  ok
function creerCookie(asNomCookie, asValeur) {
    var dExpires = new Date();

    dExpires.setYear(2025);
    // document.cookie = asNomCookie + "=" + asValeur + "; expires=" + dExpires.toGMTString();
    $(document).cookie = asNomCookie + "=" + asValeur + "; expires=" + dExpires.toGMTString();

}
// ---------------
function valider() {

   
    // je garde le mail en cookie
    var sEmail = $("#email").value;
    // var sPrenom = document.getElementById("it_prenom").value;

    var lblMessage = $("#lblMessage1");

    if (navigator.cookieEnabled && ($("#chkSeSouvenir").prop("checked"))) {
        creerCookie("cookEmail", sEmail);
        
        $("#lblMessage1").html("<br />Le cookie est enregistré");
        //  lblResultat.innerHTML = "<br />Le cookie est enregistré";
    } else {
        // lblResultat.innerHTML = "<br />Vous refusez les cookies";
        $("#lblMessage1").html("<br />Vous refusez les cookies");
    }
   console.log(document.cookie);


}
// $("btCreerCookie").on('click' , valider);

function getCookie()
{
    /**
     * 1) je crèe la liste de la valeur cookie 
     * 2)  je récupère la valeur(1)
     * 3) je met dans une variable globale
     * 4) en haut avant init, jes'il ya cookie, je met sur imput mail
   */
  
  ///1) je crèe la liste de la valeur cookie 
    var list_cookie_int ="";
     var list_cookie = document.cookie;
     list_cookie = list_cookie.split("; ");
     
    for (var i = 0; i < list_cookie.length; i++) {
        list_cookie_int [i]=  list_cookie[i].split("=")[0];
        list_cookie_int [i+1]= list_cookie[i].split("=")[1];
        
    }
      cookie_Email = list_cookie_int [1]; //  je met dans une variable globale
     
  } 
 
/*
 * MAIN
 */
$(document).ready(init);






//////////////////**********************

 