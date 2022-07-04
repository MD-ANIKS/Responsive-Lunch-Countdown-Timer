// DOM Element
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline h4');

// let's go creata a getRemainingTime function
function getRemainingTime() {
    // set lunching date
    const futureDate = new Date(2022, 7, 13, 10, 30);
    
    // get the time value in a millisecond
    const todayTime = new Date().getTime();
    const t = futureDate - todayTime;

    // 1 day = 24hr
    // 1 hour = 60min
    // 1 min = 60s  
    // 1 sec = 1000ms

    // convert value to millisecond
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    const oneSecond = 1000;

    // get remain times
    const days = Math.floor( t / oneDay );
    const hours = Math.floor( (t % oneDay) / oneHour );
    const minutes = Math.floor( (t % oneHour) / oneMinute );
    const seconds = Math.floor( (t % oneMinute) / oneSecond );

    // get value pass in the array
    const values = [ days, hours, minutes, seconds ];

    // if number less than 10 when add zeros value
    function format(item){
        if(item < 10){
            return ( item.innerHTML = `0${item}` )
        }

        return item;

    }

    items.forEach((item, index) => {

        item.innerHTML = format(values[index]);
      
    })

};

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime()