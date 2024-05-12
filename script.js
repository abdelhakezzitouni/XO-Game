// squares

const square1 = document.querySelector('#item1');
const square2 = document.querySelector('#item2');
const square3 = document.querySelector('#item3');
const square4 = document.querySelector('#item4');
const square5 = document.querySelector('#item5');
const square6 = document.querySelector('#item6');
const square7 = document.querySelector('#item7');
const square8 = document.querySelector('#item8');
const square9 = document.querySelector('#item9');

const btnreload = document.querySelector('#btnreload');
let title = document.querySelector('.title');


function winner(){

  let squares =[];
  for(let i=1 ;i<10 ;i++){
  squares[i] = document.getElementById('item' +i).innerHTML;
  }

  if(squares[1]==squares[2] && squares[2]==squares[3] && squares[1]!= ""){

    title.innerHTML =`the winner is ${squares[1]}`;
    square1.style.background ="#000";
    square2.style.background ="#000";
    square3.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

  else if(squares[4]==squares[5] && squares[5]==squares[6] && squares[6]!= ""){
    title.innerHTML =`the winner is ${squares[4]}`;
    square4.style.background ="#000";
    square5.style.background ="#000";
    square6.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

  else if(squares[7]==squares[8] && squares[8]==squares[9] && squares[9]!= ""){
    title.innerHTML =`the winner is ${squares[7]}`;
    square7.style.background ="#000";
    square8.style.background ="#000";
    square9.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

  else if(squares[1]==squares[5] && squares[5]==squares[9] && squares[1]!= ""){
    title.innerHTML =`the winner is ${squares[1]}`;
    square1.style.background ="#000";
    square5.style.background ="#000";
    square9.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

  else if(squares[3]==squares[5] && squares[5]==squares[7] && squares[7]!= ""){
    title.innerHTML =`the winner is ${squares[3]}`;
    square3.style.background ="#000";
    square5.style.background ="#000";
    square7.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

  else if(squares[1]==squares[4] && squares[4]==squares[7] && squares[7]!= ""){
    title.innerHTML =`the winner is  ${squares[1]} `;
    square1.style.background ="#000";
    square4.style.background ="#000";
    square7.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

  else if(squares[2]==squares[5] && squares[5]==squares[8] && squares[8]!= ""){
    title.innerHTML =`the winner is ${squares[8]}`;
    square2.style.background ="#000";
    square5.style.background ="#000";
    square8.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }
  else if(squares[3]==squares[6] && squares[6]==squares[9] && squares[9]!= ""){
    title.innerHTML =`the winner is ${squares[9]}`;
    square3.style.background ="#000";
    square6.style.background ="#000";
    square9.style.background ="#000";
    btnreload.style.visibility = "visible";
    
  }

}


let turn = 'X';

function game(ele){

  let element = document.getElementById(ele);

  if(turn === 'X' && element.innerHTML == ''  )
  {
    element.innerHTML = 'x';

    turn = 'O'
    title.innerHTML = 'Turn O'

  }
  else if(turn === 'O' && element.innerHTML == ''  ){
    element.innerHTML = 'o';

    turn = 'X'
    title.innerHTML = 'Turn X'
  }

  winner()
}


btnreload.onclick =function(){
  window.location.reload()

}