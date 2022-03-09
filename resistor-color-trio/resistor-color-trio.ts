export function decodedResistorValue(colorVector:string[]) {

  var resp : any = [3];

    for(var i = 0; i < colorVector.length; i++){
      switch(colorVector[i]){
        case 'black':
          resp[i] = 0
          break;
    
        case 'brown':
          resp[i] = 1
          break;
    
        case 'red':
          resp[i] = 2
          break;
    
        case 'orange':
          resp[i] = 3
          break;
    
        case 'yellow':
          resp[i] = 4
          break;
    
        case 'green':
          resp[i] = 5
          break;
    
        case 'blue':
          resp[i] = 6
          break;
    
        case 'violet':
          resp[i] = 7
          break;
    
        case 'grey':
          resp[i] = 8
          break;
    
        case 'white':
          resp[i] = 9
          break;
      }
    }

    var valor : number = (resp[0]*10 + resp[1]) * 10^resp[2];
    console.log(resp)
    console.log('( ' + resp[0]*10 + ' + ' + resp[1] + ') * ' + (10^resp[2]) )
    console.log(valor)
    if(resp[2]<3){
      var nome : string = ' ohms'
    }else{
      var nome : string = ' kiloomhs'
    }
    var resultado : string = valor + nome; 
    return resultado;
  }
