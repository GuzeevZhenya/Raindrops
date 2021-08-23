let result = document.querySelector('.result');
let resultInput = document.querySelector('.result-input');
let answerPlate = document.querySelector('.answer-plate');
let count = document.querySelector('.count-number');
let windowMaxWidth = window.screen.availWidth - (window.outerWidth - window.innerWidth);
let capelca = document.querySelector('.capelca')


let raindrop = document.querySelector('.raindrop')
let operations = ['*', '/', '+', '-'];

let errors = 0;

let circle = document.createElement('div');
let circle1 = document.createElement('div')

 
function createRandomCircle(max, min) {
	min = Math.ceil(min);
	max = Math.floor(max);

	const {
		width,
		height
	} = raindrop.getBoundingClientRect()

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

	circle.classList.add('circle');
	circle.style.width = `60px`;
	circle.style.height = `60px`;
	circle.style.left = `${x}px`

	raindrop.append(circle);
	circle.append(firstNumber)
	circle.append(operation)
	circle.append(secondNumber)

}

createRandomCircle(1, 10)


function getRandomPosition(min, max) {
	return Math.round(Math.random() * (max - min) + min)
}

function alive() {
	setInterval( function() {
	let wave = document.querySelector('.wave .editorial');
	let waveHeight = wave.clientHeight;
	let circleSize = parseInt(window.getComputedStyle(circle).getPropertyValue('top'));
	let windowMaxHeight = window.screen.availHeight - (window.outerHeight - window.innerHeight) - waveHeight;
	let bonusCount = 0;


	resultInput.addEventListener('change', () => {
		if (resultInput.value == result) {
			console.log(result,resultInput.value)
			bonusCount += 1;
			resultInput.value = '';
			count.textContent = +count.textContent + 10 + bonusCount;
			while (circle.firstChild) {
				circle.removeChild(circle.firstChild);
			}
			createRandomCircle(1, 10);
		} 
	})
	if (circleSize >= windowMaxHeight) {
		errors += 1;
		let waveSize = 5;
		resultInput.value = '';
		// wave.style.height =  waveHeight + 40 + 'px';
		count.textContent = +count.textContent - 7 + bonusCount;
		while (circle.firstChild) {
			circle.removeChild(circle.firstChild);
		}
		createRandomCircle(1, 10);
	}
	// if (errors == 1) {
	// 	gameOverBlock();
	// 	window.clearInterval(stopInterval);
	// }

	})
}
 
setInterval(alive,300)




function gameOverBlock() {
	let gameOver = document.createElement('div');
	gameOver.classList.add('game-over');
	raindrop.append(gameOver);
	gameOver.textContent = 'Game Over';
	gameOver.style.display = 'flex';
}

