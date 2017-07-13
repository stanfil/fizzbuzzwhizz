"use strict";

function fizzbuzzwhizz(num) {
    let result;
    let d3 = (num%3==0),
        d5 = (num%5==0),
        d7 = (num%7==0);
    let set = new Set();
    let number = num;
    while (number) {
        set.add(number%10);
        number = Math.floor(number/10);
    }
    if (set.has(3)) {
        result = 'fizz';
    }else if (d3 && d5 && d7) {
        result = 'fizzbuzzwhizz';
    }else if (d3 && d5 && !d7) {
        result = 'fizzbuzz';
    }else if (d3 && !d5 && d7) {
        result = 'fizzwhizz';
    }else if (!d3 && d5 && d7) {
        result = 'buzzwhizz';
    }else if (d3 && !d5 && !d7) {
        result = 'fizz';
    }else if (!d3 && d5 && !d7) {
        result = 'buzz';
    }else if (!d3 && !d5 && d7) {
        result = 'whizz';
    }else if (!d3 && !d5 && !d7) {
        result = num.toString();
    }
    return result;
}