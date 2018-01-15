//Priyanka Makin, 06/10/2017
//ATLS3000 - Code, PC1
//For description, please see: www.priyankamakin.com/code/


function setup() {
	createCanvas(400,400);
}

function draw() {
	//background color
	background(255, 255, 204);

	//yellow triangle
	strokeWeight(0);
	fill(255, 153, 51, 130);
	triangle(-60, 330, -50, 500, 460, -70);

	//blue triangle
	strokeWeight(0);
	fill(0, 102, 153, 150);
	triangle(-100, -150, 600, 600, 600, 400);

	//mini red circle, top-middle
	stroke(0);
	strokeWeight(2);
	fill(204, 0, 0);
	ellipse(155, 60, 8.5, 8.5);

	//medium purple circle, top-left
	strokeWeight(1);
	fill(204, 102, 153, 70);
	ellipse(150, 126, 85, 85);

	//medium-small yellow cirlce, bottom-right
	stroke(0);
	strokeWeight(1);
	fill(255, 255, 102, 170);
	ellipse(255, 256, 65, 65);

	//mini black circle on top of circle described above
	strokeWeight(0);
	fill(0);
	ellipse(272, 278, 17, 17);

	//mini purple circle, bottom-right
	stroke(0);
	strokeWeight(1);
	fill(102, 0, 102, 175);
	ellipse(307, 293, 15, 15);

	//small blue circle, middle-right
	stroke(0);
	strokeWeight(1);
	fill(0, 102, 153);
	ellipse(307, 195, 32, 32);

	//medium blue circle in the middle-right
	strokeWeight(0);
	fill(0, 102, 102, 200);
	ellipse(267, 195, 90, 90);

	//medium yellow circle in the back
	strokeWeight(1);
	fill(255, 255, 102, 250);
	ellipse(148, 235, 95, 95);

	//small red circle, bottom-left
	stroke(0);
	strokeWeight(1);
	fill(204, 0, 0, 210);
	ellipse(140, 275, 35, 35);

	//small blue circle, bottom-left
	stroke(0);
	strokeWeight(2);
	fill(51, 102, 153, 150);
	ellipse(103, 253, 26, 26);

	//medium red circle, top-center
	strokeWeight(0);
	fill(204, 0, 0, 160);
	ellipse(202, 153, 68, 68);

	//small blue circle, middle-left
	stroke(0);
	strokeWeight(1);
	fill(51, 102, 153, 130);
	ellipse(145, 171, 42, 42);

	//small dark-purple circle, top-right
	strokeWeight(0);
	fill(102, 0, 102, 200);
	ellipse(270, 120, 50, 50);

	//mini black circle, top-right
	strokeWeight(0);
	fill(0);
	ellipse(240, 137, 27, 27);

	//mini black circle below the one defined above
	strokeWeight(0);
	fill(0);
	ellipse(272, 170, 17, 17);

	//large gray/green circle in the middle-ish
	strokeWeight(0);
	fill(153, 153, 102, 210);
	ellipse(185, 225, 125, 125);

	//mini red circle, center
	strokeWeight(0);
	fill(204, 0, 0, 200);
	ellipse(195, 250, 12, 12);

	//small red circle in the middle
	stroke(0);
	strokeWeight(2);
	fill(204, 0, 0, 80);
	ellipse(180, 197, 47, 47);

	//small black circle inside red circle defined above
	strokeWeight(0);
	fill(0, 0, 0);
	ellipse(180, 197, 12, 12)

	//mini red circle, bottom-middle
	strokeWeight(0);
	fill(204, 0, 0, 200);
	ellipse(180, 295, 7, 7);

	//mini black circle, bottom-middle
	strokeWeight(0);
	fill(0);
	ellipse(160, 300, 5, 5);

	//mini yellow circle, bottom-right
	strokeWeight(0);
	fill(255, 255, 102, 250);
	ellipse(232, 305, 10, 10);

	//mini pink circle, bottom-right
	strokeWeight(1);
	fill(204, 102, 153, 175);
	ellipse(220, 332, 17, 17);

	//mini redish circle, bottom-left
	strokeWeight(0);
	fill(204, 102, 153, 175);
	ellipse(85, 295, 20, 20);

	//mini blue circle, middle-left
	strokeWeight(2);
	fill(51, 102, 153);
	ellipse(57, 245, 9, 9);

	//red circle, middle-left
	strokeWeight(4);
	fill(204, 0, 0);
	ellipse(75, 200, 17, 17);

	//y=x
	strokeWeight(2);
	line(130, 330, 275, 65);

	//y=-x/4
	strokeWeight(2);
	line(80, 110, 320, 145);

	//y=-x/2
	strokeWeight(2);
	line(50, 215, 330, 270);

	//y=-4x
	strokeWeight(2);
	line(285, 133, 292, 298);

	//y=-x
	strokeWeight(1);
	line(60, 228, 270, 330);

	//y=-2x
	strokeWeight(0.5);
	line(110, 90, 330, 230);

	//y=-x/8
	strokeWeight(0.5);
	line(65, 250, 320, 280);

	//y=2x
	strokeWeight(1);
	line(75, 270, 210, 100);

	//y=x
	strokeWeight(0.5);
	line(55, 225, 180, 120);

	//y=-x/2, the two parallel lines
	strokeWeight(0.5);
	line(57, 175, 330, 240);
	strokeWeight(0.5);
	line(56, 185, 329, 250);

	//two small lines, top-middle
	strokeWeight(1);
	line(198, 93, 210, 110);
	strokeWeight(1);
	line(194, 100, 205, 115);

	//three, long parallel lines, right side
	strokeWeight(0.5);
	line(270, 91, 235, 330);
	strokeWeight(1);
	line(274, 86, 238, 340);
	strokeWeight(0.5);
	line(280, 81, 243, 350);

	//two short parallel lines, top-right
	strokeWeight(1);
	line(280, 150, 297, 149);
	line(282, 155, 303, 154);

	//three parallel line, bottom-right
	strokeWeight(0.5);
	line(228, 317, 264, 300);
	line(230, 323, 266, 307);
	line(232, 329, 268, 314);

	//two lines near the one going straight through the painting
	strokeWeight(0.5);
	line(104, 325, 275, 65);
	line(112, 328, 275, 65);

	//'x', bottom-left
	strokeWeight(1);
	line(110, 300, 160, 330);
	line(90, 315, 165, 305);

	//three random lines, middle-left
	strokeWeight(0.5);
	line(70, 165, 55, 195);
	line(77, 165, 59, 192);
	line(90, 175, 85, 195);

	//largest circle
	stroke(0);
	strokeWeight(16);
	fill(255, 255, 0, 0);
	ellipse(200, 200, 350, 350);
}