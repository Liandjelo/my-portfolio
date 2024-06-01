
window.addEventListener('load',()=>{
        document.getElementById('onload-con').style.display = 'none'; 
        document.getElementById('body').style.display = ''; 
});
function hideElements(x){
        document.getElementById(x).display = 'none';
}

window.addEventListener('beforeunload',()=> {
        var a = document.getElementsByClassName("button");

        Array.from(a).forEach(e=> {
                e.style.display = 'none';
        });
});
