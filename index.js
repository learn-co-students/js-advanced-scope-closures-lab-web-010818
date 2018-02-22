function produceDrivingRange(blockRange){
  return function(block1, block2){
    let start = parseInt(block1);
    let end = parseInt(block2);
    let distance = Math.abs(end - start);
    let difference = blockRange - distance;
      if (difference > 0) {
        return `within range by ${difference}`;
    } else {
        return `${Math.abs(difference)} blocks out of range`;
    }
  }
}

function produceTipCalculator(tip){
  return function(fare){
     return fare * tip
  }
}
