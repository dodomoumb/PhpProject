<?php

// Fonction sans paramètre

/**
 *
 * @return type
 */
function dateHeure() {
    return "Nous sommes le " . Date('d/m/Y') . " et il est " . Date('H:i:s');
}

/*
 * MAIN
 */
$r = dateHeure();
echo $r;
?>