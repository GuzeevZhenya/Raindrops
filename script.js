let firstNumber = document.querySelector('.first-number');
let operation = document.querySelector('.operation')
let secondNumber = document.querySelector('.second-number');
let result = document.querySelector('.result')

function mathExample() {
	let operations = ['*','/','+','-']
	firstNumber.textContent = Math.floor(Math.random() * (20 + 1 - 1));
	operation.textContent = operations[Math.floor(Math.random() * operations.length)];
	secondNumber.textContent = Math.floor(Math.random() * (20 + 1 - 1));

	if (operation.textContent == '/') {
		firstNumber.textContent = (firstNumber.textContent * secondNumber.textContent);
	}


 
	switch (operation.textContent) {
		case '+':
			result.textContent = +firstNumber.textContent + +secondNumber.textContent;
			break;
		case '-':
			result.textContent = firstNumber.textContent - secondNumber.textContent;
			break;
		case '*':
			result.textContent = firstNumber.textContent * secondNumber.textContent;
			break;
		case '/':
			result.textContent = firstNumber.textContent / secondNumber.textContent;
			break;
	}
}

mathExample();