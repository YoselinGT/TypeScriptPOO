export class MyDate {
    constructor(
        public year: number = 1997,
        public month: number = 7,
        private day: number = 9
    ) {}

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

const myDate = new MyDate();
console.log(myDate.printFormat())

const myDate2 = new MyDate(2022);
console.log(myDate2.printFormat())

const myDate3 = new MyDate(2022,3);
console.log(myDate3.printFormat())
