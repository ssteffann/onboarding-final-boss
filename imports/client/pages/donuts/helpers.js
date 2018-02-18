
export const sortByPrice = (donutA, donutB) => {
  if (donutA.price > donutB.price) {
    return -1;
  }

  if (donutA.price < donutB.price) {
    return 1;
  }

  return 0
};
