/**
 * Day Of Week
 */


class DayOfWeek {
    constructor(year, month, day) {
        if (year === null || year <= 0) throw new Error('Invalid year');
        this.year = year;
    }
}

const dayofweek = new DayOfWeek(1000, 5, 5);
console.log(dayofweek);