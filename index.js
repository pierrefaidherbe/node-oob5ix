const faker = require('faker');
const fs = require('fs');
// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

// Code to generate User Mock data
const generatePersonsData = number => {
  const persons = [];
  while (number >= 0) {
    persons.push({
      id: number,
      name: faker.name.firstName(),
      reference: faker.datatype.number,
      locale: faker.random.locale(),
      expirationTime: new Date(faker.date.future()).toISOString()
    });
    number--;
  }
  return persons;
};

fs.writeFileSync(
  './db.json',
  JSON.stringify({ partners: generatePersonsData(75) })
);
