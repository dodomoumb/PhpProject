/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
        // ------------
        function init() {
            $("#btTexte").click(animateTexte);
            $("#btTexteCouleur").click(animateTexteCouleur);
            $("#btPhoto").click(animatePhoto);
            $("#btEnchainement").click(enchainement);
        }
        // --------------------
        function animateTexte() {
            $("#texte").animate({top:-200}, 1000);
        }
        // --------------------
        function animateTexteCouleur() {
            $("#texteCouleur").animate({left:400, width:"30%", height:"30px"}, 2000);
        }
        // --------------------
        function animatePhoto() {
            $("#photo").animate({left:100, opacity:0.5}, 1000);
        }
        // --------------------
        function enchainement() {
            $("#photo").animate({left:100, opacity:0.5}, 3000, "swing", animateTexte);
        }

        // --- Demarrage facon JQuery
        $(document).ready(init);

