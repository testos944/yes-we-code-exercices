
/* Des petites fonctions utiles */

// Retourne un nombre aléatoire compris entre 0 et le nombre [max] passé en paramètre.
function genereNombreAleatoireEntreZeroEtMax(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// Retourne le nombre affiché sur la page web du navigateur.
function recupereNombreSaisiParLHumain() {
    return document.getElementById("number-input").value;
}

// petite fonction qui te permet d'afficher l'essai sur l'écran de l'utilisateur
function afficherHistorique(numeroEssai, nombreEssai, reussiOuPas) {
    const container = document.getElementById("history");
    const ligne = document.createElement("tr");
    ligne.appendChild(creerColonneAvecTexte(numeroEssai));
    ligne.appendChild(creerColonneAvecTexte(nombreEssai));
    ligne.appendChild(creerColonneAvecTexte(reussiOuPas));
    container.appendChild(ligne);
}

function creerColonneAvecTexte(text) {
    const column = document.createElement("td");
    const textNode = document.createTextNode(text);
    column.appendChild(textNode);
    return column;
}

// nettoie notre historique
function nettoyerLhistorique() {
    const container = document.getElementById("history");
    container.innerHTML = "";
}