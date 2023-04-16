let numOrStr = prompt('input number or string');
/* if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
} */

switch (isNaN(numOrStr) || numOrStr) {
	case  null:
  	console.log('ви скасували')
  break;
  case  '':
  	console.log('Empty String');
  break;
  case  true  :
  	console.log(' number is Ba_NaN')
  break;
 	default:
    console.log('OK!')
    break;
}