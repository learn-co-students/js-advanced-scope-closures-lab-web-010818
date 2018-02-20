function produceDrivingRange(distance) {
  return function (blockStart, blockEnd){
    const start = parseInt(blockStart);
    const end = parseInt(blockEnd);
    const distanceToCheck = Math.abs(end - start);
    if (distanceToCheck < distance) {
      return `within range by ${distance - distanceToCheck}`;
    } else {
      return `${distanceToCheck - distance} blocks out of range`;
    }
  }
}

function produceTipCalculator(tipDecimal) {
  return (bill) => bill * tipDecimal;
}

function createDriver() {
  let id = 1;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = id++;
    }
  }
}
