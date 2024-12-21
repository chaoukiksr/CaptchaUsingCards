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
export default generateRandomTable;