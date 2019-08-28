let name = "Trent";
const numberStates = 50;

let var1 = 5 + 4;
console.log(var1);

function sayHello() {
  alert("Hello World");
}
sayHello();

function checkAge(name, age) {
  if (age < 21) {
    alert(
      "Sorry" + "" + name + "" + "you are not old enough to view this page!"
    );
  }
}

let Charles = {
  name: "Charles",
  age: 21
};

let Abby = {
  name: "Abby",
  age: 27
};

let James = {
  name: "James",
  age: 18
};

let John = {
  name: "John",
  age: 17
};

checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);

let veggies = ["Carrots", "Peas", "Green Beans", "Broccoli"];

for (let i = 0; i < veggies.length; i++) {
  console.log(veggies[i]);
}

let friends = [
  {
    name: "Trey",
    age: 20
  },
  {
    name: "Jeff",
    age: 22
  },
  {
    name: "Mike",
    age: 23
  },
  {
    name: "Page",
    age: 22
  },
  {
    name: "Fish",
    age: 24
  }
];

for (let i = 0; i < friends.length; i++) {
  checkAge(friends[i].name, friends[i].age);
}
