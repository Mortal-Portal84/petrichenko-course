let numeroUno = 88;

// switch

switch (numeroUno) {
  case 87:
    console.log('Не то');
    break;
  case 89:
    console.log('И не это');
    break;
  default:
    console.log('Шняга какая-то');
}

// if and else

if (numeroUno > 100) {
  console.log('Опа!');
} else if (numeroUno < 80) {
  console.log('Heil Norsk svart-metal!');
} else {
  console.log('Совсем не то что-то...');
}

//ternary

numeroUno > 100
? console.log('Fuck you!')
: console.log('Fuck you again!');
