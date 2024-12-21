function generateCartesShape(cartesTypes, cartesShapeObject) {
  return cartesTypes.map(type => {
      return cartesShapeObject[type]
   })   

}
export default generateCartesShape;