class Wave {
	constructor() {
		this.wave = document.querySelector('.wave .editorial');
	}

	waveReset() {
		this.wave.style.height = 160 + 'px';
	}

	waveGrow() {
		let waveHeight = this.wave.clientHeight;
		this.wave.style.height = waveHeight + 40 + 'px';
	}
}

// let wave = document.querySelector('.wave .editorial');
const waveClass = new Wave();

export default waveClass;
