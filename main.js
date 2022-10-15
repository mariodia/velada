let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function(){
    let Desplazamiento = window.pageYOffset;
    if(ubicacionPrincipal >= Desplazamiento){
        document.getElementById('menu1').style.top ='0';
    }
    else{
        document.getElementById('menu1').style.top ='-100px';
    }
    ubicacionPrincipal = Desplazamiento;
}