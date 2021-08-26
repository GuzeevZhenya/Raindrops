let raindrop = document.querySelector('.raindrop')
let operations = ['*', '/', '+', '-'];
const gameStartBtn = document.querySelector('.start-game-btn');
let resultInput = document.querySelector('.result-input');
let count = document.querySelector('.count-number');
let circle = document.createElement('div');
let result;

	// const startGame = document.querySelector('.start-game');
	// startGame.style.display = 'none';

gameStartBtn.addEventListener('click', () => {
	const startGame = document.querySelector('.start-game');
	startGame.style.display = 'none';
	createNewCapelca(getRandomPosition(0, width - 50));
})

const {
	width
} = raindrop.getBoundingClientRect()

function createNewCapelca(x = 40) {
	let {
		firstNumber,
		operation,
		secondNumber
	} = addCapelcaNumbers();

	circle.classList.add('circle');
	circle.style.width = `60px`;
	circle.style.height = `60px`;
	circle.style.left = `${x}px`


	if (operation == '/') {
		firstNumber= (firstNumber * secondNumber);
	}
	if (operation == '-') {
		firstNumber = (firstNumber + secondNumber);
	}

	switch (operation) {
		case '+':
			result = +firstNumber + +secondNumber;
			break;
		case '-':
			result = firstNumber - secondNumber;
			break;
		case '*':
			result = firstNumber * secondNumber;
			break;
		case '/':
			result = firstNumber / secondNumber;
			break;
	}


	raindrop.append(circle);
	circle.append(firstNumber)
	circle.append(operation)
	circle.append(secondNumber)
}

function addCapelcaNumbers() {
	let firstNumber = getRandomPosition(1, 10);
	let operation = operations[Math.floor(Math.random() * operations.length)];;
	let secondNumber = getRandomPosition(1, 10);
	return {
		firstNumber,
		operation,
		secondNumber
	}
}

function getRandomPosition(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

// createNewCapelca(getRandomPosition(0, width - 50));
let waveSize = 200;

function circleLife() {
	let circleSize = parseInt(window.getComputedStyle(circle).getPropertyValue('top'));
	let windowMaxHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight) - waveSize;
	let bonusCount = 0;

	resultInput.addEventListener('change', () => {
		if (resultInput.value == result) {
			bonusCount += 1;
			resultInput.value = '';
			count.textContent = +count.textContent + 10 + bonusCount;
			while (circle.firstChild) {
				circle.removeChild(circle.firstChild);
			}
			createNewCapelca(getRandomPosition(0, width - 50));
		}
	})
}
circleLife();

// let resultInput = document.querySelector('.result-input');
// let count = document.querySelector('.count-number');

// let raindrop = document.querySelector('.raindrop')
// let operations = ['*', '/', '+', '-'];
// let errors = 0;
// let circle = document.createElement('div');


// function createRandomCircle(max, min) {
// 	min = Math.ceil(min);
// 	max = Math.floor(max);

// 	const {
// 		width,
// 		height
// 	} = raindrop.getBoundingClientRect()

// 	const x = getRandomPosition(0, width - 50);
// 	const firstNumber = document.createElement('p')
// 	const operation = document.createElement('p')
// 	const secondNumber = document.createElement('p')

// 	firstNumber.classList.add('first-number')
// 	operation.classList.add('operation')
// 	secondNumber.classList.add('second-number')


// 	firstNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;
// 	operation.textContent = operations[Math.floor(Math.random() * operations.length)];
// 	secondNumber.textContent = Math.floor(Math.random() * (max - min + 1)) + min;

// 	if (operation.textContent == '/') {
// 		firstNumber.textContent = (firstNumber.textContent * secondNumber.textContent);
// 	}
// 	if (operation.textContent == '-') {
// 		firstNumber.textContent = (firstNumber.textContent + secondNumber.textContent);
// 	}

// 	switch (operation.textContent) {
// 		case '+':
// 			result = +firstNumber.textContent + +secondNumber.textContent;
// 			break;
// 		case '-':
// 			result = firstNumber.textContent - secondNumber.textContent;
// 			break;
// 		case '*':
// 			result = firstNumber.textContent * secondNumber.textContent;
// 			break;
// 		case '/':
// 			result = firstNumber.textContent / secondNumber.textContent;
// 			break;
// 	}

// 	circle.classList.add('circle');
// 	circle.style.width = `60px`;
// 	circle.style.height = `60px`;
// 	circle.style.left = `${x}px`

// 	raindrop.append(circle);
// 	circle.append(firstNumber)
// 	circle.append(operation)
// 	circle.append(secondNumber)
// }

// createRandomCircle(1, 10)


// function getRandomPosition(min, max) {
// 	return Math.round(Math.random() * (max - min) + min)
// }


// let waveSize = 160;

// let alive = setInterval(function () {
// 	let circleSize = parseInt(window.getComputedStyle(circle).getPropertyValue('top'));
// 	let windowMaxHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight)-waveSize;
// 	let bonusCount = 0;

// 	resultInput.addEventListener('change', () => {
// 		if (resultInput.value == result) {
// 			bonusCount += 1;
// 			resultInput.value = '';
// 			count.textContent = +count.textContent + 10 + bonusCount;
// 			while (circle.firstChild) {
// 				circle.removeChild(circle.firstChild);
// 			}
// 			createRandomCircle(1, 10);
// 		} 
// 	})
// 	if (circleSize >= windowMaxHeight) {
// 			errors += 1;
// 			resultInput.value = '';
// 			waveGrow();
// 			count.textContent = +count.textContent - 7 + bonusCount;
// 			while (circle.firstChild) {
// 				circle.removeChild(circle.firstChild);
// 			}
// 			createRandomCircle(1, 10);
// 			if(errors ==1){
// 				gameOverBlock(count.textContent)
// 				circle.style.display = 'none';
// 				clearInterval(alive);
// 			}
// 	}

// },1500)

// function waveGrow() {
// 	let wave = document.querySelector('.wave .editorial');
// 	let waveHeight = wave.clientHeight;
// 	wave.style.height =  waveHeight + 40 + 'px';
// }


// function gameOverBlock(count) {
// 	let gameOver = document.querySelector('.game-over');
// 	let newGameButton = document.querySelector('.restart-btn');
// 	gameOver.style.display = 'block';
// 	startNewGame(newGameButton)
// }

// function startNewGame(button){
// 	button.addEventListener('click',()=>{
// 	// window.location.reload() // ну тут у меня случились беды с головой,зато рабочий вариант)
// 	circle.style.display = 'block';

// 	})
// }