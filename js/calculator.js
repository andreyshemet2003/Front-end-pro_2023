function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
      array.splice(index, 1);
  }
}
const array = [1, 2, 3, 4, 5];
removeElement(array, 3);
console.log(array);