const detailsOfRam={
    name:'Ram',
    age:"2500",
    power:10000
}
const detailsOfKrishna={
    name:'Krishna',
    age:"2325",
    power:9950
}

function maxPower(obj1,obj2){
    if (obj1.power>obj2.power) {
        console.log(`${obj1.name} have maximum power.`);
    }
    else{
        console.log(`${obj2.name} have maximum power.`);
    }
}
maxPower(detailsOfRam,detailsOfKrishna);