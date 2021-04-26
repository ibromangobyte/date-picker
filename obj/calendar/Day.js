/**
 * Day object
 */

// Determine the number of weeks from the start of the year til today
function getWeekNumber(date) {
    const firstDayOfTheYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfTheYear) / 86400000;

    return Math.ceil((pastDaysOfYear + firstDayOfTheYear.getDay() + 1) /7 ); 
}

// Determine whether the year is a leap year
function isLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}

/**
 * Day object
 * @params {Date} date (optional)
 * @params {string} lang (optional)
 */

class Day {
    constructor(date = null, lang = 'default') {
        date = date ?? new Date();

        this.Date = date;
        this.date = date.getDate();
        this.day = date.toLocaleString(lang, { weekday: 'long' });
        this.dayNumber = date.getDate() + 1;
        this.dayShort = date.toLocaleString(lang, { weekday: 'short' });
        this.year = date.getFullYear();
        this.yearShort = Number(
            date.toLocaleString(lang, { year: '2-digit' })
        );
        this.month = date.toLocaleString(lang, { month: 'long' });
        this.monthShort = date.toLocaleString(lang, { month: 'short' });
        this.timestamp = date.getTime();
        this.week = getWeekNumber(date);
    }

    get isToday(){
        return this.isEqualTo(new Date());
    }

    isEqualTo(date) {
        date = date instanceof Day ? date.Date : date;
        
        return date.getDate() == this.date && 
            date.getMonth() === this.monthNumber - 1 &&
            date.getFullYear() === this.year;
    }

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