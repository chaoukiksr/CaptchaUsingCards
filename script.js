//function to generate a random number between 1 and 8
const generateRandomTable = (count,max) =>{
   let numbers = []
   while(numbers.length < count/2){
      let number = Math.ceil(Math.random() * (max/2))
      if(!numbers.includes(number) ){
         numbers.push(number)
      }
   }
   while(numbers.length >= count/2 && numbers.length < count){
      let number = Math.ceil(Math.random() * max)
      if(!numbers.includes(number) && number> max/2 ){
         numbers.push(number)
      }
   }
   return numbers
}

let cartesNumbers = generateRandomTable(4, 8)
let cartesTypes = generateRandomTable(4, 4)
let cartesShape = cartesTypes.map(type=>{
   switch (type){
      case 1 : return `Moon` 
      break;
      case 2 : return `Wind` 
      break;
      case 3 : return `Snow` 
      break;
      case 4 : return `Nuages` 
      break;
   }
})
let fullImgPath = cartesNumbers.map((num,index)=>{
   let img = `${num}.svg`
   let shape = cartesShape[index]
   return `/${shape}/Nouveau dossier/${img}`
}
)
console.log(fullImgPath);
let givenCards = document.getElementById('givenCards')

fullImgPath.forEach(path => givenCards.innerHTML += ` <div class="col-6 col-sm-3 mb-4"><img class="img-fluid shadow rounded"
                  src="assests${path}" alt="Card"></div>
            `)
