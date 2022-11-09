const time = () => {
    const date = new Date();
    let hours = date.getHours();
    const amPm = hours >= 12 ? 'PM' : 'AM';
    if (hours >= 12) {
        hours -= 12;
    }
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timecomp = [hours, minutes, seconds]
        .map(cmp => `<span>${String(cmp).padStart(2, '0')} </span > `);
    return ` ${timecomp.join(':')} ${'\xa0'} ${amPm}`;

}
const today = () => {
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;

    return currentDate;
}


const stopclock = () => {
    clearInterval(time);
}

const startclock = () => {
    init();
}

const init = () => {
    setInterval(() => {
        document.getElementById('digital_clock')
            .innerHTML = time();
        document.getElementById('today_date')
            .innerHTML = today();


    }, 1000);
}

init();

