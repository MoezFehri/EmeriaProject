# EmeriaProject
Bonjour, 
Dans ce mini-projet, j’ai effectué une recherche sur les appartements à louer à Paris 75.
Ensuite j’ai vérifié que la page des résultats a été bien affiché en vérifiant l’existence du bloc de l’entête, puis j’ai vérifié que l’expression « à louer » est bien affichée dans le titre de chaque annonce (comme c’est un mini projet, j’ai fait la vérification uniquement sur la première page).
Après, j’ai vérifié la ville de chaque annonce. 
J’ai utilisé le fichier JDD.json pour les jeux de données.
Structure du projet :
-	Cypress\MyProject\cypress\e2e\pro\search.feature : Feature file
-	Cypress\MyProject\cypress\e2e\pro\search\searchPage.js : classes file 
-	Cypress\MyProject\cypress\e2e\pro\search\searchSetps.js : Steps file
-	Cypress\MyProject\reports\cucumber-htmlreport.html\index.html : HTML Report
-	Cypress\MyProject\reports\cucumber-htmlreport.html\features : HTML history reports folder
Pour la génération du rapport HTML, j’ai utilisé cypress-cucumber-preprocessor.
Vous pouvez lancer le test en exécutant le fichier run.sh, ensuite vous exécutez le fichier generateReport.sh pour la génération du rapport HTML (commande : ./runTest.sh sur GIT Bash pour les machines Windows)

Merci,
