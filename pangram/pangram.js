//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const text = 'abcdefghijklmnopqrstuvwxyz".';
  const array = text.split("");
  sentence = sentence.toLowerCase();
  for (let i = 0 ; i < 26 ; i++) {
    if (!sentence.includes(array[i])){
      return false;
    }
  }
  return true;
};
