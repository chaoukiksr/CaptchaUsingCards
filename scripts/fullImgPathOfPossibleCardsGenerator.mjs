import {cartesShape} from '../script'
function fullImgPathOfPossibleCardsGenerator(arr) {
   return arr.map((num, index) => {
      let img = `${num}.svg`
      let shape = cartesShape[num-1]
      if (num === 0) {
         img = `Empty.svg`
      }   
      return `/${shape}/${img}`
   }   
   )
   
}
export default fullImgPathOfPossibleCardsGenerator