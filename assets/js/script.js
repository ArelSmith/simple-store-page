const target = document.querySelector('.loading');

function loading() {
    const effect = setInterval(() => {
        if(!target.style.opacity) {
            target.style.opacity = 1;
        }
        if(target.style.opacity > 0) {
            target.style.opacity -= 0.1;
        } else {
            clearInterval(effect);
            target.style.display = "none";
        }
    }, 100);
}