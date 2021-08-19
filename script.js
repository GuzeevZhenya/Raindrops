// let firstNumber = document.querySelector('.first-number');
// let operation = document.querySelector('.operation')
// let secondNumber = document.querySelector('.second-number');
let result = document.querySelector('.result');
let resultInput = document.querySelector('.result-input');
let answerPlate = document.querySelector('.answer-plate');
let count = document.querySelector('.count-number');
let windowMaxWidth = window.screen.availWidth - (window.outerWidth - window.innerWidth);
let capelca = document.querySelector('.capelca')


let raindrop = document.querySelector('.raindrop')
let operations = ['*', '/', '+', '-'];



function mathExample(min=1, max=10) {
	// min = Math.ceil(min);
	// max = Math.floor(max);
	// firstNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
	// operation.textContent = operations[Math.floor(Math.random() * operations.length)];
	// secondNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
	
	if (operation.textContent == '/') {
		firstNumber.textContent = (firstNumber.textContent * secondNumber.textContent);
	}
	if (operation.textContent == '-') {
		firstNumber.textContent = (firstNumber.textContent + secondNumber.textContent);
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



//Работа с падением объекта
// function capelcaMove(max,min) {
// 	 capelca.style.left = `${min}px`
// }

// capelcaMove(windowMaxWidth,0)


let circle = document.createElement('div');

function createRandomCircle(max,min) {
	min = Math.ceil(min);
	max = Math.floor(max);

	const {width,height} = raindrop.getBoundingClientRect()
	const x = getRandomPosition(0, width - 50);

	const firstNumber = document.createElement('p')
	const operation = document.createElement('p')
	const secondNumber = document.createElement('p')
	
	firstNumber.classList.add('first-number')
	operation.classList.add('operation')
	secondNumber.classList.add('second-number')


	firstNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
	operation.textContent = operations[Math.floor(Math.random() * operations.length)];
	secondNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;

	circle.classList.add('circle');
	circle.style.width = `60px`;
	circle.style.height = `60px`;
	circle.style.left = `${x}px`

	raindrop.append(circle);
	circle.append(firstNumber)
	circle.append(operation)
	circle.append(secondNumber)
}

createRandomCircle(1,10);



function getRandomPosition(min, max) {
	return Math.round(Math.random()*(max-min)+min)
}


let alive = setInterval(function () {
	let wave = document.querySelector('.wave .editorial');
	let waveHeight = wave.clientHeight;
	let circleSize = parseInt(window.getComputedStyle(circle).getPropertyValue('top'));
	let windowMaxHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight) - waveHeight;

	if (circleSize >= windowMaxHeight) {
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}
		createRandomCircle(1, 10);
	}
 
}, 100)


