
window.addEventListener('load',()=>{
        document.getElementById('onload-con').style.display = 'none';
        var b =  document.getElementById('body');
        if (b){
              b.style.display = '';   
        }
       if(a){
          var a = document.getElementsByClassName("button");
          Array.from(a).forEach(e=> {
                e.style.display = 'flex';
        });
       }

});
function hideElements(x){
        document.getElementById(x).display = 'none';
}

