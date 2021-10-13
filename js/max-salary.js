let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const maxName = Object.keys(salaries).reduce((maxName, name) =>
  salaries[name] > salaries[maxName] ? name : maxName
);

console.log(maxName);
