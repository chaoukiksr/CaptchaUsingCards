import processOperation from './processOperation.mjs'
let setClickEvenetHandler = (arg) => {
   arg.forEach(possibleCard => possibleCard.addEventListener('click', (e) => {
      let userChoosencard = e.target
      let srcString = userChoosencard.src

      let userAnswer
      if (srcString.includes('Snow')) {
         userAnswer = 'Snow'
      } else if (srcString.includes('Wind')) {
         userAnswer = 'Wind'

      } else if (srcString.includes('Nuages')) {
         userAnswer = 'Nuages'

      } else {
         userAnswer = 'Moon'
      }
      processOperation(userAnswer, userChoosencard)

   }))
}
export  default setClickEvenetHandler;