var check = document.querySelector(".check-1");
check.addEventListener('click', idioma);

function idioma() {
    let id=check.checked;
    if (id == true) {
        location.href = "en/index.html";
    
    }else
        location.href = "../index.html";
    
}

