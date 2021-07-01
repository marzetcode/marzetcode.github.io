function drawBody() {
	let body = document.getElementById('body');
	let ctx = body.getContext('2d');

	ctx.beginPath();
	ctx.moveTo(45, 185);
	ctx.bezierCurveTo(165, 40, 380, 30, 380, 30);
	ctx.bezierCurveTo(500, 100, 530, 250, 530, 250);
	ctx.lineTo(460, 450);
	ctx.bezierCurveTo(390, 520, 270, 530, 270, 530);
	ctx.lineTo(60, 430);
	ctx.bezierCurveTo(10, 300, 45, 185, 45, 185);

	ctx.fillStyle = "#c72800";
	ctx.fill();

	//linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
};

function drawEye1() {
	let eye1 = document.getElementById('eye1');
	let ctxEye1 = eye1.getContext('2d');

	ctxEye1.arc(40, 40, 30, 0, Math.PI * 2);

	ctxEye1.fillStyle = "#991f00";
	ctxEye1.fill();
}

function drawEye2() {
	let eye2 = document.getElementById('eye2');
	let ctxEye2 = eye2.getContext('2d');

	ctxEye2.arc(40, 40, 30, 0, Math.PI * 2);

	ctxEye2.fillStyle = "#991f00";
	ctxEye2.fill();
}

function drawClaw1_part1() {
	let claw1_part1 = document.getElementById('claw1_part1');
	let ctxClaw1_part1 = claw1_part1.getContext('2d');

	ctxClaw1_part1.beginPath();
	ctxClaw1_part1.moveTo(50, 25);
	ctxClaw1_part1.bezierCurveTo(160, 30, 170, 125, 170, 125);
	ctxClaw1_part1.bezierCurveTo(125, 210, 230, 230, 230, 230);
	ctxClaw1_part1.lineTo(240, 290);
	ctxClaw1_part1.bezierCurveTo(0, 230, 50, 25, 50, 25);

	ctxClaw1_part1.fillStyle = "#c72800";
	ctxClaw1_part1.fill();
}

function drawClaw2_part1() {
	let claw2_part1 = document.getElementById('claw2_part1');
	let ctxClaw2_part1 = claw2_part1.getContext('2d');

	ctxClaw2_part1.beginPath();
	ctxClaw2_part1.moveTo(110, 30);
	ctxClaw2_part1.bezierCurveTo(265, 185, 145, 355, 145, 355);
	ctxClaw2_part1.lineTo(105, 310);
	ctxClaw2_part1.bezierCurveTo(145, 270, 125, 225, 125, 225);
	ctxClaw2_part1.bezierCurveTo(5, 125, 110, 30, 110, 30);

	ctxClaw2_part1.fillStyle = "#c72800";
	ctxClaw2_part1.fill();
}

function drawClaw1_part2() {
	let claw1_part2 = document.getElementById('claw1_part2');
	let ctxClaw1_part2 = claw1_part2.getContext('2d');

	ctxClaw1_part2.beginPath();
	ctxClaw1_part2.moveTo(270, 20);
	ctxClaw1_part2.lineTo(180, 195);
	ctxClaw1_part2.lineTo(345, 70);

	ctxClaw1_part2.bezierCurveTo(330, 245, 190, 315, 190, 315);
	ctxClaw1_part2.bezierCurveTo(170, 210, 55, 200, 55, 200);
	ctxClaw1_part2.bezierCurveTo(90, 55, 270, 20, 270, 20);

	ctxClaw1_part2.fillStyle = "#c72800";
	ctxClaw1_part2.fill();
}

function drawClaw2_part2() {
	let claw2_part2 = document.getElementById('claw2_part2');
	let ctxClaw2_part2 = claw2_part2.getContext('2d');

	ctxClaw2_part2.beginPath();
	ctxClaw2_part2.moveTo(65, 105);
	ctxClaw2_part2.bezierCurveTo(200, 10, 335, 80, 335, 80);
	ctxClaw2_part2.bezierCurveTo(250, 165, 300, 270, 300, 270);
	ctxClaw2_part2.bezierCurveTo(150, 315, 35, 195, 35, 195);
	ctxClaw2_part2.lineTo(235, 170);
	ctxClaw2_part2.lineTo(65, 105);

	ctxClaw2_part2.fillStyle = "#c72800";
	ctxClaw2_part2.fill();
}

