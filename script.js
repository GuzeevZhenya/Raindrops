import waveClass from './wave.js'

let raindrop = document.querySelector('.raindrop')
const operations = ['*', '/', '+', '-'];
const startGameBlock = document.querySelector('.start-game');
const gameStartBtn = document.querySelectorAll('.start-game-btn');
let resultInput = document.querySelector('.result-input');
let count = document.querySelector('.count-number');
let gameOverCount = document.querySelector('.game-count-number')
let circle = document.createElement('div');
const gameOver = document.querySelector('.game-over');
let result;
let bonusCount = 0;
// let wave = document.querySelector('.wave .editorial');
circle.style.animationDuration = '5s';
let rightAnswer = 0;
let isLoseGame;
let waveSize = 200;
let errors = 0;



const {
	width
} = raindrop.getBoundingClientRect()

gameOver.style.display = "none";

function createNewRaindrop(x = 40) {
	let {
		firstNumber,
		operation,
		secondNumber
	} = generateEquationNumbers();

	switch (operation) {
		case '+':
			result = +firstNumber + +secondNumber;
			break;
		case '-':
			firstNumber = (firstNumber + secondNumber);
			result = firstNumber - secondNumber;
			break;
		case '*':
			result = firstNumber * secondNumber;
			break;
		case '/':
			firstNumber = (firstNumber * secondNumber);
			result = firstNumber / secondNumber;
			break;
	}
	circle.classList.add('circle');
	circle.style.width = `60px`;
	circle.style.height = `60px`;
	circle.style.left = `${x}px`

	raindrop.append(circle);
	circle.append(firstNumber)
	circle.append(operation)
	circle.append(secondNumber)
}

function generateEquationNumbers() {
	let firstNumber = getRandomPosition(1, 10);
	let operation = operations[Math.floor(Math.random() * operations.length)];
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

resultInput.addEventListener('change', () => {
	if (resultInput.value == result) {
		bonusCount += 1;
		resultInput.value = '';
		count.textContent = +count.textContent + 10 + bonusCount;
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}
		rightAnswer += 1;
		gameSpeed(rightAnswer)
		createNewRaindrop(getRandomPosition(0, width - 50));
	}
})

function circleLife() {
	let circleSize = parseInt(window.getComputedStyle(circle).getPropertyValue('top'));
	let windowMaxHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight) - waveSize;
	if (circleSize >= windowMaxHeight) {
		errors += 1;
		resultInput.value = '';
		waveClass.waveGrow();
		count.textContent = +count.textContent - 7 + bonusCount;
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}
		createNewRaindrop(getRandomPosition(0, width - 50));
		if (errors == 4) {
			startGame(count.textContent, isLoseGame = true)
			waveClass.waveReset();
		}
	}
}

// function waveGrow() {
// 	let waveHeight = wave.clientHeight;
// 	console.log(wave);
// 	wave.style.height = waveHeight + 40 + 'px';
// }

// function waveReset() {
// 	wave.style.height = 160 + 'px';
// }

gameStartBtn.forEach(item => item.addEventListener('click', startGame))


function startGame(loseGameCount, isLoseGame = false) {
	if (isLoseGame) {
		gameOver.style.display = "flex";
		startGameBlock.style.display = "none";
		errors = 0;
		circle.style.display = 'none';
		gameOverCount.textContent = loseGameCount;
	} else {
		count.textContent = 0;
		startGameBlock.style.display = "none";
		gameOver.style.display = "none";
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}

		circle.style.display = 'block';
		// startGameBlock.removeChild(startGameBlock.firstChild);

		createNewRaindrop(getRandomPosition(0, width - 50));
		
		setInterval(circleLife, 1000);
	}
}

function gameSpeed(rightAnswer) {
	console.log(rightAnswer)
	switch (rightAnswer) {
		case 4:
			circle.style.animationDuration = '4s';
			break;
		case 7:
			circle.style.animationDuration = '3s';
			break;
		case 11:
			circle.style.animationDuration = '2s';
			break;
		case 15:
			circle.style.animationDuration = '1s';
			break;
	}
}