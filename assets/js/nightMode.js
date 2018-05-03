const userTime = function() {
    currentTime = new Date()
    var hours = currentTime.getHours()
    var minutes = currentTime.getMinutes()

    return hours;
}

const nightMode = function() {
    const night = 21,
          day   = 6,
          html  = document.querySelector('html');
    
    userTime() >= 21 || userTime() < 6 ? html.classList.add('nightMode') : html.classList.remove('nightMode')
}

const switchMode = function() {

    let trigger = document.querySelector('.js-switcher'),
        html    = document.querySelector('html');

    trigger.addEventListener('click', () => {
        html.classList.contains('nightMode') ? html.classList.remove('nightMode') : html.classList.add('nightMode')
    })

}

nightMode();
switchMode();