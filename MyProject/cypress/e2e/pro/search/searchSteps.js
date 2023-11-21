import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchPage from './searchPage'

Given('I open welcome page', () => {
    SearchPage.visitWelcomePage()
})

When('I put a department',() => {
    SearchPage.selectProject()
    SearchPage.selectProperty()
    SearchPage.selectPrice()
    SearchPage.selectDepartement()
    SearchPage.clickSearchButton()

})

Then('I should see results',() => {

    //Vérifier le header pour s'assurer qu'on est sur la page des résultats
    SearchPage.checkResultPage()

    //vérifier les informations de chaque annonce
    SearchPage.checkCardInfo()

})


