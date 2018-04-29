const socialLinksHovering = function() {

    let socialLinks = document.querySelectorAll('.social'),
        experience  = document.querySelector('.experience'),
        introName   = document.querySelector('.intro__name'),
        introDescr  = document.querySelector('.intro__descr'),
        everything   = [];

        everything.push(introName), everything.push(introDescr), everything.push(experience)

        
    for (let i = 0; i < socialLinks.length; i++) {
        const element = socialLinks[i];
        
        element.addEventListener('mouseover', () => {
            for (let i = 0; i < everything.length; i++) {
                const element = everything[i];
                everything[0].style.opacity = '1'
                everything[0].style.transform = 'translateY(-0px)'                
                element.style.transition = 'all .4s cubic-bezier(0.455, 0.03, 0.515, 0.955) .' + i + 's'
                element.style.transform = 'translateY(-10px)'
                element.style.opacity = '0'
            }
        })
        element.addEventListener('mouseleave', () => {
            for (let i = 0; i < everything.length; i++) {
                const element = everything[i];
                element.style.transform = 'translateY(0)'                
                element.style.opacity = '1'
            }
        })
    }
    
}

socialLinksHovering();