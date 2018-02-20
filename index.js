function produceDrivingRange(num){
  return function(num1, num2){
   var final = parseInt(num2)-parseInt(num1)
    if (num >= final) {
      return `within range by ${parseInt(num2) - parseInt(num1)}`
    } else {
      return `${parseInt(final)-parseInt(num)} blocks out of range`
    }

  }
}


function produceTipCalculator(percent){
  return function(price){
    return percent*price

  }
}
