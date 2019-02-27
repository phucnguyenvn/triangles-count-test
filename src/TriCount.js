class TriCount {
    /**
     * We are interested in triangles that have integer length sides, all of which are between minLength and maxLength, inclusive.
     * How many such triangles are there? Two triangles differ if they have a different collection of side lengths, ignoring order.
     * Triangles with side lengths {2,3,4} and {4,3,5} differ, but {2,3,4} and {4,2,3} donot.
     * We are only interested in proper triangles;
     * the sum of the two smallest sides of a proper triangle must be strictly greater than the length of the biggest side.
     * Create a class TriCount that contains a method count that is given ints minLength and maxLength
     * and returns the number of different proper triangles whose sides all have lengths between minLength and maxLength inclusive.
     * If there are more than 1,000,000,000 return -­1.
     * 
     * 
     * @param int minLength
     * @param int maxLength
     * @return int triangles or -1: too many triangles (more than 1000000000)
    */
    count(minLength, maxLength){

      // checks if the parameters given are respects the different constaints
      if(minLength > maxLength){
        throw new Error("maxLength must be greater than minLength");
      }else if(minLength < 1 || 1000000 < minLength){
        throw new Error("minLength must be between 1 and 1,000,000");
      }else if(maxLength < minLength || 1000000 < maxLength){
        throw new Error("maxLength must be between minLength and 1,000,000");
      }
  
      let total = 0;

      /**
       * Define triangle ABC contain three sides: ab, bc, ca 
       * Loop thought three sides, counting the total number of triangles
       * The loop will represent each triangle by its side lengths sorted in ascending order, example:
       *    minLength = 8
       *    maxLength = 9
       *    result: 888, 889, 899, 999 => return 4
       * 
      */
      for(let ab = minLength; ab < maxLength + 1; ab++){
        // set bc = ab on first loop to prevent count some triangles more than once
        for(let bc = ab; bc < maxLength + 1; bc++){
          // set ca = bc on first loop to prevent count some triangles more than once
          // skip the loop if ca is greater than ab + bc
          for(let ca = bc; ca < Math.min(maxLength + 1, ab + bc); ca++){
            total++;
            // If there are more than 1,000,000,000 triangles, return -­1
            if (total > 1000000000) return -1;
          }
        }
      }
        
      return total;
    }
  }
  
  module.exports = TriCount;