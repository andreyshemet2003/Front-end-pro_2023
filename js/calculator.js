function pow(numb, degree) {

  if (degree == 1) {
    return numb;
  } else {
    return numb * pow(numb, degree - 1);

  }
}
console.log (pow(5,2)); 