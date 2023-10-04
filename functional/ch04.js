const coffeeMachine = liquid => espresso => `${liquid} + ${espresso}`;

const americanoMachine = coffeeMachine('water'); // liquid

const latteMachine = coffeeMachine('milk'); // liquid

const americano = americanoMachine('columbia coffee bean'); // espresso

const latte = latteMachine('jamaica coffee bean'); // espresso

console.log(americano);

console.log(latte);