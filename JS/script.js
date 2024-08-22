'use strict';

// Завдання:
// 1. Перевірка на парність числа. Напишіть функцію isEven, яка приймає число, яке вводить користувач,
// в якості аргументу і повертає проміс, яка поверне "Це парне число", якщо число парне (resolve), і
// "Помилка, число не парне", якщо число непарне (reject).

// let isEven = number => {
// 	return new Promise((resolve, reject) => {
// 		number % 2 === 0
// 			? resolve('парне число')
// 			: reject('помилка, число не парне');
// 	});
// };
// let number = +prompt('Введіть число');
// isEven(number)
// 	.then(data => console.log(data))
// 	.catch(err => console.error(err));

// 2. Випадкова затримка. Напишіть функцію, яка повертає проміс з випадковою затримкою від 1 до 5 секунд.

// let randomDelay = () => {
// 	return new Promise(resolve => {
// 		const delay = Math.floor(Math.random() * 5000) + 1000;
// 		setTimeout(() => {
// 			resolve(`Затримка ${delay}`);
// 		}, delay);
// 	});
// };
// randomDelay().then(info => console.log(info));

// 3. Виконання промісу з ймовірністю успіху. Напишіть функцію, яка повертає проміс, яка має вказану
// ймовірність успішного виконання (наприклад, 70%). Успішне виконання повинно повертати "Успіх", а
// невдачу - "Помилка".

// let probabilitySuccess = numberSuccess => {
// 	return new Promise((resolve, reject) => {
// 		const randomNumber = Math.random() * 100;
// 		randomNumber < numberSuccess ? resolve('Успіх') : reject('Помилка');
// 	});
// };
// probabilitySuccess(70)
// 	.then(success => console.log(success))
// 	.catch(error => console.error(error));

// 4.* Виконання послідовних операцій. Напишіть послідовність з чотирьох промісів, де перший повертає
// випадкове число від 1 до 100, другий множить його на 10, третій перетворює результат в масив чисел, а
//  четвертий сортує числа по зростанню. 87 -> 870 -> [8, 7, 0] -> [0, 7, 8]. Затримка кожного промісу
// має бути більше на 1с за затримку минулого і на кожному етапі має виводитись в консоль проміжний результат.
// const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
// const promise = new Promise(resolve => {
// 	const result = Math.floor(Math.random() * 100);
// 	setTimeout(() => {
// 		resolve(result);
// 	}, 1000);
// })
// 	.then(result => {
// 		console.log(result);
// 		return delay(2000).then(() => result * 10);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		let arr = Array.from(String(result), Number);

// 		return delay(3000).then(() => arr);
// 	})
// 	.then(result => {
// 		console.log(result);
// 		result.sort((a, b) => a - b);
// 		return delay(4000).then(() => result);
// 	})
// 	.then(result => {
// 		console.log(result);
// 	});

// 5. Завдання зі статті: https://uk.javascript.info/promise-basics
// 5.1 будована функція setTimeout використовує колбек-функції. Створіть альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд,
// так щоб ми могли додати до нього .then:

// function delay(ms) {
// 	return new Promise(resolve => {
// 		setTimeout(() => resolve(), ms);
// 	});
// }
// delay(3000).then(() => alert('виконалось через 3 секунди'));
