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


