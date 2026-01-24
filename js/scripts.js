/*
//Home-Work 3.1
// Number
let number = 10;
console.log(number, typeof number);
 
//String
let text = "Hello";
console.log(text, typeof text);

//Boolean
let isText = true;
console.log(isText, typeof isText);



//Home-Work 3.2
const str1 = prompt ("Перший рядок");
const str2 = prompt ("Другий рядок");
const str3 = prompt ("Третій рядок");

console.log(`${str3} ${str1} ${str2}`);



//Home-Work 3.3
const n = prompt("10369");
console.log(n.split('').join(' '));
*/

/*
//Home-Work 4.1
let userName = prompt("Будь ласка, введіть ваше ім'я:");
alert(`Hello, ${userName}! How are you?`);

//Home-Work 4.2
let number = prompt("Введіть тризначне число:");
number = Math.abs(number); // на випадок від’ємного числа

let a = Math.floor(number / 100);        // сотні
let b = Math.floor((number / 10) % 10);  // десятки
let c = number % 10;                     // одиниці

// 1. Чи всі цифри однакові?
if (a === b && b === c) {
    console.log("Усі цифри однакові");
} else {
    console.log("Не всі цифри однакові");
}

// 2. Чи є серед цифр однакові?
if (a === b || a === c || b === c) {
    console.log("Є однакові цифри");
} else {
    console.log("Усі цифри різні");
}

//Home-Work 4.3
// 1. Рік народження
let birthYear = prompt("Введіть рік вашого народження:");
if (birthYear === null) {
    alert("Шкода, що Ви не захотіли ввести свій рік народження");
} else {

    // 2. Місто
    let city = prompt("Введіть місто, в якому ви живете:");
    if (city === null) {
        alert("Шкода, що Ви не захотіли ввести своє місто");
    } else {

        // 3. Вид спорту
        let sport = prompt("Введіть ваш улюблений вид спорту:");
        if (sport === null) {
            alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту");
        } else {

            let currentYear = new Date().getFullYear();
            let age = currentYear - birthYear;

            // Повідомлення про місто
            let cityMessage = "";
            switch (city.toLowerCase()) {
                case "київ":
                    cityMessage = "Ти живеш у столиці України.";
                    break;
                case "вашингтон":
                    cityMessage = "Ти живеш у столиці США.";
                    break;
                case "лондон":
                    cityMessage = "Ти живеш у столиці Великої Британії.";
                    break;
                default:
                    cityMessage = `Ти живеш у місті ${city}.`;
            }

            // Повідомлення про спорт
            let sportMessage = "";
            switch (sport.toLowerCase()) {
                case "футбол":
                    sportMessage = "Круто! Хочеш стати Ліонелем Мессі?";
                    break;
                case "бокс":
                    sportMessage = "Круто! Хочеш стати Олександром Усиком?";
                    break;
                case "теніс":
                    sportMessage = "Круто! Хочеш стати Сереною Вільямс?";
                    break;
                default:
                    sportMessage = `Твій улюблений спорт — ${sport}.`;
            }

            // Загальне повідомлення
            alert(
                `Твій вік: ${age}\n` +
                `${cityMessage}\n` +
                `${sportMessage}`
            );
        }
    }
}

//Home-Work 4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
    case numOrStr === null:
        console.log('ви скасували');
        break;

    case numOrStr.trim() === '':
        console.log('Empty String');
        break;

    case isNaN(+numOrStr):
        console.log('number is Ba_NaN');
        break;

    default:
        console.log('OK!');
}
*/

/*
//Home-Work 5.1
let result = '';

for (let i = 20; i <= 30; i += 0.5) {
  result += i + ' ';
}

console.log(result.trim());

//Home-Work 5.2
const rate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  console.log(dollars + ' доларів = ' + (dollars * rate) + ' гривень');
}

//Home-Work 5.3
const N = Number(prompt('Введіть ціле число N'));

for (let i = 1; i <= 100; i++) {
  if (i * i <= N) break;{
    console.log(i);
  }
}

//Home-Work 5.4
const n = +prompt('Введіть число');

let prime = n > 1;

for (let i = 2; i * i <= n && prime; i++) {
  if (n % i === 0) prime = false; break;
}

console.log(prime ? 'Число просте' : 'Число не просте');
*/

/*
//Home-Work 6.1
//Об'єкта користувача
const user = {
  name: "Олексій",
  age: 25,
  city: "Київ",

  //Відображення даних
  getInfo() {
    console.log(
      `Ім'я: ${this.name}, Вік: ${this.age}, Місце проживання: ${this.city}`
    );
  }
};

user.getInfo();

//Home-Work 6.2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(num => num % 2 === 0);

console.log(evenNumbers); 



//Home-Work 6.3
const contactBook = {
  // Властивість з масивом контактів
  contacts: [
    {
      name: "Олексій",
      phone: "+380501234567",
      email: "oleksii@gmail.com"
    },
    {
      name: "Марія",
      phone: "+380671112233",
      email: "maria@gmail.com"
    }
  ],

  // Пошук нового контакта 
  findContact(name) {
    return this.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  },

  // Додаємо новий контакт 
  addContact(name, phone, email) {
    this.contacts.push({
      name,
      phone,
      email
    });
  }
};

// Додавання контакту
contactBook.addContact("Іван", "+380931234567", "ivan@gmail.com");

// Пошук контакту
const result = contactBook.findContact("Марія");
console.log(result);

// Перегляд усіх контактів
console.log(contactBook.contacts);

*/


