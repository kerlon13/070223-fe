  
function moveDisk(diskCount, leftRod, rightRod, middleRod) {
  if (diskCount === 1) {
    
    console.log(`Переместить диск 1 со стержня ${leftRod} на стержень ${rightRod}`);
  } else {
    
    moveDisk(diskCount - 1, leftRod, middleRod, rightRod);

    console.log(`Переместить диск ${diskCount} со стержня ${leftRod} на стержень ${rightRod}`);

    moveDisk(diskCount - 1, middleRod, rightRod, leftRod);
  }
}

const diskCount = 3; 
const leftRod = "leftRod"; 
const rightRod = "rightRod"; 
const middleRod = "middleRod"; 

moveDisk(diskCount, leftRod, rightRod, middleRod);



  
