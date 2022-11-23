const transpose = function (matrix) {
    let array = [];
    for(let i = 0; i < matrix[0].length; i++){
      array.push([])
    }
    for (let row = 0; row < matrix.length; row++){
      for (let collumn = 0; collumn < matrix[row].length; collumn++){
        array[collumn][row] = matrix[row][collumn] 
      }
    }
    return array;
  };

const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters)
    const horizontalJoin2 = verticalJoin.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
            }
            for (l of horizontalJoin2) {
                for (l of horizontalJoin) {
                    if (l.includes(word)) return true
                } 
                return false
            }   
        }

   
}

module.exports = wordSearch