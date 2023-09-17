import {Dog} from './09-protected'

function getValue<myType>(value:myType){
    return value
}

getValue(12).toFixed()
getValue("12").toLowerCase()
getValue([1,2,3,4,5]).forEach

const fifi = new Dog('Camila','Yoselin')
getValue<Dog>(fifi).move()