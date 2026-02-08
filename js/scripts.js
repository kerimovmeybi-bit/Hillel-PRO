//Home-work16.1
function Student(name, surname, birthYear, grades) {
  this.name = name;
  this.surname = surname;
  this.birthYear = birthYear;
  this.grades = grades;
  this.attendance = new Array(25); // масив на 25 занять
}

// Вік студента
Student.prototype.getAge = function () {
  const currentYear = new Date().getFullYear();
  return currentYear - this.birthYear;
};

// Середній бал
Student.prototype.getAverageGrade = function () {
  const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / this.grades.length;
};

// Відмітка присутності
Student.prototype.present = function () {
  const index = this.attendance.indexOf(undefined);
  if (index !== -1) {
    this.attendance[index] = true;
  }
};

// Відмітка відсутності
Student.prototype.absent = function () {
  const index = this.attendance.indexOf(undefined);
  if (index !== -1) {
    this.attendance[index] = false;
  }
};

// Підсумок
Student.prototype.summary = function () {
  const avgGrade = this.getAverageGrade();

  const attendedClasses = this.attendance.filter(v => v === true).length;
  const totalClasses = this.attendance.filter(v => v !== undefined).length;
  const attendanceRate = totalClasses ? attendedClasses / totalClasses : 0;

  if (avgGrade > 90 && attendanceRate > 0.9) {
    return "Молодець!";
  }

  if (avgGrade > 90 || attendanceRate > 0.9) {
    return "Добре, але можна краще";
  }

  return "Редиска!";
};
const student1 = new Student("Іван", "Петренко", 2001, [95, 92, 98, 100]);
const student2 = new Student("Олена", "Коваль", 2000, [78, 82, 85, 80]);

// Відвідуваність
student1.present();
student1.present();
student1.present();
student1.absent();

student2.present();
student2.absent();
student2.absent();

// Перевірка
console.log(student1.getAge());
console.log(student1.getAverageGrade());
console.log(student1.summary()); // "Молодець!"

console.log(student2.getAge());
console.log(student2.getAverageGrade());
console.log(student2.summary()); // "Редиска!"

