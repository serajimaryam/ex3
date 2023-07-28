
function chessValue(){
    const val = document. querySelector('input'). value;
    let chessNum = Number(val);

   let chessboard = document.getElementById('chessboard');
   for (let i = 0; i < chessNum; i++) {
      for (let j = 0; j < chessNum; j++) {
         let chessSquare = document.createElement('div');
        if ((i + j) % 2 == 0) {
            chessSquare.style.backgroundColor = '#000';
            chessSquare.style.float ='left';
            chessSquare.style.width ='12.5%';
            chessSquare.style.height = '12.5%';
         }else{
            chessSquare.style.backgroundColor = 'white';
            chessSquare.style.float ='left';
            chessSquare.style.width ='12.5%';
            chessSquare.style.height = '12.5%';

         }
         chessboard.appendChild(chessSquare);
      }
   }
}