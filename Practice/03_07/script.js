/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const wallet = {
  owner: "Tamas",
  color: "Green",
  material: "leather",
  money: {
    paper: 5000,
    coin: 1,
  },

  howMuchMoney: function () {
    console.log("Money:", this.money.paper + this.money.coin);
  },
};

const tabel = {
  color: "brown",
  material: "wood",
  content: {
    wallet,
  },

  whatIsOnTable: function () {
    console.log("On table:", this.content);
  },
};

console.log("Money on wallet:", wallet["howMuchMoney"]());
