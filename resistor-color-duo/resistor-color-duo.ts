export function decodedValue(colorVector:string) {
  switch(colorVector){
    case 'black':
      var resp = '0'
      break;

    case 'brown':
      var resp = '1'
      break;

    case 'red':
      var resp = '2'
      break;

    case 'orange':
      var resp = '3'
      break;

    case 'yellow':
      var resp = '4'
      break;

    case 'green':
      var resp = '5'
      break;

    case 'blue':
      var resp = '6'
      break;

    case 'violet':
      var resp = '07'
      break;

    case 'grey':
      var resp = '8'
      break;

    case 'white':
      var resp = '9'
      break;
  }

  throw new Error('Remove this statement and implement this function')
}
