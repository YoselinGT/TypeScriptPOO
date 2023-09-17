export class Animal {
    constructor(public name:string) {
    }

    move(){
        console.log('Moving along')
    }

    greeting(){
        return `Hi, I'am ${this.name}`;
    }
}

export class Dog extends Animal {

    constructor(
        public name:string,
        public owner: string
    ) {
        super(name);
    }

    woof(times: number ):void{
        for (let index = 0; index < times; index ++){
            console.log('woof!!')
        }
    }

}

const fifi = new Animal('fifi')
console.log(fifi.move())
console.log(fifi.greeting())


const cheis = new Dog('fifi','Yoselin')
console.log(cheis.move())
console.log(cheis.greeting())
console.log(cheis.woof(7))