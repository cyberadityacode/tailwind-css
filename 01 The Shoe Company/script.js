const hamburgerMenu = document.querySelector('#hamburger-menu')
const nav = document.querySelector('ul')

hamburgerMenu.addEventListener('click', (e)=>{
    // console.log(e.target.name)
    if(e.target.name ==='menu'){
        e.target.name = 'close'
        nav.classList.remove('hidden')
        nav.classList.add("transition-all", "ease-in-out", "duration-1000")
        nav.classList.add('top-[80px]')
        nav.classList.add('opacity-100')
    }else if(e.target.name==='close'){
        e.target.name ='menu'
        nav.classList.add('hidden')
        nav.classList.remove('top-[80px]')
        nav.classList.remove('opacity-100')

    }else{
        console.log('error');
    }
})