/* Объекты и массивы не так просто клонировать, создание новой переменной и помещение туда ранее
 объявленного объекта не то что нам нужно. Если мыв "новом" объекте будем проводить какие-то
 изменения, они коснутся и старых, т.е. старые массивы/объекты тоже изменятся
 Способы "клонирования" объектов и массивов:*/

// 1. функция, через цикл for in / for of
// PS. Однако, если мы захотим изменить объект в объекте - он изменится в обоих объектах/массивах =(
const oldObj = {
  a: 14,
  b: 88,
  c: {
    d: 666
  }
}

const cloneObj = (mainObj) => {
  // let key;
  let objCopy = {}
  for (const key in oldObj) {
    objCopy[key] = mainObj[key]
  }
  return objCopy
}

const newObj = cloneObj(oldObj)
// console.log(newObj);

// 2. Object.asign()
const secondObj = {
  f: 16,
  g: 108,
}

const asignedObj = Object.assign(oldObj, secondObj)
// console.log(asignObj);
// можно и с пустым объектом, если мы хотим клонировать 1 объект
const justClonedObj = Object.assign({}, secondObj)
// console.log(justClonedObj)

//3. arr.slice() для массивов
const oldArr = [1, true, {a: 1}, 'fuck you!']

const newArr = oldArr.slice();
newArr[1] = false;

console.log(oldArr);
console.log(newArr);

// 4. spread-оператор ("разворачивающий оператор"). С объектами работает аналогично.

const someArr = ['Kurukujamba', 'Zimbabve', 'New Gwinea']
const spreadArr = [...newArr, ...someArr, 2, {newProperty: true}]
console.log(spreadArr);

// так же spread-оператор можно передавать и в функцию:
const digitArray = [2, 2, 14]

const plusDigits = (a, b, c) => a * b * c
console.log(plusDigits(...digitArray));
