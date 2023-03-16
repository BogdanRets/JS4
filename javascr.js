/*Напишіть функцію map(fn, array), яка приймає на вхід функцію та масив, та обробляє кожен елемент масиву цією функцією, повертаючи новий масив.*/


let arr = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10];

function fn(number) {
   let newarr = [];
    for (let i = 0; i <= arr.length; i++) {
        if (number[i] % 20 === 0) {
            newarr.push(number[i]);
        }
    }
    document.write("Числа, які націло діляться на 20: " + newarr.join(" "));
}

function map(fn, array) {
    return fn(array);
}

map(fn, arr)


// Перепишіть функцію за допомогою оператора '?' або '||'
// Наступна функція повертає true, якщо параметр age більше 18. В іншому випадку вона ставить питання confirm і повертає його результат.
// function checkAge(age) {
// if (age > 18) {
// return true;
//  else {
// return confirm('Батьки дозволили?');} }


const vik = parseInt(prompt("Введіть свій вік:"));

function checkAge(age) {
    return (age >= 18) ? true + console.log(`Вік користувача: ${vik}`) : confirm(`Батьки дозволили?`) + console.log(`Вік користувача: ${vik}`);
}

checkAge(vik);
