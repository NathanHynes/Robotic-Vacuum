'use strict';


function formatInput(inputData) {
  return inputData.split('\n');
}

function convertStrToCoord(coordString) {
  return coordString.split(' ').map(
    coord => parseInt(coord, 10)
  );
}

module.exports.formatInput = formatInput;
module.exports.convertStrToCoord = convertStrToCoord;
