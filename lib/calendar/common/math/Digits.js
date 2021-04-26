/**
 * Digits
 */

class Digits {
    /**
     * Only accept unsigned integers
     * @param {unsigned int} number 
     */
    constructor(number) {
        if (number === null || number === undefined || number <= 0)
            throw new Error('Exception: Number is not valid.');
        this.number = number;
        this.length = 0;
    }

    get isFourDigits() {
        if (this.length() > 4)
            return 
        
    }
    /**
     * Method determines the length of a number
     * @returns {unsigned int}
     */
    length() {
        this.length = Math.log(this.number) * Math.LOG10E + 1 | 0
        return this.length;
    }

}

module.exports = Digits;