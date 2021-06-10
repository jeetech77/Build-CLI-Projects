const detailsOfRam={
    name:'Ram ',
    age:2500,
    power:10000
}
const detailsOfKrishna={
    name:'krishna',
    age:2325,
    power:9950
}
function maxPower(obj1,obj2){
    if (obj1.power>obj2.power) {
        console.log(`${obj1.name} have more power in the term of power.`);
    }
    else{
        console.log(`${obj2.name} have more power in the term of power.`);
    }
    let numOfCharInObj1=(obj1.name.length);
    let numOfCharInObj2=(obj1.name.length);
    if (numOfCharInObj1>numOfCharInObj2) {
        console.log(`${obj1.name} have more power in the term of number of characters in the name.`);
    }
    else{
        console.log(`${obj2.name} have more power in the term of number of characters in the name.`);
    }
}
maxPower(detailsOfRam,detailsOfKrishna);