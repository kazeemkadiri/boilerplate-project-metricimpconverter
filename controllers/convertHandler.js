/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    
    var result = input.match(/^(([0-9]+(\.[0-9]+)?(\/[0-9]+)?)|\d+)/);
    
    if(typeof result !== 'string'){
      result = result[0];
    }else if(null === input.match(/^(([0-9]+(\.[0-9]+)?(\/[0-9]+)?)|\d+)/)){
      result = 1;
    }else{
      result = 'invalid number';
    }

    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-zA-Z\/]+$/)[0];    
    var unitsArr = ['gal','mi','lbs','kg','km','l'];
    result = unitsArr.indexOf(result) === -1 ? 'invalid unit': result;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;

    switch(initUnit.toLowerCase()){
      case 'gal': result = 'l'; break;
      case 'lbs': result = 'kg'; break;
      case 'mi': result = 'km'; break;
      case 'l': result = 'gal'; break;
      case 'kg': result = 'lbs'; break;
      case 'km': result = 'mi'; break;
    }    
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;

    switch(unit.toLowerCase().trim()){
      case 'mi': result = 'miles'; break;
      case 'km': result = 'kilometres'; break;
      case 'lbs': result = 'pound'; break;
      case 'kg': result = 'kilogram'; break;
      case 'gal': result = 'gallons'; break;
      case 'l': result = 'litres'; break;
    }

    return result;
  };
  
  this.convert = function(initNumber, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const initNum = eval(initNumber);
    var result;

    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum * galToL;
        break;
      case 'mi':
	result = initNum * miToKm;        
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'l':
        result = initNum / galToL;
	break;
      case 'km':
	result = initNum / miToKm;
	break;
      case 'kg':
	result = initNum / lbsToKg;
   	break;
    }
    
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var fullString = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to '+ returnNum + ' ' + this.spellOutUnit(returnUnit);

    var result = {
      initNum, 
      initUnit, 
      returnNum, 
      returnUnit,
      'string': fullString
    };

    return result;
  };
  
}

module.exports = ConvertHandler;
