
window.addEventListener('load',()=>{
        document.getElementById('onload-con').style.display = 'none'; 
        document.getElementById('body').style.display = ''; 
        var a = document.getElementsByClassName("button");
        Array.from(a).forEach(e=> {
                e.style.display = 'flex';
        });
});
function hideElements(x){
        document.getElementById(x).display = 'none';
}

