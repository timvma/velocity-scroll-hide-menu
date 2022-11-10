class VelocityScroll {
    constructor(target,toggleClass) {
        const item = document.getElementById(target)
        let d=0,lsp,csp,t;
        document.addEventListener('scroll', () => {
            csp = window.scrollY;
            // DISPLAY HEADER
            if( d < -70 || csp == 0 ) 
                item.classList.remove(toggleClass)
            // HIDE HEADER
            if( d > 0)
                item.classList.add(toggleClass)
            if ( lsp != 0 ) 
            d=csp-lsp;
            lsp=csp;
            clearTimeout(t);
            t = setTimeout( ()=>{
                lsp = 0;
                d = 0;
            }, 50);
        },true);
    }
}