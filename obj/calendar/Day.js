const LeapYear = require('./common/LeapYear');

/**
 * Day
 */

class Day {
    /**
     * Initialise day properties 
     * @param {Date} date 
     * @param {string} lang 
     */
    constructor(date = null, lang = 'default') {
        date = date ?? new Date();
        this.Date = date;
        this.date = date.getDate();
        this.day = date.toLocaleString(lang, { weekday: 'long' });
        this.dayNumber = date.getDate() + 1;
        this.dayShort = date.toLocaleString(lang, { weekday: 'short' });
        this.year = date.getFullYear();
        this.yearShort = Number(date.toLocaleString(lang, { year: '2-digit' }));
        this.month = date.toLocaleString(lang, { month: 'long' });
        this.monthShort = date.toLocaleString(lang, { month: 'short' });
        this.timestamp = date.getTime();
        this.week = getWeekNumber(date);
    }

    /**
     * Property to determine whether todays date matches date inputted
     * @returns {boolean} 
     */
    get isToday(){
        return this.isEqualTo(new Date());
    }

    /**
     * Method to determine whether two dates are the same
     * @param {*} date 
     * @returns 
     */
    isEqualTo(date) {
        date = date instanceof Day ? date.Date : date;
        
        return date.getDate() == this.date && 
            date.getMonth() === this.monthNumber - 1 &&
            date.getFullYear() === this.year;
    }
    
    /**
     * Method to format the Day object
     * @param {string} formatStr 
     * @returns {string}
     */
    format(formatStr) {
        return formatStr
            .replace(/\bYYYY\b/, this.year)
            .replace(/\bYYY\b/, this.yearShort)
            .replace(/\bWW\b/, this.week.toString().padStart(2, '0'))
            .replace(/\bW\b/, this.week)
            .replace(/\bDDDD\b/, this.day)
            .replace(/\bDDD\b/, this.dayShort)
            .replace(/\bDD\b/, this.date.toString().padStart(2, '0'))
            .replace(/\bDDDD\b/, )
            .replace(/\bDDDD\b/, )
    }
}

const day = new Day(null);
console.log('-- day', day);
const leapyear = new LeapYear(2000);
console.log(leapyear.isLeapYear());