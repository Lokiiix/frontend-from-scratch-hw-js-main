/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function findCommonElements(arr1, arr2) {
	const common = [];
	for (const element of arr1) {
		if (arr2.includes(element) && !common.includes(element)) {
			common.push(element);
		}
	}
	return common;
}

// Пример использования:
const array1 = [1, 2, 3, 4, 5, 6];
const array2 = ["true", 2, 3, 4, 5, "false"];
console.log(findCommonElements(array1, array2)); // [2, 3, 4, 5]
