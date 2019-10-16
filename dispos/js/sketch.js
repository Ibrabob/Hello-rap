var flowers ;

function setup() {
	createCanevas (400, 400);
	flower = {
		name: "sunflower",
		col: color(200, 220, 0) 
	}
}

function draw() {
	background(0);

	fill(flower.col);
	text(flower.name, 10, 50);
}