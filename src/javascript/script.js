function script1 () {
    function math(num1, num2, operator) {
        return eval(`${Number(num1)} ${operator} ${Number(num2)}`);
    }

    const num1 = prompt("Enter first number");

    const operator = prompt(` 
    Enter operator:
    multiply => *
    divide => /
    add => +
    subtract => -
    `);

    const num2 = prompt("Enter second number");

    const result = math(num1, num2, operator);
    alert("The result is " + result);
}


function script2 () {
    const Value1 = prompt("Enter first number/word/sentence");
    const Value2 = prompt("Enter second number/word/sentence");

    if (Value1 === Value2) {
        alert("True");
    } else {
        alert("False")
    }
}

function script3 () {
    const num1 = +prompt("Enter first number");
    const num2 = +prompt("Enter second number");
    const num3 = +prompt("Enter third number");
    const Sum = num1 + num2 + num3;
    alert("Result is " + Sum / 3);
}

function script4 () {
    const Value1 = prompt("Enter first number/word/sentence");
    const Value2 = prompt("Enter second number/word/sentence");
    const Value3 = prompt("Enter third number/word/sentence");

    alert(Value1 + " " + Value2 + " " + Value3);
}

function script5 () {
    let num = +prompt("Enter number");
    let digits = [];
    while (num > 0) {
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    digits.reverse();
    alert(digits.join(' '));
}

