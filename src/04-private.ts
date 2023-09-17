export class MyDate {
    private year: number;
    private month: number;
    private day: number;

    constructor(year: number, month: number, day: number) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    printFormat(): string{
        const day = this.addPadding(this.day)
        const month = this.addPadding(this.month)
        const year = this.addPadding(this.year)
        return `${day}/${month}/${year}`;
    }

    add(amount:number, type: 'days' | 'months' | 'years'){
        if(type === 'days') {
            this.day += amount;
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

}

const myDate = new MyDate(1997,1,1);

console.log(myDate);
//console.log(myDate.printFormat())
myDate.add(1, 'years');
myDate.add(5, 'months');
myDate.add(2, 'days');
console.log(myDate.printFormat())
//console.log(myDate.day)
//console.log(myDate.month)
//console.log(myDate.year)

