"use strict";
exports.__esModule = true;
var jquery_1 = require("jquery");
var myName = "Trent";
var numberStates = 50;
var var1 = 5 + 4;
console.log(var1);
function sayHello() {
    alert("Hello World");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry" + "" + name + "" + "you are not old enough to view this page!");
    }
}
var Charles = {
    name: "Charles",
    age: 21
};
var Abby = {
    name: "Abby",
    age: 27
};
var James = {
    name: "James",
    age: 18
};
var John = {
    name: "John",
    age: 17
};
checkAge(Charles.name, Charles.age);
checkAge(Abby.name, Abby.age);
checkAge(James.name, James.age);
checkAge(John.name, John.age);
var veggies = ["Carrots", "Peas", "Green Beans", "Broccoli"];
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
var friends = [
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
for (var i = 0; i < friends.length; i++) {
    checkAge(friends[i].name, friends[i].age);
}
// Resume
var resume = {
    Name: "Trent Harper",
    Career: "Full Stack Engineer",
    Description: "Baller",
    Interests: ["Coding", "Football", "3D Printing"],
    Experience: [
        {
            company: "Covalence",
            position: "Student",
            description: "learned full stack development"
        },
        {
            company: "Fish Window Cleaning",
            position: "Ops Manager",
            description: "managed cleaning crews"
        },
        {
            company: "hwy55",
            position: "general manager",
            description: "managed up to 50 employees, p&i analysis, compliance with food safety"
        }
    ],
    Skills: [
        {
            name: "html",
            cool: false
        },
        {
            name: "CSS",
            cool: true
        },
        {
            name: "Javascript",
            cool: true
        }
    ]
};
// Dicey Business 
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.die = jquery_1["default"]('<div class="box"></div');
        jquery_1["default"]('.container').append(this.die);
        this.roll();
        jquery_1["default"](this.die).click(function () {
            _this.roll();
        });
        jquery_1["default"](this.die).dblclick(function () {
            jquery_1["default"](_this.die).remove();
            var i = dice.indexOf(_this);
            dice.splice(i, 1);
        });
    }
    Die.prototype.roll = function () {
        this.number = Math.floor(Math.random() * 6) + 1;
        this.die.text(this.number);
    };
    return Die;
}());
var dice = [];
jquery_1["default"]('.btn').click(function () {
    var diceCreated = new Die();
    dice.push(diceCreated);
});
jquery_1["default"]('.roll').click(function () {
    // dice[i] = die
    dice.forEach(function (die) {
        die.roll();
    });
});
jquery_1["default"]('.sum').click(function () {
    var sum = 0;
    dice.forEach(function (die) {
        sum += die.number;
    });
    alert(sum);
});
