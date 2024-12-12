//function to generate a random number between 1 and 8
// const generateRandomTable = (count,max) =>{
//    let numbers = []
//    while(numbers.length < count/2){
//       let number = Math.ceil(Math.random() * (max/2))
//       if(!numbers.includes(number) ){
//          numbers.push(number)
//       }
//    }
//    while(numbers.length >= count/2 && numbers.length < count){
//       let number = Math.ceil(Math.random() * max)
//       if(!numbers.includes(number) && number> max/2 ){
//          numbers.push(number)
//       }
//    }
//    return numbers
// }

// function to generate a random tables on numbers between 0 and 8
// Function to generate a random table of unique numbers between 0 and max
function generateRandomTable(count, max, allowZero = true, mustContaineOneZero = false) {
   // Validate inputs
   if (count < 0 || max < 0) {
      throw new Error('Count and max must be non-negative numbers');
   }

   if (count > max + 1) {
      throw new Error('Cannot generate more unique numbers than available');
   }

   // Create a set to ensure unique numbers
   const randomTable = new Set();

   while (randomTable.size < count) {
      // Generate a random number
      const number = Math.floor(Math.random() * (max + 1));

      // Skip zero if not allowed
      if (!allowZero && number === 0) {
         continue;
      }

      // Add to set (automatically handles duplicates)
      randomTable.add(number);
   }

   if (mustContaineOneZero) {
      let newAr = Array.from(randomTable)
      if (!randomTable.has(0)) {
         let randomIndex = Math.floor(Math.random() * Array.from(randomTable).length);
         console.log(randomIndex)
         newAr[randomIndex] = 0
      }
      return newAr
   } else {
      return Array.from(randomTable);
   }
   // Convert set back to array

}

// Example usage

const cartesNumbers = generateRandomTable(4, 8, true, true);
console.log(cartesNumbers)
const cartesTypes = generateRandomTable(4, 4, false);
console.log(cartesTypes)

let cartesShape = cartesTypes.map(type => {
   switch (type) {
      case 1: return `Moon`
         break;
      case 2: return `Wind`
         break;
      case 3: return `Snow`
         break;
      case 4: return `Nuages`
         break;
   }
})
// console.log(cartesShape)
let fullImgPath = cartesNumbers.map((num, index) => {
   let img = `${num}.svg`
   if (num === 0) {
      img = `Empty.svg`
   }
   let shape = cartesShape[index]
   return `/${shape}/${img}`
}
)
let fullImgPathOfPossibleCards = cartesTypes.map((num, index) => {
   let img = `${num}.svg`
   let shape = cartesShape[index]
   if (num === 0) {
      img = `Empty.svg`
   }
   return `/${shape}/${img}`
}
)
// console.log(fullImgPath);
let givenCards = document.getElementById('givenCards')

fullImgPath.forEach(path => givenCards.innerHTML += ` <div class="col-6 col-sm-3 mb-4"><img class="img-fluid shadow rounded"
                  src="assests${path}" alt="Card"></div>
            `)
let possibleCards = document.getElementById('possibleCards')
fullImgPathOfPossibleCards.forEach(path => possibleCards.innerHTML += ` <div class="col-6 col-sm-3 mb-4 possibleCard"><img class="img-fluid shadow rounded"
                  src="assests${path}" alt="Card"></div>
            `)
// console.log(fullImgPathOfPossibleCards)
// let possibleCardsSelec = possibleCards.querySelectorAll('.possibleCard')
// // console.log(possibleCardsSelec)
// possibleCardsSelec.forEach(card=>card.addEventListener('click',(e)=>{
//    console.log(e.target)
//    let img = 
//    card.firstChild().classList.add('border-5', 'border-success')
// }))