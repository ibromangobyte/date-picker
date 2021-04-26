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
     * Determines if the year is a leap year
     * @returns {boolean} true || false
     */

    isLeapYear() {
        return this.year % 100 === 0 ? this.year % 400 === 0 : this.year % 4 === 0;
    }
}