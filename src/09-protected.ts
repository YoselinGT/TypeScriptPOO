export abstract class Animal {
    constructor(public name:string) {
    }

    move(){
        console.log('Moving along')
    }

    greeting(){
        return `Hi, I'am ${this.name}`;
    }

    protected  doSomething(){
        console.log("dooo")
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
        this.doSomething()
    }

    move() {
        console.log('Moving as a dog')
        super.move()
    }

}

const cheis = new Dog('fifi','Yoselin')
console.log(cheis.move())
console.log(cheis.greeting())
console.log(cheis.woof(7))