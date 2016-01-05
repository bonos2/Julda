/**
 * Created by 초이 on 2015-12-29.
 */
var gagy = 0;
var c1 = 0;
var c2 = 0;
var c3 = 0;
var c4 = 0;
var c5 = 0;
var c6 = 0;

function chk1_Click() {
	var chk1 = document.getElementById("chk1");

	chk1.innerHTML = [ "<img src='MAIN_2_checking.png' class='chk_img'>" ];
	if (c1 == 0) {
		gagy += 1;
		c1 += 1;
	} else {
		c1 += 1;
	}
	show_gagy();
}

function chk2_Click() {
	var chk2 = document.getElementById("chk2");
	chk2.innerHTML = [ "<img src='MAIN_2_checking.png' class='chk_img'>" ];
	if (c2 == 0) {
		gagy += 1;
		c2 += 1;
	} else {
		c2 += 1;
	}
	show_gagy();
}

function chk3_Click() {
	var chk3 = document.getElementById("chk3");
	chk3.innerHTML = [ "<img src='MAIN_2_checking.png' class='chk_img'>" ];
	if (c3 == 0) {
		gagy += 1;
		c3 += 1;
	} else {
		c3 += 1;
	}
	show_gagy();
}

function chk4_Click() {
	var chk4 = document.getElementById("chk4");
	chk4.innerHTML = [ "<img src='MAIN_2_checking.png' class='chk_img'>" ];
	if (c4 == 0) {
		gagy += 1;
		c4 += 1;
	} else {
		c4 += 1;
	}
	show_gagy();
}

function chk5_Click() {
	var chk5 = document.getElementById("chk5");
	chk5.innerHTML = [ "<img src='MAIN_2_checking.png' class='chk_img'>" ];
	if (c5 == 0) {
		gagy += 1;
		c5 += 1;
	} else {
		c5 += 1;
	}
	show_gagy();
}

function chk6_Click() {
	var chk6 = document.getElementById("chk6");
	chk6.innerHTML = [ "<img src='MAIN_2_checking.png' class='chk_img'>" ];
	if (c6 == 0) {
		gagy += 1;
		c6 += 1;
	} else {
		c6 += 1;
	}
	show_gagy();
}

function show_gagy() {
	if (window.gagy == 1) {
		var gagy1 = document.getElementById("gagy1");
		var num = document.getElementById("num");
		gagy1.style.backgroundColor = "#03e959";
		num.innerHTML = [ "20%" ];
	} else if (window.gagy == 2) {
		var gagy1 = document.getElementById("gagy1");
		var gagy2 = document.getElementById("gagy2");
		var num = document.getElementById("num");
		gagy1.style.backgroundColor = "#03e959";
		gagy2.style.backgroundColor = "#03e959";
		num.innerHTML = [ "40%" ];
	} else if (window.gagy == 3) {
		var gagy1 = document.getElementById("gagy1");
		var gagy2 = document.getElementById("gagy2");
		var gagy3 = document.getElementById("gagy3");
		var num = document.getElementById("num");
		gagy1.style.backgroundColor = "#03e959";
		gagy2.style.backgroundColor = "#03e959";
		gagy3.style.backgroundColor = "#03e959";
		num.innerHTML = [ "50%" ];
	} else if (window.gagy == 4) {
		var gagy1 = document.getElementById("gagy1");
		var gagy2 = document.getElementById("gagy2");
		var gagy3 = document.getElementById("gagy3");
		var gagy4 = document.getElementById("gagy4");
		var num = document.getElementById("num");
		gagy1.style.backgroundColor = "#03e959";
		gagy2.style.backgroundColor = "#03e959";
		gagy3.style.backgroundColor = "#03e959";
		gagy4.style.backgroundColor = "#03e959";
		num.innerHTML = [ "60%" ];
	} else if (window.gagy == 5) {
		var gagy1 = document.getElementById("gagy1");
		var gagy2 = document.getElementById("gagy2");
		var gagy3 = document.getElementById("gagy3");
		var gagy4 = document.getElementById("gagy4");
		var gagy5 = document.getElementById("gagy5");
		var num = document.getElementById("num");
		gagy1.style.backgroundColor = "#03e959";
		gagy2.style.backgroundColor = "#03e959";
		gagy3.style.backgroundColor = "#03e959";
		gagy4.style.backgroundColor = "#03e959";
		gagy5.style.backgroundColor = "#03e959";
		num.innerHTML = [ "80%" ];
	} else if (window.gagy == 6) {
		var gagy1 = document.getElementById("gagy1");
		var gagy2 = document.getElementById("gagy2");
		var gagy3 = document.getElementById("gagy3");
		var gagy4 = document.getElementById("gagy4");
		var gagy5 = document.getElementById("gagy5");
		var gagy6 = document.getElementById("gagy6");
		var num = document.getElementById("num");
		gagy1.style.backgroundColor = "#03e959";
		gagy2.style.backgroundColor = "#03e959";
		gagy3.style.backgroundColor = "#03e959";
		gagy4.style.backgroundColor = "#03e959";
		gagy5.style.backgroundColor = "#03e959";
		gagy6.style.backgroundColor = "#03e959";
		num.innerHTML = [ "100%" ];
		var star = document.getElementById('star_place');
		star.innerHTML = [ "<img src='MAIN_2_star.png' id='star'>" ];
	} else if (window.gagy == 6 && window.c1 != 1 && window.c2 != 1
			&& window.c3 != 1 && window.c4 != 1 && window.c5 != 1
			&& window != 1)
		;
}

function init() {
	var date = new Date();
	var day = document.getElementById('day');
	day.innerHTML = [ date.toLocaleDateString() ];
}

addEventListener('load', init);