const data = {
    roman: ['M','D','C','L','X','V','I'],
    decimal: [1000, 500, 100, 50, 10, 5, 1],
    rcombo: ['CM','CD','XC','XL','IX','IV'],
    dcombo: [900, 400, 90, 40, 9, 4],
}
function breakdown(num) {
    let answer = [];
    if (num > 1000){        
        answer.push(Math.trunc(num / 1000) * 1000);
        num = num % 1000;
    }
    if (num > 100) {
        answer.push(Math.trunc(num / 100) * 100);
        num = num % 100;
    }
    if (num > 10){
        answer.push(Math.trunc(num / 10) * 10);
        num = num % 10;    
    }
    answer.push(num);
    return answer;
}
function convertToRoman(num) {
    let numbers = breakdown(num);
    let roman = [];
    for (let i = 0; i < numbers.length; i++){ // each number (ex: 3000, 900, 90, 9)
        if (data.dcombo.includes(numbers[i])){//900, 400, 90, 40, 9, 4
            roman.push(data.rcombo[data.dcombo.indexOf(numbers[i])]);
        } else if(data.decimal.includes(numbers[i])){//1000, 500, 100, 50, 10, 5, 1
            roman.push(data.roman[data.decimal.indexOf(numbers[i])]);
        } else {
            for (let j = 0; j < data.decimal.length; j++){//each decimal (1000, 500, 100, 50, 10, 5, 1)
                if (numbers[i] >= data.decimal[j]){
                    let count = Math.trunc(numbers[i] / data.decimal[j]);
                    for (let k = 0; k < count; k++){
                        roman.push(data.roman[j]);
                        numbers[i] -= data.decimal[j];
                    }
                }
            }            
        }
    }
    return roman.join('');
}
console.log(convertToRoman(16)); // XVI
