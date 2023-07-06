//create element using dom
let counter = document.createElement('h1');
//set text-value as 'counter'
counter.innerHTML='Counter';
//counter.setAttribute('class','text-center k');
counter.setAttribute('id','counter');
//add style
counter.style.color='violet';


//create another h1 tag to hold increment/decrement value
let result = document.createElement('h1');
let val=0;
result.innerHTML=val;
result.setAttribute('id','result');
result.style.color='black';

let counterContainer = document.createElement('div');
counterContainer.append(counter,result);
counterContainer.style.display='flex';
counterContainer.style.flexDirection='column';
counterContainer.style.alignItems='center';
counterContainer.style.justifyContent='center';
counterContainer.style.position='relative';
counterContainer.style.left='50px';

//create increment , reset and decrement button
let incrementBtn = document.createElement('button');
let decrementBtn = document.createElement('button');
let resetBtn = document.createElement('button');

incrementBtn.innerHTML='Increment';
decrementBtn.innerHTML='Decrement';
resetBtn.innerHTML='Reset';

//insert buttons inside div
let buttonContainer = document.createElement('div');
buttonContainer.append(incrementBtn,resetBtn,decrementBtn);
buttonContainer.style.display='flex';
buttonContainer.style.alignItems='center';
buttonContainer.style.justifyContent='center';
buttonContainer.style.position='relative';
buttonContainer.style.top='100px';
buttonContainer.style.left='-110px';


incrementBtn.style.margin='30px';
incrementBtn.style.padding='10px';
decrementBtn.style.margin='30px';
decrementBtn.style.padding='10px';
resetBtn.style.margin='30px';
resetBtn.style.padding='10px';

incrementBtn.style.background='palegreen';
decrementBtn.style.background='pink';
resetBtn.style.background='aqua';

incrementBtn.style.borderRadius='10px';
decrementBtn.style.borderRadius='10px';
resetBtn.style.borderRadius='10px';





let container = document.createElement('div');
container.append(counterContainer,buttonContainer);
container.style.display='flex';
container.style.alignItems='center';
container.style.justifyContent='center';


//append elements into the body of the webpage
document.body.append(container);

//add events whenever the button get clicked

//to increment
incrementBtn.addEventListener('click',()=>{
    val+=1;
    result.innerHTML=val;
})

//to reset
resetBtn.addEventListener('click',()=>{
    val=0;
    result.innerHTML=val;
})

//to decrement
decrementBtn.addEventListener('click',()=>{
    val-=1;
    result.innerHTML=val;
})