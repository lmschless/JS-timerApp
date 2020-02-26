const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
	onStart(totalDuration) {
		duration = totalDuration;
	},
	onTick(timeRemaining) {
		circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
	},
	onComplete() {
		console.log('Timer is completed');
	}
});

// Timer project info -

// -play button
// -pause button
// -animated border that counts down
// -displays a timer in center

// class Timer (use constructor function.)
// start() (play button)
// pause() (pause button)
// onDurationChange()
// tick()

// const colors = {
// 	printColor() {
// 		console.log(this);
// 	}
// };

// const randomObject = {
// 	a: 1
// };

// randomObject.printColor = colors.printColor;

// randomObject.printColor();
