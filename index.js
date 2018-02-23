function produceDrivingRange(blockRange) {
  return function fn(start,end) {
    let tripLength = Math.abs(start.slice(0,-2) - end.slice(0,-2))
    if (tripLength>blockRange) {
      return `${tripLength-blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange-tripLength}`
    }
  }

}

function produceTipCalculator(percent) {
  return function tipper(fare) {
    return fare*percent 
  }
}
