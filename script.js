let formulario = document.getElementById("formulario-contato")


function chameOAbacate(){
    formulario.className = "mostrar-formulario"
}

const menuList = document.getElementById('menu-list')
menuList.style.maxHeight ='0px'

function showmenu(){
    if(menuList.style.maxHeight == '0px') {
    menuList.style.maxHeight = '120px'
}else {
    menuList.style.maxHeight = '0px'
}
}