function produceDrivingRange(range) {
  return function(streetA, streetB) {
    let blocks = Math.abs(parseInt(streetA) - parseInt(streetB));
    return (blocks > range) ? `${blocks - range} blocks out of range` : `within range by ${range - blocks}`;
  }
}

function produceTipCalculator(percent) {
  return function(fareTotal) {
    return percent * fareTotal;
  }
}

function createDriver() {
  let driverId = 0;
  return function Driver (name) {
    this.name = name;
    this.id = ++ driverId;
  }
}
