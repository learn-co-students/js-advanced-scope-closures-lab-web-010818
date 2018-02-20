const produceDrivingRange = function(range) {
  return function (start, end) {
    start = parseInt(start.slice(0, start.length-2));
    end = parseInt(end.slice(0, end.length-2));
    distance = Math.abs(start-end);
    if (distance > range) {
      return `${distance - range} blocks out of range`;
    } else {
      return `within range by ${range - distance}`;
    }
  };
}

const produceTipCalculator = function(tip){
  return function(amount){
    return tip * amount;
  }
}
