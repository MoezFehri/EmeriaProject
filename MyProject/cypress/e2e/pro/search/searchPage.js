
let searchdata;
before( ()=>{
    cy.fixture("JDD.json").then((data)=>{
        searchdata=data;
    })
})

class SearchPage {
    
    //visit welcome page
    static visitWelcomePage() {
        cy.visit(searchdata.URL)
    }

    //put project type
    static selectProject(){
        cy.get('#projectToggle').click()
        cy.contains('label', searchdata.project).click()
    }

    //put propoerty type
    static selectProperty() {
        cy.get('#propertyToggle').click()
        cy.contains('label', searchdata.property).click()
    }

    //put price
    static selectPrice() {
        cy.get('#price').type(searchdata.price)
    }

    //put Departement
    static selectDepartement(){
        cy.get('.city:has(label:contains(" Ville, département, région "))').find('input').type(searchdata.ville)
        cy.get ("li[role='option']").each(function ($ele) {
        cy.log($ele.text())
        if ($ele.text() === searchdata.ville_cp){
            cy.wrap($ele).click()
        }
        else {
            cy.log($ele.text())
        }
        })
    }

    //Click on search button
    static clickSearchButton(){
        cy.get('.p-button').contains(/^ Rechercher $/).click()
    }

    //Check result page
    //Vérifier le header pour s'assurer qu'on est sur la page des résultats
    static checkResultPage(){
        cy.get("app-search-result-header", { timeout: 10000 }).should('be.visible');
        //afficher le nbre d annonces dans le log
        cy.get("body").then($body => {
            const a = cy.log($body.find("app-annonce-card").length);
        });
        //Vérifier que les résultats s'affichent sur la page
        cy.get('.foncia-card-title-small').should('be.visible')
    }

    //check card info
    static checkCardInfo(){
        //verifier titre de l annonce contien le mot 'à louer'
        cy.contains('.foncia-card-title-small', searchdata.projet_verif)
        //verifier la ville de l'annonce
        cy.contains('.foncia-card-place', searchdata.ville_verif)
    }
}

export default SearchPage