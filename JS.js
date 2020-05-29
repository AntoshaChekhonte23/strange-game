let scoreText = document.querySelector('.score');
let score = 20;
let ochki = document.querySelector('.ochki');
// 1 вопрос
let answ1 = document.querySelector('.answ1');
let answ2 = document.querySelector('.answ2');
let answ3 = document.querySelector('.answ3');
let answ4 = document.querySelector('.answ4');
let box = document.querySelector('.box');
let alert = document.querySelector('.alert');
// 2 вопрос
let anssw1 = document.querySelector('.anssw1');
let anssw2 = document.querySelector('.anssw2');
let anssw3 = document.querySelector('.anssw3');
let anssw4 = document.querySelector('.anssw4');
let boxx = document.querySelector('.boxx');
let alert2 = document.querySelector('.alert2');
// 3 вопрос
let ansssw1 = document.querySelector('.ansssw1');
let ansssw2 = document.querySelector('.ansssw2');
let ansssw3 = document.querySelector('.ansssw3');
let ansssw4 = document.querySelector('.ansssw4');
let boxxx = document.querySelector('.boxxx');
let alert3 = document.querySelector('.alert3');
// 4 вопрос
let anssssw1 = document.querySelector('.anssssw1');
let anssssw2 = document.querySelector('.anssssw2');
let anssssw3 = document.querySelector('.anssssw3');
let anssssw4 = document.querySelector('.anssssw4');
let boxxxx = document.querySelector('.boxxxx');
let alert4 = document.querySelector('.alert4');
// 5 вопрос
let aanssssw1 = document.querySelector('.aanssssw1');
let aanssssw2 = document.querySelector('.aanssssw2');
let aanssssw3 = document.querySelector('.aanssssw3');
let aanssssw4 = document.querySelector('.aanssssw4');
let booxxxx = document.querySelector('.booxxxx');
let alert5 = document.querySelector('.alert5');



// 1 вопрос
answ1.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
answ2.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
answ3.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
answ4.onclick = function(){
	alert.style.display = 'block';
	alert.innerHTML= 'Верно';
	alert.innerHTML = null;
	alert.style.display = 'block';
	box.style.display = 'none';
	boxx.style.display = 'block';
}


// 2 вопрос
anssw1.onclick = function(){
	alert2.style.display = 'block';
	alert2.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssw2.onclick = function(){
	alert2.style.display = 'block';
	alert2.innerHTML= 'Верно';
	alert2.innerHTML = null;
	alert2.style.display = 'none';
	boxx.style.display = 'none';
	boxxx.style.display = 'block';
}
anssw3.onclick = function(){
	alert2.style.display = 'block';
	alert2.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssw4.onclick = function(){
	alert2.style.display = 'block';      
	alert2.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}



// 3 вопрос
ansssw1.onclick = function(){
	alert3.style.display = 'block';
	alert3.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
ansssw2.onclick = function(){
	alert3.style.display = 'block';
	alert3.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
ansssw3.onclick = function(){
	alert3.style.display = 'block';
	alert3.innerHTML= 'Верно';
	alert3.innerHTML = null;
	alert3.style.display = 'none';
	boxxx.style.display = 'none';
	boxxxx.style.display = 'block';
}
ansssw4.onclick = function(){
	alert3.style.display = 'block';      
	alert3.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}


// 4 вопрос
anssssw1.onclick = function(){
	alert4.style.display = 'block';
	alert4.innerHTML= 'Верно';
	alert4.innerHTML = null;
	alert4.style.display = 'none';
	boxxxx.style.display = 'none';
	booxxxx.style.display = 'block';
}
anssssw2.onclick = function(){
	alert4.style.display = 'block';
	alert4.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssssw3.onclick = function(){
	alert4.style.display = 'block';
	alert4.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
anssssw4.onclick = function(){
	alert4.style.display = 'block';      
	alert4.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}

// 5 вопрос
aanssssw1.onclick = function(){
	alert5.style.display = 'block';      
	alert5.innerHTML= 'Неверно..';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aanssssw2.onclick = function(){
	alert5.style.display = 'block';
	alert5.innerHTML= 'Неверно...';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aanssssw3.onclick = function(){
	alert5.style.display = 'block';
	alert5.innerHTML= 'Неверно.';
	score = score - 1;
	scoreText.innerHTML = score;
	console.log(score);
}
aanssssw4.onclick = function(){
	alert5.style.display = 'block';
	alert5.innerHTML= 'Верно';
	alert5.innerHTML = null;
	alert5.style.display = 'none';
	alert.style.display = 'none';
	booxxxx.style.display = 'none';
	ochki.style.display = 'block';
	scoreText.innerHTML = score;
	console.log(score);
}

