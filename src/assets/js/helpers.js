export function getPosition(element) {
    var xPosition = 0;
    var yPosition = 0;

    while(element) {
        xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
        yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
};

export function getScrollDirection(element = document) {
    let lastScrollTop = 0, scrollDirection;

    element.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        
        if (st > lastScrollTop) {
            scrollDirection == 'down';
        } else {
            scrollDirection == 'up';
        }
        
        lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
        return scrollDirection;

    }, false);
}