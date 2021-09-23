import waveClass from './wave.js'


let raindrop = document.querySelector('.raindrop')
const operations = ['*', '/', '+', '-'];
const startGameBlock = document.querySelector('.start-game');

let resultInput = document.querySelector('.result-input');
let count = document.querySelector('.count-number');
let gameOverCount = document.querySelector('.game-count-number')
let circle = document.createElement('div');
const gameOver = document.querySelector('.game-over');
let result;
let bonusCount = 0;
const seaSound = document.querySelector('.sea-sound')
let audioMusic = document.querySelector('.audio-music')

circle.style.animationDuration = '5s';
let rightAnswer = 0;
let isLoseGame;
let waveSize = 200;
let errors = 0;

seaSound.play();


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
		audioPlay('right')

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
		audioPlay('error');
		if (errors == 3) {
			startGame(count.textContent, isLoseGame = true)
			waveClass.waveReset();
			audioPlay('lose')
		}
	}
}

document.addEventListener('click', (e) => {
	const target = e.target;
	if (target.classList.contains('start-game-btn')) {
		 startGame()
	}
})


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


function audioPlay(loseGame) {
	console.log(loseGame)
	if (loseGame === 'lose') {
		audioMusic.src = 'audio/lose.mp3'
	} else if(loseGame === 'error') {
		audioMusic.src = 'audio/error.mp3'
	} else {
		audioMusic.src = 'audio/right.mp3'
	}
 
	audioMusic.play();
}

