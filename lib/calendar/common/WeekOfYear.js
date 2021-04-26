/**
 * Week Of Year
 */

class WeekOfYear {
    constructor(date) {
        this.date = date;
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.day = date.getDay();
    }

    get firstWeekOfYear() {
        const janFourth = new Date(this.year, 1, 4);
        const ISODay;
    }

    get ISODayOfWeek(date) {

    }

}