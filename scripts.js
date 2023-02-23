let turno = 0;
let contadorWinsX = 0;
let contadorWinsO = 0;
let contadorEmpt = 0;
const contadorX = document.getElementById('contadorX'); 
const contadorO = document.getElementById('contadorO'); 
const contadorEmpate = document.getElementById('contadorEmpate'); 
const btn1 = document.getElementById(1);
const btn2 = document.getElementById(2);
const btn3 = document.getElementById(3);
const btn4 = document.getElementById(4);
const btn5 = document.getElementById(5);
const btn6 = document.getElementById(6);
const btn7 = document.getElementById(7);
const btn8 = document.getElementById(8);
const btn9 = document.getElementById(9);
const btnPvp = document.getElementById('pvp');
const btnPve = document.getElementById('pve');
const turnoIndex = document.getElementById('turno');
const recarga = document.getElementById('recarga');
const resetAll = document.getElementById('resetAll');

const alerta = document.getElementById('alerta');

//REINICIA SOLO EL TABLERO
resetAll.addEventListener('click',()=>{
   window.location.reload();
});

recarga.addEventListener('click',()=>{
   tableRefresh();
});

const tableRefresh=()=>{
   document.querySelectorAll('.cuadro').forEach( cuadro =>{
      cuadro.innerHTML = `<p></p>`;
      cuadro.setAttribute('value','');
      turnoIndex.textContent = 'X TURNO';
      turno=0;
   });
};

document.querySelectorAll('.cuadro').forEach( cuadro => cuadro.addEventListener('click',()=>{
   
   if((turno % 2)===0 && cuadro.value===''){
      agregarPiezaX(cuadro,turnoIndex);
    }else{
       agregarPiezaO(cuadro,turnoIndex);
    }

   //Verificacion de si hay ganador: 
   if(turno>=5){
    if(btn1.value===btn2.value&&btn1.value===btn3.value&&btn1.value!=''){
      contadorWin(btn1.value);
      pintarWin(btn1,btn2,btn3);
      winAltert(btn1.value);
    }else if(btn4.value===btn5.value&&btn4.value===btn6.value&&btn4.value!=''){
      contadorWin(btn4.value);
      pintarWin(btn4,btn5,btn6);
      winAltert(btn4.value);
     }else if(btn7.value===btn8.value&&btn7.value===btn9.value&&btn7.value!=''){
      contadorWin(btn7.value);
      pintarWin(btn7,btn8,btn9);
      winAltert(btn7.value);
      }else if(btn1.value===btn5.value&&btn5.value===btn9.value&&btn1.value!=''){
         contadorWin(btn1.value);
         pintarWin(btn1,btn5,btn9);
         winAltert(btn1.value);
        }else if(btn3.value===btn5.value&&btn3.value===btn7.value&&btn3.value!=''){
         contadorWin(btn3.value);
         pintarWin(btn3,btn5,btn7);
         winAltert(btn3.value);
        }else if(btn1.value===btn4.value&&btn7.value===btn1.value&&btn1.value!=''){
         contadorWin(btn1.value);
         pintarWin(btn1,btn4,btn7);
         winAltert(btn1.value);
        }else if(btn2.value===btn5.value&&btn2.value===btn8.value&&btn2.value!=''){
         contadorWin(btn2.value);
         pintarWin(btn2,btn5,btn8);
         winAltert(btn2.value);
        }else if(btn3.value===btn6.value&&btn3.value===btn9.value&&btn3.value!=''){
         contadorWin(btn3.value);
         pintarWin(btn3,btn6,btn9);
         winAltert(btn3.value);
        }else if(turno===9){//Verificacion de si hay empate
         empates();
         empateAltert();
        };
}
}))

const agregarPiezaX=(cuadro,turnoIndex)=>{
   cuadro.innerHTML = `<p class="piezaX">x</p>`;
   cuadro.setAttribute('value','x');
   turnoIndex.textContent = 'O TURNO';
   console.log(cuadro.value);
   turno++;
}
const agregarPiezaO=(cuadro,turnoIndex)=>{
   cuadro.innerHTML = `<p class="piezaO">o</p>`;
   turnoIndex.textContent = 'X TURNO';
   cuadro.setAttribute('value','o');
   console.log(cuadro.value);
   turno++;
}



const contadorWin=(winner)=>{
   if(winner==='x'){
      contadorWinsX++;
      contadorX.textContent= contadorWinsX;
      setTimeout(() => {
         tableRefresh();
      }, 1000);
   }else if(winner==='o'){
      contadorWinsO++;
      contadorO.textContent= contadorWinsO;
      setTimeout(() => {
         tableRefresh();
      }, 1000);
   }
}

const empates =()=>{
      contadorEmpt++;
      contadorEmpate.textContent= contadorEmpt;
      setTimeout(() => {
         tableRefresh();
      }, 1000);
}

 const pintarWin=(pieza1,pieza2,pieza3)=>{
   const piezasWin = [pieza1,pieza2,pieza3];
   
   if(piezasWin[0].value==='x'){
         piezasWin.map(pieza =>{
         pieza.innerHTML = `<p class="piezaX pieza--win">x</p>`;
         pieza.classList.add('cuadro--winX');
         setTimeout(() => {
            pieza.classList.remove('cuadro--winX');
         }, 1000);
      })
   }else if(piezasWin[0].value==='o'){
      piezasWin.map(pieza =>{
      pieza.innerHTML = `<p class="piezaO pieza--win">o</p>`;
      pieza.classList.add('cuadro--winO');
      setTimeout(() => {
         pieza.classList.remove('cuadro--winO');
      }, 1000);
      });
   }
}; 

const winAltert=(winner)=>{
   Swal.fire({
      title:`Ganan las ${winner}!`,
      background:'#000',
      icon:'success',
    });
}

const empateAltert=()=>{
   Swal.fire({
      title:`Empate!`,
      background:'#000',
      icon:'warning',
    });
}
