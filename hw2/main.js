// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let var1 = [123, 'ssf', 456, '456', undefined, true, false, null, 546, '546'];
console.log(var1);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let var2 = {title: string, pageCount: number, genre: string} = {
    title: 'book1', pageCount: 55, genre: 'someGenre1'
};
console.log(var2);
let var3 = {title: string, pageCount: number, genre: string} = {
    title: 'book2', pageCount: 65, genre: 'someGenre2'
};
console.log(var3);
let var4 = {title: string, pageCount: number, genre: string} = {
    title: 'book3', pageCount: 23, genre: 'someGenre3'
};
console.log(var4);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let var5 = {title: string, pageCount: number, genre: string} = {
    title: 'book4', pageCount: 76, genre: 'someGenre4', authors: [
        {name: 'Dima', age: 24},
        {name: 'Alex', age: 35},
    ],
};
console.log(var5);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [{name: string, username: string, password: string},
    {name: 'Dima', username: 'gsdfg', password: '23737'},
    {name: 'Maks', username: 'sgfd', password: '23731'},
    {name: 'Anna', username: 'dghfh', password: '23727'},
    {name: 'Anastasia', username: 'kjkh', password: '23737'},
    {name: 'Alex', username: 'ljj', password: '23747'},
    {name: 'Taras', username: 'jlkjj', password: '23757'},
    {name: 'Tim', username: 'czc', password: '23637'},
    {name: 'Marc', username: 'czxv', password: '23737'},
    {name: 'Olga', username: 'sdf', password: '23787'},
    {name: 'Alla', username: 'asf', password: '23797'},
];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);
console.log(users[10].password);






// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
const x = 0
if (x !== 0) {
    console.log('Вірно');
}else {
    console.log('Невірно');

}
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

const time = 33;
if (time >= 0 && time < 15) {
    console.log('першу')
} else if (time >=15 && time < 30) {
    console.log('другу')
} else if (time >=30 && time < 45) {
    console.log('третю')
} else if (time >=45 && time < 60) {
    console.log('четверту')
}



// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
const day =14;
if (day >= 1 && day <10){
    console.log('першу')
} else if (day >10 && day <20) {
    console.log('другу')
} else if (day >20 && day <31) {
    console.log('третю')
}




// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
const dayofWeek = 3;
switch (dayofWeek) {
    case 1:
        console.log('Понеділок')
        break;
    case 2:
        console.log('Вівторок')
        break;
    case 3:
        console.log('Середа')
        break;
    case 4:
        console.log('Четвер')
        break;
    case 5:
        console.log('Пятниця')
        break;
    case 6:
        console.log('Субота')
        break;
    case 7:
        console.log('Неділя')
        break;
    default:
        console.error('ERROR')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
const number1= 43
const number2= 45
if (number1 < number2) {
    console.log('друге більше', number2)
} else if (number1 > number2) {
    console.log('перше більше', number1)
} else {
    console.log('Рівні числа')
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let xx = '';
if (xx === '' || xx === number || xx === undefined || xx === null) {
    xx = 'default'
}
    console.log(xx)

//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title, 'Супер')
}if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title, 'Супер')
}if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title, 'Супер')
}if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title, 'Супер')
}if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title, 'Супер')
}if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title, 'Супер')
}