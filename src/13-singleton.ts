export class MyService {

    static instance: MyService | null = null;

    private constructor( private name: string) {

    }

    static create (name: string) {
        if(MyService.instance === null){
            console.log("Debería de entrar una vez");
            MyService.instance = new MyService(name)
        }
        return MyService.instance;
    }

    getName() {
        return this.name;
    }
}

// const myService1 = new MyService("Service 1")
const myService1 =  MyService.create("Yoselin")
console.log(myService1)

//const myService2 = new MyService("Service 2")
const myService2 =  MyService.create("Yoselin")
console.log(myService2)

console.log(myService1 === myService2)