function DayNightHandler(self){
    temp = document.querySelector('body');
    if(document.querySelector('#night_day').value === 'night'){
    temp.style.backgroundColor = 'black';
    temp.style.color = 'white';
    document.querySelector('#night_day').value = 'day';
    } else {
    temp.style.backgroundColor = 'white';
    temp.style.color = 'black';
    document.querySelector('#night_day').value = 'night';
    }
}