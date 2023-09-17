console.log(Math.PI);
console.log(Math.max(1,2,3,4,45,6));


class MyMath {
    static PI = 3.14;

    static max(...numbers: number[]){
        return numbers.reduce((max, item) => max >= item ? max : item);
    }
}

console.log(MyMath.PI)
console.log(MyMath.max(1,2,3,4,5,6,7))