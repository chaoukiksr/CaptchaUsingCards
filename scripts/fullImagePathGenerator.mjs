import { cartesShape } from "../script.js"
function fullImgPathGenerator(arr) {
   return arr.map((num, index) => {
      let img = `${num}.svg`
      if (num === 0) {
         img = `Empty.svg`
      }
      let shape = cartesShape[index]
      return `/${shape}/${img}`
   }
   )
}
export default fullImgPathGenerator;