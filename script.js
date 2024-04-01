function time() {
    let time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    hours < 10 ? hours = "0" + hours : hours = hours;
    minutes < 10 ? minutes = "0" + minutes : minutes = minutes;
    seconds < 10 ? seconds = "0" + seconds : seconds = seconds;

    let currentTime = hours + ":" + minutes + ":" + seconds;

    const numbers = ['🯰', '🯱', '🯲', '🯳', '🯴', '🯵', '🯶', '🯷', '🯸', '🯹'];
    for (let i = 0; i < 10; i++) {
        currentTime = currentTime.replaceAll(i, numbers[i])
    }

    document.getElementById("clock").innerHTML = currentTime;
}

time()
setInterval(time, 1000);