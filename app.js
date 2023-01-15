const mathStuffES5={
    x:200,
    add:function(a,b){
        return a+b;
    },
    square: function(a){
        return a*a
    }
}

const mathStuffES2015={
    x:200,
    add(a,b){
        return a+b;
    },
    square (a){
        return a*a;
    }
};

//Exercise Start

//1. Same keys and values
//ES5
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }

function createInstructor(firstName,lastName){
    return {
        firstName,
        lastName
    };
}

//2.  Computed Property Names
//ES5
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

//ES2015

let favoriteNumber=42;
const instructor={
    firstName:'Colt',
    [favoriteNumber]:"that is my favorite"
}

// 3. Object Methods
//ES5

// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }

// Object Methods ES2015
// /* Write an ES2015 Version */

const teacher={
    firstName:"Colt",
    sayHi(){
        return 'hi';
    },
    sayBye(){
        return this.firstName +"says bye!";
    }


}

//4. createAnimal function

//Write a function which generates an animal object. The function should accepts 3 arguments:

// species: the species of animal (‘cat’, ‘dog’)
// verb: a string used to name a function (‘bark’, ‘bleet’)
// noise: a string to be printed when above function is called (‘woof’, ‘baaa’)
// Use one or more of the object enhancements we’ve covered.

// const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"

function createAnimal (species,verb,noise){
    return {
        species,
        [verb](){
            return noise
        }
    }
}