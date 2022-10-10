const someObj = {
  color: 'red',
  number: 2,
  id: '#1488',
  another: {
    width: 1024,
    wtf: true,
  },
};
//удалить свойство объекта
// delete someObj.another

// перебрать свойство объекта
let counter = 1;

for (const key in someObj) {
  if (typeof(someObj[key]) === 'object') {
    counter = 1;
    console.log(`Так же в объекте имеется другой объект ${key}:, со свойствами:`);
    for (const subKey in someObj[key]) {
      console.log(`${counter++}. ${subKey}, со значением: "${someObj[key][subKey]}"`);
    }
  } else {
    console.log(`${counter++}. В объекте имеется свойство ${key}, со значением: "${someObj[key]}"`);
  }
}

// получить новый массив, со свойствами объекта
console.log(Object.keys(someObj));

// можно и внутри копаться
console.log(Object.keys(someObj.another).length);

//деструктуризация объекта
const {width, wtf} = someObj.another
console.log(width);

