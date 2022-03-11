export function isLeap(ano: number) {
  //throw new Error('Remove this statement and implement this function')
  if((ano%4 == 0 && ano%100!=0) || ano%400 == 0){
    return true;
  }else{
    return false;
  }
}
