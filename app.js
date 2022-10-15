addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
})

let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let Desplazamiento = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento){
        document.getElementById('menu1').style.top ='0';
    }
    else{
        document.getElementById('menu1').style.top ='-100px';
    }
    ubicacionPrincipal = Desplazamiento;
}

document.querySelectorAll(".modal-container img").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.parentNode.classList.add("active");
    })
})
document.querySelectorAll(".modal-container").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.classList.remove("active");
    })
})