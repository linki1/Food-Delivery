const arrreviewname = [
'Jessica Monroe','Daniel Kerrigan','Amelia Chen',"Liam O'Connor",'Natalie Brooks','Ethan Wright','Sofia Martinez',
' Oliver Smith','Chloe Davis','Jack Thompson'];
const arrreviewtext= ['"Absolutely thrilled with the results! The service exceeded all my expectations. Highly recommended!"','"Smooth experience from start to finish. Everything worked flawlessly. Great job!"','"Very professional and user-oriented. The attention to detail was fantastic."','"The team was responsive and helpful. Their work made a real difference in our performance."','"Reliable, efficient, and friendly. Couldn’t ask for more from a service provider!"','"Organized and easy to work with. They really understood our needs."','"Creative and insightful. They helped us find the perfect direction for our campaign."','"High-quality results with a modern touch. Great communication throughout."','"Trustworthy and efficient. The level of service was exceptional!"','"Trustworthy and efficient. The level of service was exceptional!"'];
const arrreviewjob = ['Financial Advisor','Content Strategist','IT Consultant','Project Manager','Operations Analyst','HR Coordinator','Sales Manager','UX Designer',' Software Developer','Marketing Specialist'];

const sliderShowText = document.querySelector('.slider__coment');
const sliderShowname = document.querySelector('.slider__name');
const sliderShowjob = document.querySelector('.slider__sub-name');
const rightSlideArrow = document.querySelector("#lable-l");
const leftSlideArrow = document.querySelector("#lable-r");

leftSlideArrow.addEventListener('click',()=>{
changeQuote(sliderShowText,sliderShowname,sliderShowjob,'l');
})
rightSlideArrow.addEventListener('click',()=>{
changeQuote(sliderShowText,sliderShowname,sliderShowjob,'r');
})

let iter = 0;
function changeQuote(coment,name,job,direct){
  console.log(iter)
if(direct == 'r'){
  iter++;
 if(iter==arrreviewtext.length){
  iter = 0
}; 
changeHihlight(rightSlideArrow,true);
}
else{
  iter--;
    if(iter < 0){
      iter = arrreviewtext.length-1
    };
    changeHihlight(leftSlideArrow,false);
} 
let obj =getComent(arrreviewtext,arrreviewname,arrreviewjob);
for (const key in obj) {
  if (key == 'comenttext') {
    pampingText(coment,obj[key]);
  }
   else if(key == 'name'){
    name.textContent = obj[key];
   }
   else{
     job.textContent = obj[key];
   }
 }
}

function pampingText(node, text, speed = 40) {
  console.log('run'+node)
  if (!node) return;

  if (node._pumpIntervalId) clearInterval(node._pumpIntervalId);

  node.textContent = '';
  let i = 0;

  node._pumpIntervalId = setInterval(() => {
    node.textContent += text[i++];
    if (i >= text.length) {
      clearInterval(node._pumpIntervalId);
      node._pumpIntervalId = null;
    }
  }, speed);
}

function getComent(comentArr,nameArr,jobArr) {
  return { 
     name:nameArr[iter],
     comenttext: comentArr[iter],
     job: jobArr[iter],
  }
}

