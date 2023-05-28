//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (letters) => {
  const result = {};
  for (const [key, value] of Object.entries(letters)) {
    value.forEach(val => {
      let formattedLetters = val.toLowerCase();
      result[`${formattedLetters}`] = Number(key);
    })
  }
  return result;
};
