function Person(name, age) {         // 1 Название с большой буквы
    this.name = name;                   // свойства
    this.age = age;
   
    this.showName = function () {         // метод - функция связанная с объектом
        console.log(this.name);
    };
    this.showAge = function () {
        console.log(this.age);
    };
    this.checkAccess = function () {
        if (this.age < 18) {
            console.log('В доступе отказано.');
        } else {
            console.log('Смотри хоть все 18+');
        }
    };
}

var petr = new Person('Petr', 15);    // 2. используем new
petr.showName();
petr.showAge();
petr.checkAccess();

var ivan = new Person('Ivan', 30)
ivan.showName(); // -> Ivan
ivan.showAge();  // -> 30
ivan.checkAccess();

var max = new Person('Max', 25)
max.showName(); // -> Max
max.showAge();  // -> 25


/*
Cat
свойства
- name
- health   от 1 до 100
- hungry   от 1 до 100
- happines от 1 до 100

методы
- feed() -> hungry -= 10 health += 2 happines += 3
- play() -> happines += 20
- passDay() -> hungry += 30 happines -= 10

*/