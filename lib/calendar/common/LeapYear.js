/**
 * Leap Year
 */

class LeapYear {
    /**
     * Create property
     * @param {int} year 
     */
    constructor(year) {
        this.year = year;
    }

    /**
     * Method determines if the year is a leap year
     * @returns {boolean}
     */

    isLeapYear() {
        return this.year % 100 === 0 ? this.year % 400 === 0 : this.year % 4 === 0;
    }
}

module.exports = LeapYear;