function drawLeg1_part1() {
	let leg1_part1 = document.getElementById('leg1_part1');
	let ctxLeg1_part1 = leg1_part1.getContext('2d');

	ctxLeg1_part1.beginPath();
	ctxLeg1_part1.moveTo(25, 110);
	ctxLeg1_part1.bezierCurveTo(80, 15, 200, 30, 200, 30);
	ctxLeg1_part1.lineTo(210, 60);
	ctxLeg1_part1.lineTo(85, 115);
	ctxLeg1_part1.lineTo(25, 110);

	ctxLeg1_part1.fillStyle = "#c72800";
	ctxLeg1_part1.fill();
}

function drawLeg1_part2() {
	let leg1_part2 = document.getElementById('leg1_part2');
	let ctxLeg1_part2 = leg1_part2.getContext('2d');

	ctxLeg1_part2.beginPath();
	ctxLeg1_part2.moveTo(20, 25);
	ctxLeg1_part2.lineTo(75, 25);
	ctxLeg1_part2.bezierCurveTo(80, 90, 140, 140, 140, 140);
	ctxLeg1_part2.bezierCurveTo(55, 135, 20, 25, 20, 25);

	ctxLeg1_part2.fillStyle = "#c72800";
	ctxLeg1_part2.fill();
}

function drawLeg2_part1() {
	let leg2_part1 = document.getElementById('leg2_part1');
	let ctxLeg2_part1 = leg2_part1.getContext('2d');

	ctxLeg2_part1.beginPath();
	ctxLeg2_part1.moveTo(80, 20);
	ctxLeg2_part1.lineTo(110, 40);
	ctxLeg2_part1.bezierCurveTo(70, 90, 95, 155, 95, 155);
	ctxLeg2_part1.bezierCurveTo(75, 175, 50, 160, 50, 160);
	ctxLeg2_part1.bezierCurveTo(5, 70, 80, 20, 80, 20);

	ctxLeg2_part1.fillStyle = "#c72800";
	ctxLeg2_part1.fill();
}

function drawLeg2_part2() {
	let leg2_part2 = document.getElementById('leg2_part2');
	let ctxLeg2_part2 = leg2_part2.getContext('2d');

	ctxLeg2_part2.beginPath();
	ctxLeg2_part2.moveTo(25, 30);
	ctxLeg2_part2.lineTo(60, 20);
	ctxLeg2_part2.bezierCurveTo(60, 70, 130, 100, 130, 100);
	ctxLeg2_part2.bezierCurveTo(60, 100, 25, 30, 25, 30);

	ctxLeg2_part2.fillStyle = "#c72800";
	ctxLeg2_part2.fill();
}

function drawLeg3_part1() {
	let leg3_part1 = document.getElementById('leg3_part1');
	let ctxLeg3_part1 = leg3_part1.getContext('2d');

	ctxLeg3_part1.beginPath();
	ctxLeg3_part1.moveTo(35, 15);
	ctxLeg3_part1.lineTo(80, 35);
	ctxLeg3_part1.bezierCurveTo(80, 95, 135, 125, 135, 125);
	ctxLeg3_part1.bezierCurveTo(120, 150, 80, 145, 80, 145);
	ctxLeg3_part1.bezierCurveTo(10, 110, 35, 15, 35, 15);

	ctxLeg3_part1.fillStyle = "#c72800";
	ctxLeg3_part1.fill();
}

function drawLeg3_part2() {
	let leg3_part2 = document.getElementById('leg3_part2');
	let ctxLeg3_part2 = leg3_part2.getContext('2d');

	ctxLeg3_part2.beginPath();
	ctxLeg3_part2.moveTo(15, 45);
	ctxLeg3_part2.lineTo(40, 20);
	ctxLeg3_part2.bezierCurveTo(85, 80, 135, 65, 135, 65);
	ctxLeg3_part2.bezierCurveTo(70, 90, 15, 45, 15, 45);

	ctxLeg3_part2.fillStyle = "#c72800";
	ctxLeg3_part2.fill();
}

