class Raindrops{
	constructor({
		raindrops,operation,width,firstNumber,secondNumber
	}) {
		this.raindrops = document.querySelector(raindrops);
		this.operation = operation;
		this.firstNumber = firstNumber;
		this.secondNumber = secondNumber;

		let {
			this.firstNumber,
			this.operation,
			this.secondNumber
		} = generateEquationNumbers();
	
	}

	createNewRaindrop(x = 40) {
		switch (this.operation) {
			case '+':
				result = +this.firstNumber + +this.secondNumber;
				break;
			case '-':
				firstNumber = (this.firstNumber + this.secondNumber);
				result = this.firstNumber - this.secondNumber;
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

}

const options = {
	raindrops: '.raindrop',
	operation: '[' * ', ' / ', ' + ', ' - ']',
	firstNumber:''
}

const {
	width
} = raindrop.getBoundingClientRect()


const raindropClass = new Raindrops(options);

export default raindropClass;