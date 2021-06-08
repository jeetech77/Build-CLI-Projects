const personOne={
    name:"Ram",
    age:31,
    yuga:"Treta"
}
const personTwo={
    name:"Krishna",
    age:28,
    yuga:"Dwapar"
}
function maxAge(objOne,objTwo){
    if (objOne.age>objTwo.age) {
        return objOne.name; // Returning the name of the person with more age.
    }else{
        return objTwo.name;  // Returning the name of the person with more age.
    }
}
console.log(maxAge(personOne,personTwo));