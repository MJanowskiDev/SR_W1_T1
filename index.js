const checkIfLeap = (year) => {
  const divisibleBy4 = !(year % 4);
  const divisibleBy100 = !(year % 100);
  const divisibleBy400 = !(year % 400);
  return divisibleBy4 && (!divisibleBy100 || divisibleBy400);
};

const checkIfLeapString = (year) => {
  return checkIfLeap(year) ? `Rok ${year} jest przestępny` : `Rok ${year} nie jest przestępny`;
};

const year = 1943;
console.log(checkIfLeapString(year));
