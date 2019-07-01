function rndVreme(min, max){
	return Math.round(Math.random()*(max-min)+min);
}

let poslednjiZbun;

function rndZbun(zbunje){
	const index = Math.floor(Math.random() * zbunje.length);

	const zbun = zbunje[index];
	if(zbun == poslednjiZbun){
		console.log('Preklapanje');
		return rndZbun(zbunje);
	}

	poslednjiZbun = zbun;
	return zbun;
}

let gotovo = false;
let aktivno = false;

function iskoci(donja, gornja){

	
	const vreme = rndVreme(donja, gornja);
	const zbun = rndZbun(zbunje);

	zbun.classList.add('on');

	setTimeout(() => {
		zbun.classList.remove('on');

		if(!gotovo) iskoci(donja,gornja);

	},vreme);

}

let rezultat = 0;


function startEasy(){

	const normal = nivoi[1];
	const expert = nivoi[2];
	normal.classList.add('nestani');
	expert.classList.add('nestani');
	document.getElementById('easyID').removeAttribute("onClick");

	tabla.textContent = 0;
	gotovo = false;
	rezultat = 0;
	iskoci(1000,3000);
	setTimeout(()=> {

		gotovo = true
		normal.classList.remove('nestani');
		expert.classList.remove('nestani');
		document.getElementById('easyID').addEventListener("click",startEasy);
	},15000)
	
}

function startNormal(){
	
	const easy = nivoi[0];
	const expert = nivoi[2];
	easy.classList.add('nestani');
	expert.classList.add('nestani');
	
	document.getElementById('normalID').removeAttribute("onClick");

	tabla.textContent = 0;
	gotovo = false;
	rezultat = 0;
	iskoci(500, 1500);
	setTimeout(()=> {
		gotovo = true
		easy.classList.remove('nestani');
		expert.classList.remove('nestani');
		document.getElementById('normalID').addEventListener("click",startNormal);
	},10000)
	
}


function startExpert(){

	const easy = nivoi[0];
	const normal = nivoi[1];
	easy.classList.add('nestani');
	normal.classList.add('nestani');
	
	document.getElementById('expertID').removeAttribute("onClick");

	tabla.textContent = 0;
	gotovo = false;
	rezultat = 0;
	iskoci(250, 750);
	setTimeout(()=> {

		gotovo = true
		easy.classList.remove('nestani');
		normal.classList.remove('nestani');
		document.getElementById('expertID').addEventListener("click",startExpert);
	},10000)
	
}

function spusti(e) {
	
	rezultat++;
	this.parentNode.classList.remove('on');
	tabla.textContent = rezultat;

}