/*
//Home-Work 7.1
function func(str, chars) {
  return str
    .split('')
    .filter(ch => !chars.includes(ch))
    .join('');
}

// приклад
const inputStr = prompt('Введіть рядок:');
const symbols = prompt('Введіть символи для видалення (без пробілів):').split('');

console.log(func(inputStr, symbols));

//Home-Work 7.2
function averageNumbers(arr) {
  let sum = 0;
  let count = 0;

  for (let item of arr) {
    if (typeof item === 'number') {
      sum += item;
      count++;
    }
  }

  return count ? sum / count : 0;
}

// приклад
const arr = [10, 'text', true, 20, null, 30, {}, 40];
console.log(averageNumbers(arr)); // 25


//Home-Work 7.3
function removeElement(array, item) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === item) {
      array.splice(i, 1);
    }
  }
  return array;
}

// приклад
const array = [1, 3, 4, 6, 2, 5, 7];
removeElement(array, 4);
console.log(array); 

*/


/*
//Home-Work 8.1
function createSum() {
  let total = 0;

  return function (num) {
    total += num;
    return total;
  };
}

const sum = createSum();

console.log(sum(4)); 
console.log(sum(6)); 
console.log(sum(10)); 
console.log(sum(7)); 


//Home-Work 8.2
function name(a) {
  return function (b) {
    return a * b;
  };
}
const result = name(5)(2);
console.log(result); 


//Home-Work 8.3
function askNumber() {
  let lastInput;

  for (let i = 0; i < 10; i++) {
    lastInput = prompt('Введіть число більше 100');
    if (+lastInput > 100) break;
  }

  console.log(lastInput);
}
*/

/*
//Home-Work 9.1
let ladder = {
  step: 0,

  up() {
    this.step++;
    return this; 
  },

  down() {
    this.step--;
    return this; 
  },

  showStep() {
    console.log(this.step);
    return this; 
  }
};
ladder
  .up()
  .up()
  .down()
  .showStep(); 
  */

/*
 //Home-Work 10.1
 function sumSalaries(data) {
  let sum = 0;
  if (Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      sum += data[i].salary;
    }
    return sum;
  }
  for (let key in data) {
    sum += sumSalaries(data[key]);
  }
  return sum;
}
console.log(sumSalaries(company)); 
*/

/*
//Home-Work 11.1
const table = document.getElementById('pifagor');

for (let i = 0; i <= 10; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j <= 10; j++) {
        const cell = document.createElement('td');

        if (i === 0 && j === 0) {
            cell.textContent = '';
        } else if (i === 0) {
            cell.textContent = j;
        } else if (j === 0) {
            cell.textContent = i;
        } else {
            cell.textContent = i * j;
        }

        row.appendChild(cell);
    }

    table.appendChild(row);
}


//Home-Work 11.2
const text = document.getElementById('text');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    text.classList.toggle('red');
});


//Home-Work 11.3
const imagesCount = 9;
const randomNumber = Math.floor(Math.random() * imagesCount) + 1;

const img = document.getElementById('randomImage');
img.src = `./images/${randomNumber}.jpg`;
console.log(randomNumber);

*/

//Home-Work 12.1
let savedLink = "";

  document.getElementById("setLink").addEventListener("click", () => {
    const link = prompt("Введіть посилання:");

    if (link) {
      savedLink = link;
      alert("Посилання збережено ");
    }
  });

  document.getElementById("goLink").addEventListener("click", () => {
    if (savedLink) {
      window.location.href = savedLink;
    } else {
      alert("Спочатку введіть посилання!");
    }
  });


  //Home-work 12.2
const container = document.getElementById("buttons-container");

container.addEventListener("click", (event) => {
  // перевіряємо, чи клік був саме по кнопці
  if (event.target.tagName === "BUTTON") {
    alert(`Клікнуто на кнопці: ${event.target.textContent}`);
  }
});


//Home-Work 12.3
const todoList = document.getElementById('todo-list');
const addTaskBtn = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task-input');
todoList.addEventListener('click', function(event) {
    if (event.target && event.target.classList.contains('delete-btn')) {
        const listItem = event.target.closest('li'); 
        if (listItem) {
            listItem.remove(); 
        }
    }
});
addTaskBtn.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const newLi = document.createElement('li');
        newLi.innerHTML = `${taskText} <button class="delete-btn">Видалити</button>`;
        todoList.appendChild(newLi);
        newTaskInput.value = '';
    }
});

             