export function isLeap(ano: number) {
  if((ano%4 == 0 && ano%100!=0) || ano%400 == 0){
    return true;
  }else{
    return false;
  }
}
