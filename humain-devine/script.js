/* Bloc de code contenant des constantes qui définissent les paramètres du script.
   Les constantes ne peuvent pas changer au cours du programme.
 */
const NOMBRE_ESSAIS_MAXIMUM = 10;
const LIMITE_MAXIMUM_NOMBRE_A_DEVINER = 100;
const NOMBRE_GENERE_PAR_ORDINATEUR = genereNombreAleatoireEntreZeroEtMax(LIMITE_MAXIMUM_NOMBRE_A_DEVINER);

// Ici, ce sont les variables. Les variables peuvent changer au cours du programme.
let nombreEssaisRestants = NOMBRE_ESSAIS_MAXIMUM;

// compare la saisie de l'humain avec le nombre que l'ordinateur a généré.
// Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "Envoyer" de la page HTML.
function comparer() {
    // on récupère le nombre saisi dans la page html
    const nombreSaisiParLHumain = recupereNombreSaisiParLHumain();

    // a toi de jouer ! tu peux remplir le code de cette fonction avec tes propres idées.
    // tu n'as normalement pas besoin de changer autre chose que ce qui est contenu entre les lignes avec les étoiles!
    // ******************************************** //









    let reussiOuPas = "Remplis moi avec quelquechose d'utile!";
    // ******************************************** //

    // on met à jour le nombre d'essai restant
    metAJourNombreDessaiRestant(nombreEssaisRestants);

    // on affiche l'historique sur l'écran de l'utilisateur pour faire joli.
    afficherHistorique(NOMBRE_ESSAIS_MAXIMUM - nombreEssaisRestants, nombreSaisiParLHumain, reussiOuPas);
}

