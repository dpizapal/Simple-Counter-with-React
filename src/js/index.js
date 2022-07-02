//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle


//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
//import { Home } from "./component/home.js";

let digitone, digittwo, digitthree, digitfour, digitfive, digitsix;

function SecondsCounter() {
	return (
		<div id="app">
			<div class="counter">
				<div class="clock-img">
					<i class="fas fa-clock" />
				</div>
				<div>{digitone}</div>
				<div>{digittwo}</div>
				<div>:</div>
				<div>{digitthree}</div>
				<div>{digitfour}</div>
				<div>:</div>
				<div>{digitfive}</div>
				<div>{digitsix}</div>
			</div>
		</div>
	);
}
let digitcounter = 0;
setInterval(function() {
	let horas = Math.floor(digitcounter / 3600);
	let minutos = Math.floor(digitcounter / 60);
	let segundos = digitcounter % 60;
	digitone = Math.floor(horas / 10);
	digittwo = horas % 10;
	digitthree = Math.floor(minutos/10);
	digitfour = minutos % 10;
	digitfive = Math.floor(segundos / 10);
	digitsix = segundos % 10 ;
	digitcounter++;
	//console.log(digitone, digittwo, digitthree, digitfour, digitfive, digitsix);
	ReactDOM.render(
		<SecondsCounter
			digitone
			digittwo
			digitthree
			digitfour
			digitfive
			digitsix
		/>,
		document.querySelector("#app")
	);
}, 1000);
