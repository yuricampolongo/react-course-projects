//arguments object - no longer bound

const add = function (a, b){
    console.log(arguments);
    return a + b;
}

const addArrow = (a, b) => {
    // console.log(arguments); - No longer bound
    return a + b;
}

console.log(add(55,1));



// this keyword - no longer bound

const user = {
    name : 'Yuri',
    cities : ['Toronto', 'Las Vegas', 'Los Angeles'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);

        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
}
console.log(user.printPlacesLived());


//Challenge area

const multiplier = {
    numbers : [1,2,3,4,5,6,7,8,9,10],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());