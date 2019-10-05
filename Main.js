let raceNumber = Math.floor(Math.random() * 1000);
let early = true;
let age = 18;
if (age > 18 && early) {
  raceNumber += 1000;
}
if (age>18 && early) {
  console.log(`Your race start at 9:30 am. and your racenumber is: ${raceNumber}`);
} else if (age > 18 && !early) {
  console.log(`Your race start at 11:00 am and your racenumber is: ${raceNumber}`);
} else if (age < 18) {
  console.log(`Your race start at 12:30 pm and your racenumber is: ${raceNumber}`);
} else {
  console.log("Please contact with registration desk");
}
