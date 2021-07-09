
let bubbles = [];

function setup() {
	createCanvas(600, 400);
	for (let i =0; i < 10; i++) {
		const x = random(width);
		const y = random(height);
		bubbles.push(new Bubble(x, y));
	}
}

function draw() {
	background(0);
	for (let i = 0; i < bubbles.length; i++) {
		bubbles[i].move();
		bubbles[i].display();
	}
}

function Bubble(x, y) {
	this.x = x;
	this.y = y;

	this.display = function() {
		stroke(255);
		fill(255, 150);
		ellipse(this.x, this.y, 48, 48);
	}

	this.move = function() {
		this.x = this.x + random(01, 1);
		this.y = this.y + random(01, 1);
	}
}

