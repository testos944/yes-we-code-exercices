/* Bloc de code contenant des constantes qui définissent les paramètres du script.
   Les constantes ne peuvent pas changer au cours du programme.
 */
const LIMITE_MAXIMUM_NOMBRE_A_DEVINER = 100;
const NOMBRE_GENERE_PAR_ORDINATEUR = genereNombreAleatoireEntreZeroEtMax(LIMITE_MAXIMUM_NOMBRE_A_DEVINER);

// compare la saisie de l'humain avec le nombre que l'ordinateur a généré.
// Cette fonction est appelée lorsque l'utilisateur clique sur le bouton "Envoyer" de la page HTML.
function comparer() {
    // on nettoie l'historique si jamais l'utilisateur avait déjà lancé un jeu sans recharger son navigateur
    nettoyerLhistorique();
    let numeroEssai = 1;

    // on récupère le nombre saisi dans la page html
    const nombreADevinerParLordinateur = recupereNombreSaisiParLHumain();

    let essaiDeLordinateur = genereNombreAleatoireEntreZeroEtMax(LIMITE_MAXIMUM_NOMBRE_A_DEVINER);

    // Boucle tant que. Continue tant que l'ordinateur n'a pas trouvé le nombre à deviner.
    while (!estCeQueLordinateurATrouve(essaiDeLordinateur, nombreADevinerParLordinateur)) {

        // on affiche l'historique sur l'écran de l'utilisateur pour faire joli.
        afficherHistorique(numeroEssai, essaiDeLordinateur, "Pas réussi!");


        // a toi de jouer ! tu peux remplir le code de cette fonction avec tes propres idées.
        // tu n'as normalement pas besoin de changer autre chose que ce qui est contenu entre les lignes avec les étoiles!
        // ******************************************** //

        // La solution actuelle fonctionne, mais elle n'est pas très optimisée : on trouve de manière aléatoire le résultat. Ca prend du temps. 
        // On appelle ce genre de solutions "Force Brute" parce qu'il n'y a pas d'intelligence dedans. 
        // N'hésite pas à l'enlever et à mettre ta solution à toi !

        essaiDeLordinateur = genereNombreAleatoireEntreZeroEtMax(LIMITE_MAXIMUM_NOMBRE_A_DEVINER);





        
        // ******************************************** //

        // on "incrémente" le numéro d'essai de l'ordinateur. C'est juste pour savoir en combien de coups l'ordinateur a trouvé ton nombre !
        numeroEssai = numeroEssai + 1;
    }

    afficherHistorique(numeroEssai, essaiDeLordinateur, "Trouvé!");
}

// C'est notre fonction "condition d'arrêt" de la boucle Tant Que. On s'arrête dès que l'ordinateur trouve le bon nombre.
function estCeQueLordinateurATrouve(essaiDeLordinateur, nombreADevinerParLordinateur) {
    return essaiDeLordinateur == nombreADevinerParLordinateur;
}