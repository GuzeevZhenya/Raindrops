let firstNumber = document.querySelector('.first-number');
let operation = document.querySelector('.operation')
let secondNumber = document.querySelector('.second-number');
let result = document.querySelector('.result');
let resultInput = document.querySelector('.result-input');
let answerPlate = document.querySelector('.answer-plate');
let count = document.querySelector('.count');

function mathExample(min=1, max=10) {
	let operations = ['*', '/', '+', '-'];
	min = Math.ceil(min);
	max = Math.floor(max);
	firstNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
	operation.textContent = operations[Math.floor(Math.random() * operations.length)];
	secondNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
	
	if (operation.textContent == '/') {
		firstNumber.textContent = (firstNumber.textContent * secondNumber.textContent);
	}

	switch (operation.textContent) {
		case '+':
			result = +firstNumber.textContent + +secondNumber.textContent;
			break;
		case '-':
			result = firstNumber.textContent - secondNumber.textContent;
			break;
		case '*':
			result = firstNumber.textContent * secondNumber.textContent;
			break;
		case '/':
			result = firstNumber.textContent / secondNumber.textContent;
			break;
	}
}
mathExample(1,10)

resultInput.addEventListener('change', () => {

	if (resultInput.value == result) {
		count.textContent = +count.textContent + 10;
		answerPlate.textContent = 'Правильно'
	} else {
		count.textContent = +count.textContent - 5;
		answerPlate.textContent = 'Не правильно'
	}
	resultInput.value = '';
	mathExample(1, 10)
})