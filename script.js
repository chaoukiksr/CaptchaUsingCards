import generateRandomTable from './scripts/generateRandomTable.mjs'
import rendreCards from './scripts/rendreCards.mjs'
import cartesShapeObject from './scripts/data.mjs'
import setClickEvenetHandler from './scripts/setClickEvenetHandler.mjs'
import generateCartesShape from './scripts/generateCartesShape.mjs'
import fullImgPathGenerator from './scripts/fullImgPathGenerator.mjs'
import fullImgPathOfPossibleCardsGenerator from './scripts/fullImgPathOfPossibleCardsGenerator.mjs'
const possibleCardsSelec = possibleCards.querySelectorAll('.possibleCard')
const givenCards = document.getElementById('givenCards')


const cartesNumbers = generateRandomTable(4, 8, true, true);
const cartesTypes = generateRandomTable(4, 4, false);

let cartesShape = generateCartesShape(cartesTypes, cartesShapeObject)

let fullImgPath = fullImgPathGenerator(cartesNumbers)
let fullImgPathOfPossibleCards = fullImgPathOfPossibleCardsGenerator(cartesTypes)


rendreCards(fullImgPath,givenCards)

rendreCards(fullImgPathOfPossibleCards,possibleCards,{"class":'p-2', "data-bs-toggle": "modal", "data-bs-target": "#exampleModal"})

setClickEvenetHandler(possibleCardsSelec)
export { cartesShape, cartesNumbers }