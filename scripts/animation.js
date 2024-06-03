function slideInText(x,y){
    document.getElementById(x).style.animation = `slideInText ${y} ease-in`;
    document.getElementById(x).style.width = "100%";
}

function fadeIn(x,y){
    document.getElementById(x).style.transition = y;
    document.getElementById(x).style.opacity = "1";
        setTimeout(() => {
        document.getElementById(x).style.transition = '';
    }, y.substring(y.lastIndexOf(),1) * 1000);
}

function hideElement(x, y){
    document.getElementById(y).style.opacity = "0";
    document.getElementById(y).style.transition = "0.5s";
    document.getElementsByTagName('header')[0].style.opacity = "0";
    document.getElementsByTagName('header')[0].style.transition = "0.5s";
    document.getElementsByTagName('footer')[0].style.transition = "0.5s";
    document.getElementsByTagName('footer')[0].style.opacity = "0";
  var a = x;
    setTimeout(() => {
        window.location.href = a;
    }, 2000);
}
function noAnimation(x){
    document.getElementById(x).style.opacity = "1";
}
function headfoot(){
    document.getElementsByTagName('header')[0].style.opacity = "1";
    document.getElementsByTagName('header')[0].style.transition = "1s";
    document.getElementsByTagName('footer')[0].style.opacity = "1";
    document.getElementsByTagName('footer')[0].style.transition = "1s";
}
