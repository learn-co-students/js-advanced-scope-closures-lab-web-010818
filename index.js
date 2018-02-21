function produceDrivingRange(num){
  return function(b1, b2){
    let num1 = b1.split('th')[0];
    let num2 = b2.split('th')[0];
    let delta = num2 - num1;
    if (delta > num){
      return `${delta - num} blocks out of range`
    }
    return `within range by ${delta}`
  }
}

function produceTipCalculator(float){
  return function(int){
    return int * float
  }
}
