class Wave {
	constructor(wave) {
		this.wave = wave;
	}

	init() {
		// this.waveGrow();
		// this.waveReset();
	}

	waveReset() {
	
		this.wave.style.height = 160 + 'px';
		console.log(this.wave.style.height)
	}

	waveGrow() {
		let waveHeight = this.wave.clientHeight;
		this.wave.style.height = waveHeight + 40 + 'px';
		console.log(1)
	}

}


let wave = document.querySelector('.wave .editorial');
const waveClass = new Wave(wave);

export default waveClass;
// waveClass.init();

 