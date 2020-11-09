
let times = document.getElementById('times');
let start = document.getElementById('start');
let stops = document.getElementById('stop');
let result = document.getElementById('result_div');
var time = 0;
var timedown;
var isRunning = false;
function updateTime(){
  result.innerHTML = time;
}
function clearTime(){
	if(isRunning == true){	
		clearInterval(timedown);
		time;
		updateTime();
		isRunning = false;
	}
}
function timer(){
	isRunning = true;
    time = time - 1;
	if(time < 1){
	 clearTime();
	}
    updateTime();
}
start.addEventListener('click',()=>{
	if(isRunning == true){
		clearTime();
	}
	time = Number(times.value);
	updateTime();
	timedown = setInterval(timer,1000);
});
stops.addEventListener('click',()=>{
    clearTime(timedown)
});