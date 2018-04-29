const MyCursor = {}

const getMouseCoords = function(e) {
    let event = e || window.event;
    return event;
}

const cursorGenerator = function() {

    let cursor = document.createElement('div');

    cursor.style.width = '3.8rem'
    cursor.style.height = '3.8rem'
    cursor.style.position = 'absolute'
    cursor.style.pointerEvents = 'none'
    cursor.style.backgroundColor = '#2F80ED'
    cursor.style.opacity = '0.1'
    cursor.style.borderRadius = '50%'
    cursor.style.zIndex = '-1'
    cursor.style.mixBlendMode = 'exclusion'
    cursor.style.transition = 'transform .3s cubic-bezier(0.455, 0.03, 0.515, 0.955), opacity .3s cubic-bezier(0.455, 0.03, 0.515, 0.955)'

    document.querySelector('body').appendChild(cursor);

    MyCursor.pointer = cursor
    MyCursor.pointer.width = cursor.clientWidth
    MyCursor.pointer.height = cursor.clientHeight
    MyCursor.pointer.color = cursor.style.backgroundColor
    MyCursor.pointer.opacity = cursor.style.opacity
}

const cursorMouseMove = function() {

    document.addEventListener('mousemove', (e) => {
        getMouseCoords(e)
        
        MyCursor.pointer.style.left = (event.clientX - (MyCursor.pointer.width / 2) + 2) + 'px'
        MyCursor.pointer.style.top = (event.clientY - (MyCursor.pointer.height / 2) + 2) + 'px'
    })
    
}

const cursorHover = function() {

    let links = document.querySelectorAll('a');

    for (let i = 0; i < links.length; i++) {
        const element = links[i];

        let color = element.dataset.color;
        
        element.addEventListener('mouseover', () => {
            MyCursor.pointer.style.transform = 'scale(' + 2 + ')'   
            if (color) MyCursor.pointer.style.backgroundColor = color     
            if (color) MyCursor.pointer.style.opacity = 1   
        })
        element.addEventListener('mouseleave', () => {
            MyCursor.pointer.style.transform = 'scale(' + 1 + ')'
            MyCursor.pointer.style.backgroundColor = MyCursor.pointer.color
            MyCursor.pointer.style.opacity = MyCursor.pointer.opacity
        })
    }

}

cursorGenerator();
cursorMouseMove();
cursorHover();