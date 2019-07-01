//Solution 1
// (()=> {

//     const counter = document.getElementById('counter');
//     //counter.textContent = 1;
//     const lowerCount =  document.querySelector('.prevBtn');
//     const UpperCount =  document.querySelector('.nextBtn');

// lowerCount.addEventListener('click', () => {
  
//   let value = parseInt(counter.textContent);     
//   counter.textContent = value - 1; 

// });

// UpperCount.addEventListener('click',() => {

//     let value2 = parseInt(counter.textContent);
//     counter.textContent = value2 + 1;
// });


// })();


// //Solution 2 

(function(){
    
let counterValue = 0;
const counter = document.getElementById('counter');
const counterBtn = document.querySelectorAll('.counterBtn');

counterBtn.forEach((btn)=>{
    btn.addEventListener('click',function (event){
        //check clicked button
        const btnType = event.target;
    
if(btnType.classList.contains('prevBtn')){
    counterValue--;
}
else if(btnType.classList.contains('nextBtn')){
    counterValue++;
     
}
counter.textContent = counterValue ; 

if(counterValue > 0){
    
    counter.style.color = "green";
}  
else if(counterValue < 0){
    counter.style.color = "red";
}

else if(counterValue === 0) {
    counter.style.color = "black";
}    

});

});

})();