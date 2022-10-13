const someArr = [14, 88, 666 ,13, 16, 108]
//* цикл для массива, позволяющий перебрать его элементы */
const eachElement = someArr.forEach((item, index, array) => console.log(`${index + 1}. Массив [${array}] содержит в себе значение ${item}`))
// console.log(eachElement);

const someStr = prompt('', '')
/* разделить получаемые через запятую слова в строке и передать их в новый массив someSplit */
const someSplit = someStr.split(', ');
/* превратить массив в строку, резделив каждый элемент массива указанным в методе символом*/
const someJoin = someSplit.join('; ')
/* метод сортирует все элементы массива (строки) в алфавитном порядке */
const someSort = someSplit.sort()
/* цифры в массиве сортируются эим же методом, но с помощью специальной функции */
const digitSort = someSplit.sort((a, b)=> a - b)

console.log(someSplit);
console.log(someJoin);
console.log(someSort);
console.log(digitSort);
