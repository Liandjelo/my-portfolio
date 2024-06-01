
window.addEventListener('load',()=>{
        document.getElementById('onload-con').style.display = 'none';
        var b =  document.getElementById('body');
        var a = document.getElementsByClassName("img-buttons");
        if (b){
              b.style.display = '';   
        }
       if(a){
          
          Array.from(a).forEach(e=> {
                e.style.display = 'flex';
        });
       }

});
function hideElements(x){
        document.getElementById(x).display = 'none';
}

