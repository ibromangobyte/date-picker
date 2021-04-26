/**
 * Day object
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
        this.timestamp = date.getTime;
    }
}

const day = new Day(null);
console.log('-- day', day);