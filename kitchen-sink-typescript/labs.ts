import $ from 'jquery';

const myName: string = "Trent";
const numberStates: number = 50;

let var1: number = 5 + 4;
console.log(var1);

function sayHello() {
  alert("Hello World");
}
sayHello();

function checkAge(name: string, age: number) {
  if (age < 21) {
    alert(
      "Sorry" + "" + name + "" + "you are not old enough to view this page!"
    );
  }
}

interface IPerson { name: string, age: number }

let Charles: IPerson = {
  name: "Charles",
  age: 21
};

let Abby: IPerson = {
  name: "Abby",
  age: 27
};

let James: IPerson = {
  name: "James",
  age: 18
};

let John: IPerson = {
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

let friends: IPerson[] = [
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


// Resume

let resume: IResume = {
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
}

interface IResume {
  Name: string,
  Career: string,
  Description: string,
  Interests: Array<string>,
  Experience: Array<IExperience>,
  Skills: ISkills[]
}

interface IExperience {
  company: string,
  position: string,
  description: string
}

interface ISkills {
  name: string,
  cool: boolean
}

// Dicey Business 

class Die {

  public die: any
  public number: number

  constructor() {

      this.die = $('<div class="box"></div')
      $('.container').append(this.die)
      this.roll();
      $(this.die).click(() => {
          this.roll();
      })

      $(this.die).dblclick(() => {
          $(this.die).remove();
          let i = dice.indexOf(this);
          dice.splice(i, 1)
      })
  }

  roll() {
      this.number = Math.floor(Math.random() * 6) + 1;
      this.die.text(this.number)
  }
}

const dice = [];

$('.btn').click(() => {
  let diceCreated = new Die();
  dice.push(diceCreated)
})

$('.roll').click(() => {
  // dice[i] = die
  dice.forEach((die) => {
      die.roll();
  })
})

$('.sum').click(() => {
  let sum: number = 0;
  dice.forEach((die) => {
      sum += die.number
  })
  alert(sum)
})

