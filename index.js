function produceDrivingRange(blocks){

  function calculate(start, end){
    let streetStart = parseInt(start.slice(0,-2),10)
    let streetEnd = parseInt(end.slice(0,-2),10)
    let distance = streetEnd - streetStart

    if (blocks > distance){
      return `within range by ${blocks - distance}`
    } else {
      return `${distance - blocks} blocks out of range`
    }
  }

  return calculate;
}


function produceTipCalculator(tip){
  function calculate(fare){
    return tip * fare
  }

  return calculate
}




function createDriver(){
  let driverId = 0;

  class Driver{
    constructor(name){
      this.id = ++driverId;
      this.name = name;
    }

  }

  return Driver;
}



// createDriver returns a function that returns a class that produces a Driver class. The class has reference to a driverId that is incremented each time a new driver is created. The rest of the code base does not have access to driverId.
// The functions should make use of closures to achieve the specified goals.
