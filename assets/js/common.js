//MENU OPEN
const menuBtn =  document.querySelectorAll('.ham');

menuBtn.forEach(item =>{
    item.addEventListener('click', function(){
        document.querySelector('body').classList.toggle('menu-open');
    });
})
//MENU OPEN:END