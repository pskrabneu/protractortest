const protractorHelper = require('protractor-helper');

let XLSX = require('xlsx');
let workBook = XLSX.readFile('test/utils/test.xlsx');
let firstSheetName = workBook.SheetNames[0];
let addressOfCell = 'D4';

// Get worksheet
let workSheet = workBook.Sheets[firstSheetName];

// Find desired cell
let desiredCell = workSheet[addressOfCell];

// Get the value
let desiredValue = (desiredCell ? desiredCell.v : undefined);
console.log('Value of the cell = "' + desiredValue + '"');


/*var loginSheet = workBook.SheetNames[0];
var addressCell1 = 'C13';
var desiredCell = loginSheet[addressCell1];
var desiredValue = (desiredCell ? desiredCell.v : undefined);

console.log('Value of the cell = ' + desiredValue);*/

// D:2 -- D:5
// B:8 -- C:13

