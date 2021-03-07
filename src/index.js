module.exports = function toReadable (number) {

    let obj1 = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine"
    }

    let obj2 = {
    "0": "ten",
    "1": "eleven",
    "2": "twelve",
    "3": "thirteen",
    "4": "fourteen",
    "5": "fifteen",
    "6": "sixteen",
    "7": "seventeen",
    "8": "eighteen",
    "9": "nineteen"
    }

    let obj3 = {
        "2": "twenty",
        "3": "thirty",
        "4": "forty",
        "5": "fifty",
        "6": "sixty",
        "7": "seventy",
        "8": "eighty",
        "9": "ninety"
        }
    
    let str = String(number);

    if (number == 0) {
        return "zero";
    }

    if (str.length == 1) {
        return obj1[str[0]];
    }

    if (str.length == 2) {
        if (str[0] == "1") {
            return obj2[str[1]];
        }
        if (str[1] == "0") {
            return obj3[str[0]];
        }
        else
        return obj3[str[0]] + " " + obj1[str[1]];
    }

    if (str.length == 3) {
        let hand = obj1[str[0]] + " hundred";

        if (str[1] == "1") {
            return hand += " " + obj2[str[2]];
        }
        else
        if (str[1] !== "0") {
            hand += " " + obj3[str[1]];
        }

        if (str[2] !== "0") {
            return hand + " " + obj1[str[2]];
        }
        else
        return hand;
    
    }
}
