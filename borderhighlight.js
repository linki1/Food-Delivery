const orderList = document.querySelectorAll('.order-list__logo-wraper');

for (const element of orderList) {
  element.addEventListener('mouseenter',(e)=>{ 
 showBorder(getSide(e,element.getBoundingClientRect()),element);
})
}

function changeHihlight (node,directright) {
  if(directright){
   leftSlideArrow.classList.remove('highlight-elem');
   node.classList.add("highlight-elem");
  }
  else{
  rightSlideArrow.classList.remove('highlight-elem');
  node.classList.add("highlight-elem");
  }
}


function getSide(event, rect) {
    const THRESHOLD = 2;
    const dxL = rect.left   - event.clientX;   
    const dxR = rect.right  - event.clientX;  
    const dyT = rect.top    - event.clientY;  
    const dyB = rect.bottom - event.clientY;   
    
    if (Math.abs(dxL) < THRESHOLD) return 'l';
    if (Math.abs(dxR) < THRESHOLD) return 'r';
    if (Math.abs(dyT) < THRESHOLD) return 't';
    if (Math.abs(dyB) < THRESHOLD) return 'b';
}

const timeoutMap = new WeakMap();
function showBorder(side,item){
const oldId = timeoutMap.get(item);
if (oldId) clearTimeout(oldId);

if(side == 'r'){
  item.style.borderRight= "solid 1px var(--btnColor)";
} 
else if(side == 'l'){
  item.style.borderLeft= "solid 1px var(--btnColor)";
} 
else if(side == 't'){
  item.style.borderTop= "solid 1px var(--btnColor)";
}
else if(side == 'b'){
   item.style.borderBottom= "solid 1px var(--btnColor)"; 
}
else{
  item.style.boxShadow= "1px 1px 10px var(--btnColor)"; 
}
    const id = setTimeout(() => {
    item.style.border = '';
    item.style.boxShadow= '';
    timeoutMap.delete(item);
  }, 2000);

  timeoutMap.set(item, id);
}