function drawLeg4_part1() {
	let leg4_part1 = document.getElementById('leg4_part1');
	let ctxLeg4_part1 = leg4_part1.getContext('2d');

	ctxLeg4_part1.beginPath();
	ctxLeg4_part1.moveTo(15, 130);
	ctxLeg4_part1.bezierCurveTo(100, 20, 195, 50, 195, 50);
	ctxLeg4_part1.lineTo(160, 95);
	ctxLeg4_part1.lineTo(35, 160);
	ctxLeg4_part1.lineTo(15, 130);

	ctxLeg4_part1.fillStyle = "#c72800";
	ctxLeg4_part1.fill();
}

function drawLeg4_part2() {
	let leg4_part2 = document.getElementById('leg4_part2');
	let ctxLeg4_part2 = leg4_part2.getContext('2d');

	ctxLeg4_part2.beginPath();
	ctxLeg4_part2.moveTo(15, 55);
	ctxLeg4_part2.lineTo(55, 10);
	ctxLeg4_part2.bezierCurveTo(95, 85, 55, 190, 55, 190);
	ctxLeg4_part2.bezierCurveTo(65, 105, 15, 55, 15, 55);

	ctxLeg4_part2.fillStyle = "#c72800";
	ctxLeg4_part2.fill();
}

function drawLeg5_part1() {
	let leg5_part1 = document.getElementById('leg5_part1');
	let ctxLeg5_part1 = leg5_part1.getContext('2d');

	ctxLeg5_part1.beginPath();
	ctxLeg5_part1.moveTo(25, 35);
	ctxLeg5_part1.bezierCurveTo(125, 25, 150, 100, 150, 100);
	ctxLeg5_part1.lineTo(110, 140);
	ctxLeg5_part1.bezierCurveTo(80, 85, 20, 80, 20, 80);
	ctxLeg5_part1.lineTo(25, 35);

	ctxLeg5_part1.fillStyle = "#c72800";
	ctxLeg5_part1.fill();
}

function drawLeg5_part2() {
	let leg5_part2 = document.getElementById('leg5_part2');
	let ctxLeg5_part2 = leg5_part2.getContext('2d');

	ctxLeg5_part2.beginPath();
	ctxLeg5_part2.moveTo(15, 35);
	ctxLeg5_part2.lineTo(45, 10);
	ctxLeg5_part2.bezierCurveTo(65, 100, 20, 145, 20, 145);
	ctxLeg5_part2.bezierCurveTo(45, 70, 15, 35, 15, 35);

	ctxLeg5_part2.fillStyle = "#c72800";
	ctxLeg5_part2.fill();
}

function drawLeg6_part1() {
	let leg6_part1 = document.getElementById('leg6_part1');
	let ctxLeg6_part1 = leg6_part1.getContext('2d');

	ctxLeg6_part1.beginPath();
	ctxLeg6_part1.moveTo(35, 10);
	ctxLeg6_part1.bezierCurveTo(100, 40, 100, 130, 100, 130);
	ctxLeg6_part1.bezierCurveTo(80, 165, 45, 165, 45, 165);
	ctxLeg6_part1.bezierCurveTo(55, 100, 15, 65, 15, 65);
	ctxLeg6_part1.lineTo(35, 10);

	ctxLeg6_part1.fillStyle = "#c72800";
	ctxLeg6_part1.fill();
}

function drawLeg6_part2() {
	let leg6_part2 = document.getElementById('leg6_part2');
	let ctxLeg6_part2 = leg6_part2.getContext('2d');

	ctxLeg6_part2.beginPath();
	ctxLeg6_part2.moveTo(45, 30);
	ctxLeg6_part2.lineTo(95, 5);
	ctxLeg6_part2.bezierCurveTo(95, 80, 15, 130, 15, 130);
	ctxLeg6_part2.bezierCurveTo(60, 75, 45, 30, 45, 30);

	ctxLeg6_part2.fillStyle = "#c72800";
	ctxLeg6_part2.fill();
}


setTimeout(() => {
	drawBody();

	drawEye1();
	drawEye2();

	drawClaw1_part1();
	drawClaw1_part2()

	drawClaw2_part1();
	drawClaw2_part2();

	drawLeg1_part1();
	drawLeg1_part2();

	drawLeg2_part1();
	drawLeg2_part2();

	drawLeg3_part1();
	drawLeg3_part2();

	drawLeg4_part1();
	drawLeg4_part2();

	drawLeg5_part1();
	drawLeg5_part2();

	drawLeg6_part1();
	drawLeg6_part2();
}, 5);