/******************************/
/********* BINGO KATA *********/
/* Author: Octavio Lafourcade */
/******************************/

/* Bingo is a game of chance played using cards with numbers printed on them, which are marked off of the card as the
caller reads out some manner of random numbers. Play usually ceases once a certain pattern is achieved on a card,
where the winner will shout out "Bingo!" in order to let the caller and the room know that there may be a winner.
 */

/* Calling Bingo Numbers */
function bingo_number(){
  let values = [1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36,37,38,39,40,
                41,42,43,44,45,46,47,48,49,50,
                51,52,53,54,55,56,57,58,59,60,
                61,62,63,64,65,66,67,68,69,70,
                71,72,73,74,75],
    list = [],
    i = values.length,
    j = 0;

  /* Calling a number between 1 and 75 inclusive */
  while (i--) {
      j = Math.floor(Math.random() * (i+1));
      list.push(values[j]);
      values.splice(j,1);
  }
  return list;

}


/* Generating Bingo Cards */
let B = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let I = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
let N = [31,32,33,34,35,36,37,38,39,40,41,42,43,44,45];
let G = [46,47,48,49,50,51,52,53,54,55,56,57,58,59,60];
let O = [61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

function bingo_card_generator(){
  let bingo =new Object();
  let temp = 0;
  
  bingo.B = B.sort(() => Math.random() - Math.random()).slice(0, 5);
  bingo.I = I.sort(() => Math.random() - Math.random()).slice(0, 5);
  bingo.N = N.sort(() => Math.random() - Math.random()).slice(0, 2);
  bingo.N.push('FREE');

  /* Adding the last 2 elements to the N array */
  for(let i =0; i < 2; i++){
    N.map(e => {
      if(!bingo.N.includes(e)){
        temp = e;
        return temp;
      }
    });
    bingo.N.push(temp); 
  }
  bingo.G = G.sort(() => Math.random() - Math.random()).slice(0, 5);
  bingo.O = O.sort(() => Math.random() - Math.random()).slice(0, 5);
  return bingo;
}


/* Checking Bingo Cards */
player_calls = 'Bingo'
console.log("Player Calls: "+player_calls)

function check_winner(){
  // Calling numbers
  bingo_number = bingo_number();
  console.log(bingo_number);

  // Generating Bingo Card
  bingo_card_generator = bingo_card_generator();
  console.log(bingo_card_generator);

  // Checking if the player is the winner
  bingo_number.map(e => {
    if(bingo_card_generator.B.includes(e) ||
    bingo_card_generator.I.includes(e) ||
    bingo_card_generator.N.includes(e)||
    bingo_card_generator.G.includes(e)||
    bingo_card_generator.O.includes(e)){
        console.log("Yes! You're the winner");
    }else{
      console.log("You're not the winner yet");
    }
  })
}

check_winner();