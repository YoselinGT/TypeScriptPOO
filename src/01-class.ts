const date = new Date();
console.log(date.getHours())
console.log(date.getTime())
console.log(date.toISOString())

const date2 = new Date(19997,10,12);
console.log(date2.getHours())
console.log(date2.getTime())
console.log(date2.toISOString())

class MyDate {
    year: number;
    month: number;
    day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }
}

const myDate = new MyDate(1997,11,12);

console.log(myDate);