/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.match(/^(([0-9]+(\.[0-9]+)?(\/[0-9]+)?)|\d+)/)[0];
    return result;
  };
  
  this.getUnit = function(input) {
    var result = input.match(/[a-zA-Z\/]+$/)[0];    
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
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
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
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = {initNum, initUnit, returnNum, returnUnit};
    
    return result;
  };
  
}

module.exports = ConvertHandler;
