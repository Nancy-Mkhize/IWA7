
const leoName = 'Leo';
const leoSurname = 'Musvaire    ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans ';
const sarahBalance = '-4582.21000111';

const divider = '----------------------------------';

// Only change below this line
//remove parseInt to parseFloat because theres a negative value
//The variable names should be surrounded by backticks () instead of double or single quotes, and the placeholders should be inside ${}`.
//The variables leo and sarah are not being concatenated correctly. The + operator should be used to concatenate the strings and variables.
//The variable surname is not declared anywhere

const owed = Math.round(parseFloat(leoBalance) + parseFloat(sarahBalance) * 100) / 100;
const leo = `${leoName} ${leoSurname.trim()} Owed R${sarahBalance}`;
const sarah = `${sarahName} ${sarahSurname.trim()} Owed R${leoBalance}`;
const total = 'Total amount owed: ';
const result = `${leo}\n${sarah}\n${divider}\n${divider}\n${total}R${owed}`;

console.log(result);
