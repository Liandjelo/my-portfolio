var x = ['x',0];
var y = window.location.href.substring(window.location.href.lastIndexOf("/") + 1);
var w = ['w',0];
var items = y ==
    "beach-resort.html" ? [-200,-800] : y == 
    "pacific-activity.html" ? [-100,-300] : 
    y == "e-commerce.html" ? [-400, -1800] :
      y == "cart.html" ? [null,-800] : [null,-600];
function animateLeft(a,b,c){
    if (a[1] > b){
        if (a[0] == 'x'){
            x[1]-=100;
            a[1] = x[1];
        }
        else{
            w[1]-=100;
            a[1] = w[1];
        }
              
        document.getElementById(c).style.marginLeft = `${a[1]}%`;
        document.getElementById(c).style.transition = `2s`;
        
    }
    else{
        a[1] = b;
    }
}
function animateRight(a,y){
    if (a[1] < 0){
        if (a[0] == 'x'){
            x[1]+=100;
            a[1] = x[1];
        }
        else{
            w[1]+=100;
            a[1] = w[1];
        }
        document.getElementById(y).style.marginLeft = `${a[1]}%`;
        document.getElementById(y).style.transition = `2s`;
        
    }
    else{
        a[1] = 0;
    }
}
function leftScroll() {  
  
   animateLeft(x,items[0],'sliding-left');
  
}
function rightScroll() {
    animateRight(x,'sliding-left');
}
    
function codeleftScroll() {  
    animateLeft(w,items[1],'sliding-code-left');
   
 }
 function coderightScroll() {
     animateRight(w,'sliding-code-left');
 }
    
   

