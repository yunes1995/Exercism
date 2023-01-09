//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (number) => {
  let pascal = [];
  for (let i = 0; i < number; i++){
    let pascalRow = [];
    for (let j = 0; j < i + 1; j++){
      if (j === 0 || j === i){
        pascalRow.push(1);
      } else {
        pascalRow.push(
          pascal[i - 1][j - 1] + pascal[i - 1][j]
        );
      }
    }
    pascal.push(pascalRow);
  }
  return pascal;
};
