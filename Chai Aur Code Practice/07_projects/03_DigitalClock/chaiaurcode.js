const clock = document.getElementById('clock')
// document.querySelector('clock')




// setInterval imp further study
setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)
