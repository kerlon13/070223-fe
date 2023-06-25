//Invert values
function invert(array) { 
  return array.map((el) => el >0 ? -el: el*(-1));
}
//Highest Scoring Word
function high(x){
    const arr = x.split(" ");
    let score = 0;
    let sum =0;
    let word = "";
    for(let i=0;i<arr.length;i++) {
        for(let j=0;j<arr[i].length;j++) {
            sum+=arr[i].charCodeAt(j) - 96;
        }

        if(sum > score){
            score = sum;
            word = arr[i];
            sum = 0;
        }
        else{
            sum = 0;
        }
        
    }

    
    return word;
}
console.log(high("man i need a taxi up to ubud"));

//Validate PIN
function validatePIN(pin) {
    if (pin.match(/^\d{4}$/) || pin.match(/^\d{6}$/)) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(validatePIN("1234"));
  console.log(validatePIN("12345"));

  //Growth of a Population
  function nbYear(p0, percent, aug, p) {
    let years = 0;
  
    while (p0 < p) {
      p0 += p0 * (percent / 100) + aug;
      years++;
    }
  
    return years;
  }
  
  console.log(nbYear(1000, 2, 50, 1200));

  //Find the next perfect square!

  function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
      let nextSquare = Math.sqrt(sq) + 1;

      return nextSquare * nextSquare;
    } 
      return -1; 
  }
  
  console.log(findNextSquare(9));
  console.log(findNextSquare(121));
  console.log(findNextSquare(5));

//Friend or Foe?
  function friend(friends) {
    return friends.filter(name => name.length === 4);
  }
  
  
  console.log(filterFriends(["Ryan", "Kieran", "Jason", "Yous"])); 
  
  
  
  