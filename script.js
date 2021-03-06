const countdown = () => {
    const countDate = new Date('May 17, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    //how does time work?
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //Calculate from the future to now
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    //update HTML

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;
};

//run the function multiple times to keep countdown going
setInterval(countdown, 1000);
