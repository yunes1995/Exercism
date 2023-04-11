//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (givenArray, number) => {
  const madeArray = [];
  const arrayForSum = [];
  for(let i = number - 1; i >= 1; i--) {
    madeArray.push(i);
  }
  givenArray.forEach(element => {
    madeArray.forEach(e => {
      if (e % element === 0) {
        if (!arrayForSum.includes(e))
          arrayForSum.push(e);
      }
    })
  });
  let sums = 0;
  arrayForSum.forEach(elem => {
    sums += elem;
  })
  return sums;
};
