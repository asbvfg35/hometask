// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
/*

const personalMoovieDB = {
  // count: numberOfFilms,
  moovies: {},
  actors: {},
  genres: [],
  privat: false,

};
const a = prompt('Один из последних просмотренных ~фильмов', '');
const b = prompt('На сколько оцените его', '');
const c = prompt('Один из последних просмотренных фильмов', '');
const d = prompt('На сколько оцените его', '');

personalMoovieDB.moovies[a] = b;
personalMoovieDB.moovies[c] = d;
// console.log(personalMoovieDB);

*/
let animal = {
  eats: true,
  walk() {
    console.log('Animal walk');
  }
};
let rabbit = {
  jumps: true,
  __proto__: animal
};
rabbit.walk();

rabbit.__proto__ = animal;
console.log(rabbit.eats);
console.log(rabbit.jumps);

let r = {
};
Object.defineProperty(r, "read", {
  value: "Den",
  writable: true,
  enumerable: true,
  configurable: true
});

let descriptor = Object.getOwnPropertyDescriptor(r, 'read');
console.log(JSON.stringify(descriptor, null, 2));

r.read = "ew";


console.log(r);

let descriptor1 = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor1);
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(r));
console.log(Object.getOwnPropertyDescriptors(clone));
//  Object.preventExtensions(r)
console.log(Object.isExtensible(r));


/*
let user = {
  name: "John",
  surname: "Smith",
  get fullName() {
    return `${this.name} ${this.surname}`;
  },
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
console.log(user.fullName);
user.fullName = "Alice Cooper";
console.log(user.name);
console.log(user.surname);

// console.log(Object.getOwnPropertyDescriptors(user, 'fullName'));
*/
let u = {
  name: "John",
  surname: "Smith"
};

Object.defineProperty(u, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },
  set(value) {
    [this.name, this.surname] = value.split(" ");
  }
});

console.log(u.fullName);



let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log("Имя слишком короткое");
      return;
    }
    this._name = value;
  }
};

user.name = "Pete";
console.log(user.name);
user.name = "fr";


function User1(name, age) {
  this.name = name;
  this.age = age;
}
let john1 = new User1("John", 25);

console.log(john1.age);



function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}
let john = new User("John", new Date(1992, 6, 1));

console.log(john.birthday);
console.log(john.age);



user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// срабатывает сеттер!
admin.fullName = "Alice Cooper"; // (**)
console.log(admin.name); // Alice
console.log(admin.surname); // Cooper»

// let obj = {};
// console.log(obj);

let obj1 = new Object();
console.log(obj1);


let name = "Den";
let age = 30;
let u2 = {
  name,
  age
};

console.log(u2.name, u2.age);

user = new function() {
  this.name = "Der";
  this.isAdmin = false;
};
console.log(user);

function Yr(name, age) {
  this.name = name;
  this.age = age;
}
let ru = new Yr('Fr', 40);

console.log(ru);

let obj = new Yr('d', 35);
console.log(obj);
console.log(Object.prototype.__proto__);