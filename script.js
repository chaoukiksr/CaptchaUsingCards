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
let cartesShapeObject = {
   1:'Moon',
   2:'Wind',
   3:'Snow',
   4:'Nuages'
}
let cartesShape = cartesTypes.map(type => {
   return cartesShapeObject[type]
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
   let shape = cartesShape[num-1]
   if (num === 0) {
      img = `Empty.svg`
   }
   return `/${shape}/${img}`
}
)
// console.log(fullImgPath);
let givenCards = document.getElementById('givenCards')

// fullImgPath.forEach(path => givenCards.innerHTML += ` <div class="col-6 col-sm-3 mb-4"><img class="img-fluid shadow rounded"
//                   src="assests${path}" alt="Card"></div>
//             `)
// let possibleCards = document.getElementById('possibleCards')

let rendreCards = (arr,container) =>{
   arr.forEach(path => container.innerHTML += ` <div class="col-6 col-sm-3 mb-4 possibleCard"><img class="img-fluid shadow rounded "
                     src="assests${path}" alt="Card"></div>
               `)

}
// rendreCards(fullImgPathOfPossibleCards)
rendreCards(fullImgPath,givenCards)
rendreCards(fullImgPathOfPossibleCards,possibleCards)
// console.log(fullImgPathOfPossibleCards)
let possibleCardsSelec = possibleCards.querySelectorAll('.possibleCard')
// console.log(possibleCardsSelec)
possibleCardsSelec.forEach(card=>{
   let img = card.firstChild
   img.classList.add('p-2')
   img.setAttribute('data-bs-toggle', "modal")
   img.setAttribute('data-bs-target', "#exampleModal")
}
)
possibleCardsSelec.forEach(possibleCard=>possibleCard.addEventListener('click',(e)=>{
   console.log(e.target.src)
   let userChoosencard = e.target
   let srcString = userChoosencard.src

   // applyCardStyling(e.target)
   let userAnswer
   if(srcString.includes('Snow')){
      userAnswer = 'Snow'
   } else if (srcString.includes('Wind')){
      userAnswer = 'Wind'
      
   } else if (srcString.includes('Nuages')) {
      userAnswer = 'Nuages'
      
   } else{
      userAnswer = 'Moon'
   }
   processOperation(userAnswer,userChoosencard)
   
}))
//function to check if the img correspend
let setAnswerCart = ()=>{
return   cartesShape[cartesNumbers.indexOf(0)]
} 
// let userAnswer = 'Moon'
let chekcUserResponse = (userAnswer) =>{
  return userAnswer == setAnswerCart() ? true : false
}
// or
// const myModalAlternative = new bootstrap.Modal('#myModal', options)
let sendResponse = (result,img) =>{
   
   if(result){
      console.log('passed')
      // location.href='passed.com'
   }else{
      console.log('failed')
      // location.reload(true)
   }
   
   applyCardStyling(result,img)
}
let processOperation = (userAnswer,img) =>{
      sendResponse(chekcUserResponse(userAnswer),img)
}


const setModalProps = ({ type, header, body, action }) => {
   const modalTitle = document.querySelector('.modal-title');
   const modalBody = document.querySelector('.modal-body');
   // const modalActionButton = document.querySelector('#modalActionButton');

   modalTitle.textContent = header;
   modalTitle.classList.add(`text-${type}`);
   modalBody.textContent = body;
   // modalActionButton.classList.add(`text-${type}`);
   // modalActionButton.textContent = action;
};


const applyCardStyling = (result, card) => {
   if (result) {
      card.classList.add('border', 'border-5', 'border-success')
      setModalProps({
         type: 'success',
         header: 'Captcha is Passed successfully',
         body: `human verification is passed successfully`,
         // action: 'close',
      });
         (() => {
            let timeleft = 3
            const modalBody = document.querySelector('.modal-body')
            const timerInterval = setInterval(() => {
               modalBody.textContent = `human verification is passed successfull
   you will be redirected to the website in ${timeleft} seconds`
               timeleft--
               if (timeleft < 0) {
                  clearInterval(timerInterval)
                  window.location.href = 'passed.com'
               }
            }, 1000)
         })()
   } else {
      card.classList.add('border', 'border-5', 'border-danger')
      setModalProps({
         type: 'danger',
         header: 'Failed Captcha',
         body: 'You choosed the wrong card, you can try again after the reload',
         // action: 'try again'
      });
      // (() => {
      //    setTimeout(() => {
      //       location.reload(true);
      //    }, 3000); // 2 second delay
      // })();
   }

}