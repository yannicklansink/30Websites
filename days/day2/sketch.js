/*
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
*/

// next function setup
let numberOfClicks = 0
let bgcolor;
let x;
let y;

function setup() {
	canvas = createCanvas(500, 500);
	canvas.position(400, 200);
	h1 = createElement("h1", "I dare you to click the page...")
	bgcolor = color(200);
	x = color(50);
	y = color(255);
}

function mousePressed() {
	let arrayOfWords = ["Well done!", "You are awesome! :)", "Do it again!"];
	let i = Math.floor(Math.random() * 3);
	h1.html(arrayOfWords[i]);
	numberOfClicks++
	createP("Clicked the page: " + numberOfClicks + " times.");
	bgcolor = color(random(255));
	x = color(random(255));
	y = color(random(255));
}

function draw() {
	background(bgcolor)
	ellipse(50, 50, 80, 80);
	rect(100, 100, 50, 50);
	fill(50, 50, 100);
}

