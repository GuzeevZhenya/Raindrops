let raindrop = document.querySelector('.raindrop')
const operations = ['*', '/', '+', '-'];
const startGameBlock = document.querySelector('.start-game');
const gameStartBtn = document.querySelectorAll('.start-game-btn');
const restartBtn = document.querySelector('.restart-btn');
let resultInput = document.querySelector('.result-input');
let count = document.querySelector('.count-number');
let circle = document.createElement('div');
const gameOver = document.querySelector('.game-over');
let result;
let bonusCount = 0;
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

let waveSize = 200;
let errors = 0;


resultInput.addEventListener('change', () => {
	if (resultInput.value == result) {
		bonusCount += 1;
		resultInput.value = '';
		count.textContent = +count.textContent + 10 + bonusCount;
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}
		createNewRaindrop(getRandomPosition(0, width - 50));
	}
})

function circleLife() {
	let circleSize = parseInt(window.getComputedStyle(circle).getPropertyValue('top'));
	let windowMaxHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight) - waveSize;
	if (circleSize >= windowMaxHeight) {
		errors += 1;
		resultInput.value = '';
		waveGrow();
		count.textContent = +count.textContent - 7 + bonusCount;
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}
		if (errors == 1) {
			startGame(count.textContent, isLoseGame = true)
		}
	}
}

function waveGrow() {
	let wave = document.querySelector('.wave .editorial');
	let waveHeight = wave.clientHeight;
	wave.style.height = waveHeight + 40 + 'px';
}

gameStartBtn.forEach(item=>item.addEventListener('click',startGame))
// gameStartBtn.addEventListener('click', startGame);

function startGame(count, isLoseGame = false) {
	console.log(1)
	if (isLoseGame) {
		console.log(2)
		gameOver.style.display = "block";
		startGameBlock.style.display = "none";
		// startGameBlock.style.display = 'block';
		// let loseGameText = document.createElement('p');
		// let counter = document.createElement('p');

		// loseGameText.textContent = 'Game Over';
		// counter.textContent = `Ваш счет ${count}`;
		// gameStartBtn.textContent = 'restart';

		// startGameBlock.prepend(counter);
		errors = 0;
		circle.style.display = 'none';
	} else {
		console.log(3)
		startGameBlock.style.display = "none";
		gameOver.style.display = "none";
		
		startGameBlock.removeChild(startGameBlock.firstChild);
		circle.style.display = 'block';
		createNewRaindrop(getRandomPosition(0, width - 50));
		setInterval(circleLife, 1000);
	}
}

