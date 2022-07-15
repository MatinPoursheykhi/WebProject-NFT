const title = document.querySelectorAll('h6');

title.forEach(item => {
    item.addEventListener('click', function(){
        item.classList.toggle("Active");
        const content = item.nextElementSibling;
        if(content.style.height){
            content.style.height = null;
        }else{
        content.style.height = 100 +'px';
        }
    })
})
const moblileMenu = document.querySelector(".moblile-menu");
const mobilelist = document.querySelector(".mobilelist");

moblileMenu.addEventListener('click', ()=> {
    moblileMenu.classList.toggle("is-Active");
    mobilelist.classList.toggle("active");
})