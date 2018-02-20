function produceDrivingRange(range) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(start - end);
    let difference =  Math.abs(distance - range)
    if (distance > range) {
      return `${difference} blocks out of range`
    }
    else {
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator(tip) {
  return function(fare) {
    return fare * tip
  }
}

function createDriver() {
  driverId = 0
  return class {
    constructor(name) {
      this.id = ++driverId
      this.name = name
    }
  }
}
