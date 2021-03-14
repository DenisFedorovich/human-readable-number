module.exports = function toReadable(number) {

    const numbers = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    let numString = number.toString();

    if (number === 0) return 'zero';

    if (number < 20) {
        return numbers[number];
    }

    if (number === 20 || number === 30 || number === 30 || number === 40 || number === 50 || number === 60 || number === 70 || number === 80 || number === 90) {
        return tens[numString[0]];
    }

    if (numString.length === 2) {
        return `${tens[numString[0]]} ${numbers[numString[1]]}`;
    }

    if (numString.length == 3) {
        if (numString[1] === '0' && numString[2] === '0')
            return `${numbers[numString[0]]} hundred`;
        else
            return `${numbers[numString[0]]} hundred ${toReadable(+(numString[1] + numString[2]))}`;
    }

}
