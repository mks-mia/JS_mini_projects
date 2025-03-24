//Dark Mode 
var lightplace = document.getElementById('moon')
var light = true
function DarkMode(){
    if(light){
        lightplace.src = "sun.png"
        light = false
    }
    else{
        lightplace.src = "moon.png"
        light = true
    }
}

//SideBar
const naviIcon = document.getElementById('menu-toggle')
const sideBar = document.getElementById('side-menu')
const closeButton = document.getElementById('close-menu')
const emptySpace = document.getElementById('overlay')

naviIcon.addEventListener('click',()=>{
    sideBar.classList.remove('-translate-x-full');
    emptySpace.classList.remove('hidden')
})
closeButton.addEventListener('click',()=>{
    sideBar.classList.add('-translate-x-full');
    emptySpace.classList.add('hidden')
})
emptySpace.addEventListener('click',()=>{
    sideBar.classList.add('-translate-x-full');
    emptySpace.classList.add('hidden')
})
