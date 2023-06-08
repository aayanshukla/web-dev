let studyTitle = document.getElementById('study');
let breakTitle = document.getElementById('break');

let studyTime=25;
let breakTime=5;
let seconds="00";

window.onload = () => {
    document.getElementById('minutes').innerHTML=studyTime;
    document.getElementById('seconds').innerHTML=seconds;
    studyTitle.classList.add('active')
}

function start() {
    seconds=59;
    let studyMinutes = studyTime - 1;
    let breakMinutes = breakTime - 1;

    breakCount = 0;

    let timerFunction = () => {
        document.getElementById('minutes').innerHTML=studyMinutes  ;
        document.getElementById('seconds').innerHTML=seconds;

        seconds = seconds - 1;

        if (seconds==0) {
            studyMinutes = studyMinutes - 1;
            if (studyMinutes==-1){
                if (breakCount%2==0){
                    studyMinutes=breakMinutes;
                    breakCount++
                    
                }else{
                    studyMinutes=studyTime;
                    breakCount++
                }
            }
            seconds = 59;
        }
    }
    setInterval(timerFunction,1000)
}