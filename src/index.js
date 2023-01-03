module.exports = function toReadable(number) {
    const obj = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
    };

    const obj2 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    const n = number.toString().split("");
    if (number < 20) return obj[number];
    if (number >= 20 && number < 100) {
        if (number % 10) return `${obj2[n[0]]} ${obj[n[1]]}`;
        else return `${obj2[n[0]]}`;
    }
    if (number >= 100 && number < 1000) {
        if (number % 100 === 0) return `${obj[n[0]]} hundred`;
        if (number - Math.trunc(number / 100) * 100 < 20) {
            return `${obj[n[0]]} hundred ${
                obj[number - Math.trunc(number / 100) * 100]
            }`;
        }
        if (number % 10) {
            return `${obj[n[0]]} hundred ${obj2[n[1]]} ${obj[n[2]]}`;
        } else return `${obj[n[0]]} hundred ${obj2[n[1]]}`;
    }
};
