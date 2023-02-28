const hour = document.getElementById('hrs');
const minutes = document.getElementById('min');
const seconds = document.getElementById('sec');
const miliseconds = document.getElementById('mili');

const start = document.getElementById('start');
const pause = document.getElementById('pause');
const reset = document.getElementById('reset');
const cast = document.getElementById('cast');

const data=[]

let count=1;


let dataCur=''
let time;
let startTime;
let setTimer=0

const updateTime=()=>{
    const setMilisec=Date.now()+setTimer-startTime;
    const setSec=Math.floor(setMilisec/1000)
    const setMin=Math.floor(setSec/60)
    const setHrs =Math.floor(setMin/60)

    hour.textContent=setHrs.toString().padStart(2,'0');
    minutes.textContent=(setMin%60).toString().padStart(2,'0')
    seconds.textContent=(setSec%60).toString().padStart(2,'0')
    miliseconds.textContent=(setMilisec%1000).toString().padStart(3,'0')

    dataCur =`<br/> Cast ${count}
    :${setHrs.toString().padStart(2,'0')}
    :${(setMin%60).toString().padStart(2,'0')}
    :${(setSec%60).toString().padStart(2,'0')}
    :${(setMilisec%1000).toString().padStart(3,'0')}`
}


start.addEventListener('click',()=>{
    startTime=Date.now()-setTimer;
    time=setInterval(updateTime,100);

})
pause.addEventListener('click',()=>{
    clearInterval(time);
    setTimer=Date.now()-startTime;

})
reset.addEventListener('click',()=>{
    clearInterval(time)
    setTimer=0;
    hour.textContent='00'
    minutes.textContent="00"
    seconds.textContent="00"
    miliseconds.textContent="000"
    
})
cast.addEventListener('click',()=>{
    count++
    data.push(dataCur)

    document.getElementById('cast-sec').innerHTML=[...data]


})