export class MyDate {
    constructor(
        public year: number = 1997,
        public month: number = 7,
        private _day: number = 9
    ) {}

    printFormat(): string{
        const day = this.addPadding(this._day)
        const month = this.addPadding(this.month)
        const year = this.addPadding(this.year)
        return `${day}/${month}/${year}`;
    }

    add(amount:number, type: 'days' | 'months' | 'years'){
        if(type === 'days') {
            this._day += amount;
        } else if(type === 'months'){
            this.month += amount;
        } else if(type === 'years'){
            this.year += amount;
        }
    }

    private addPadding(value: number){
        if(value < 10){
            return value.toString().padStart(2, "0");
        }
        return value.toString()
    }

    get day(){
        return this._day
    }

    get isLeapYear():boolean {
        if (this.year % 400 === 0) return true
        if (this.year % 100 === 0) return false
        return this.year % 4 === 0
    }

}

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat())
console.log(myDate.day)
console.log(myDate.isLeapYear)
// myDate.day = 12

const myDate2 = new MyDate(2000,7,10);
console.log(myDate2.isLeapYear)


const myDate3 = new MyDate(2013,7,10);
console.log(myDate3.isLeapYear)