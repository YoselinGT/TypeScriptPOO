export class MyDate {
    constructor(
        public year: number = 1997,
        private _month: number = 7,
        private _day: number = 9
    ) {}

    printFormat(): string{
        const day = this.addPadding(this._day)
        const month = this.addPadding(this._month)
        const year = this.addPadding(this.year)
        return `${day}/${month}/${year}`;
    }

    add(amount:number, type: 'days' | 'months' | 'years'){
        if(type === 'days') {
            this._day += amount;
        } else if(type === 'months'){
            this._month += amount;
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

    get month(){
        return this._month
    }
    set month(newValue: number){
        if(newValue <= 1 && newValue <= 12) {
            this._month = newValue;
        } else {
            throw new Error("El mes esta fuera de rango")
        }
    }

}

const myDate = new MyDate(1993,7,10);
console.log(myDate.printFormat())
myDate.month = 4;
console.log(myDate.month);
myDate.month = 41;
console.log(myDate.month);
