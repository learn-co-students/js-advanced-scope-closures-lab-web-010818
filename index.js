function produceDrivingRange(range){
  return function(start, end){
    let startInt = parseInt(start);
    let endInt = parseInt(end)
    if( endInt - startInt < range) {
      return `within range by ${range - (endInt - startInt)}`
    } else{
      return `${(endInt - startInt) - range} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage){
  return function(amount){
    return percentage * amount
  }

}
