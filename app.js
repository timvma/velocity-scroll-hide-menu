

let theHeader = document.getElementById('header')
let d=0,lsp,csp,t;
document.addEventListener('scroll', () => {
    csp = window.scrollY;
    // DISPLAY HEADER
    if( d < -70 || csp == 0 ) 
        theHeader.classList.remove('header--hide')
    // HIDE HEADER
    if( d > 0)
        theHeader.classList.add('header--hide')
    if ( lsp != 0 ) 
      d=csp-lsp;
    lsp=csp;
    clearTimeout(t);
    t = setTimeout( ()=>{
        lsp = 0;
        d = 0;
    }, 50);
},true);




