const battonwrapers = document.querySelectorAll(".btn_partical");
const orderInput = document.querySelector('.order-input');
const mediainput = document.querySelector('.media-input');
console.log(battonwrapers[0]);


for (const element of battonwrapers) {
    element.addEventListener('click',()=>{
        addParticle(3,element);
        element.style.scale = 1.2;
        for (const elem of element.classList) {
            console.log(elem);
            if(elem == 'media-button'){
                console.log('media');
                mediainput.value = '';
            }else if(elem == 'btn'){console.log('order');
                 orderInput.value = '';
            }
            
        }       
        let tresharr = document.querySelectorAll(".partical_btn");
        tresharr[0].addEventListener('animationend', () =>{
         element.style.scale = 1;
          for (const elem of tresharr) {
            elem.remove();
          }
        })
        
    })
}
function addParticle(count,elem){
    let particlDirectCount = 0;
     if(count>=10){
     particlDirectCount =10;
    }
    let bottomparticls = new Array(count);
    let topparticls = new Array(count);
    bottomparticls = fillArr(bottomparticls);
    topparticls = fillArr(topparticls);
    createparticl(topparticls,elem,'top');
    createparticl(bottomparticls,elem,'bottom');
}

function fillArr(arr){
    for (let i = 0; i < arr.length; i++) {
        const particle = document.createElement('div');
        particle.classList.add('partical_btn');
        arr[i] = particle;
    }
    return arr
}

function createparticl(arr,elem,direct){
let angels = angles(arr.length);
let leftdirections = directions(arr.length);
if(direct === 'top'){
    for (let i = 0; i < arr.length; i++) {
    arr[i].style.setProperty('--movelfstart','50%');
    arr[i].style.setProperty("--movebtstart","0px");
    arr[i].style.setProperty('--movebtend','-40px');
    arr[i].style.setProperty('--movelfend',`${leftdirections[i]}%`);
    arr[i].style.setProperty('--angelparticl',`${angels[i]}deg`);
    elem.appendChild(arr[i]);
    }
}
else if(direct === 'bottom'){
     for (let i = 0; i < arr.length; i++) {
    arr[i].style.setProperty('--movelfstart','50%');
    arr[i].style.setProperty("--movebtstart","22px");
    arr[i].style.setProperty('--movebtend','60px');
    arr[i].style.setProperty('--movelfend',`${leftdirections[i]}%`);
    arr[i].style.setProperty('--angelparticl',`-${angels[i]<0?Math.abs(angels[i]+angels[i]):angels[i]}deg`);
    elem.appendChild(arr[i]);
     }
}
else{
return console.error('not corect direction');
}
}

function angles(n, halfRange = 60) {
  if (n === 1) return [0];           
  const fullRange = halfRange * 2;    
  const step = fullRange / (n - 1);   
  const start = halfRange;            
  return Array.from({ length: n }, (_, i) => start - i * step);
}

function directions(n){
    if(n===1)return [50];
    if(n===2)return[0,100]
    let directArr = [];
    const step = Math.floor(100/(n-1));
    let direct = 0; 
    do {
        directArr.push(direct);
        direct+=step;
    } while (direct<=100);
    return directArr;
}

