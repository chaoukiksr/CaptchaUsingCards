import applyCardStyling from './applyCardStyling.mjs';
import chekcUserResponse from './chekcUserResponse.mjs';
let processOperation = (userAnswer, img) => {
   applyCardStyling( chekcUserResponse(userAnswer), img)
}   
export default processOperation;