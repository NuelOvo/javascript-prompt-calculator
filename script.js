// document.write('hello world');

// read numbers in the program
const num1 = parseFloat( prompt('Enter Firstnumber: ')); // I used the 'parseFloat' to convert numbers entered into the program as 'string i.e 10 >> '10'
const num2 = parseFloat( prompt('Enter Secondnumber: '));// Dta will be converted 'string' into 'floating-pointnumbers' before stored in 'num' variables

// read operator
const operator = prompt('Enter operator (+, -, /, *)');

// program validation
let result = 0;
if( isNaN(num1) || isNaN(num2)) {
    alert('Wrong Input, Please refresh this page and ensure to enter data');
} else{
    if( operator == '+') {
        return num1 + num2;
    }
    else if ( operator == '-') {
        return num1 - num2;
    }
    else if (operator == '/') {
        return num1 / num2;
    }
    else if ( operator == '*') {
        return num1 * num2;
    }
    document.write( num1 + operator + num2 +' = ' + result );
}