/**
 * Verkefni 7 – Reikniæfingarforrit
 *
 * Forrit sem æfir hraða í að reikna einföld dæmi
 */

// fasti sem segir til um hve marga leiki eigi að spila
const GAMES_TO_PLAY = 10;

/**
 * Birtir upplýsingar um leik og eftir að notandi samþykkir spilar fyrsta leik
 * með kalli í play().
 * Eftir leik er notanda boðið að spila annan leik, ef ekki hættir forrit.
 */
function start() {
  alert('Markmiðið er að svara eins mörgum af 10 dæmum rétt eins hratt og mögulegt er.');
  do{
    play();
  } while(confirm('spila aftur?'));
}

/**
 * Spilar einn leik. Heldur utan um hvenær leikur byrjaði, hvenær endar og
 * fjölda réttra svara. Eftir leik eru birtar upplýsingar um niðurstöðu:
 *   Þú svaraðir X af 10 dæmum rétt á Y sekúndum
 *   Meðalrétt svör á sekúndu eru Z
 * Þar sem Y og Z hafa tvo aukastafi.
 *
 * Ef notandi ýtir á "Cancel" í leik eru skilaboðin "Hætt í leik." birt og engar
 * upplsýingar um niðurstöður.
 *
 */
function play() {
  var start = new Date();
  let rettSvor = 0;
  let spilun = 0;
  do {
    let rettSvar = ask();
    var finish = new Date();
    if (rettSvar == true){
      alert("true");
      rettSvor++;
      spilun++;
    }
    else if (rettSvar == false){
      alert("false");
      spilun++;
    }
    else if (rettSvar === null){
      return alert('Leikur stöðvaður');
    }
  }
  while (spilun < GAMES_TO_PLAY) {
  }
  var finishTime = (finish-start)/1000;
  var fT = finishTime.toFixed(2);
  var medalTal = spilun/(finishTime/1000);
  var mT = medalTal.toFixed(2);
  alert(`Þú varst með ${rettSvor} rétt svör af 10 mögulegum. Heildartími þinn var ${fT} og meðalfjöldi réttra svara á sekúndu er ${mT}`);
}


/**
 * Spyr einnar spurningar og skilar upplýsingum um svar (mögulega með því að
 * nota true, false og null ef notandi hættir). Birtir notanda propmpt til að
 * svara í og túlkar svarið yfir í tölu.
 *
 * Mögulegar spurningar eru:
 * - `+` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `-` dæmi þar sem báðar tölur geta verið á bilinu `[1, 100]`
 * - `*` dæmi þar sem báðar tölur geta verið á bilinu `[1, 10]`
 * - `/` dæmi þar sem fyrri tala er á bilinu `[2, 10]` og seinni talan er fyrri
 *   talan sinnum tala á bilinu `[2, 10]` þ.a. svarið verði alltaf heiltala
 *
 * Sniðugt væri að færa það að búa til spurningu í nýtt fall sem ask() kallar í.
 */
function ask() {
  
  let breytur = ["+", "-", "*", "/"];
  let breyta = breytur[randomNumber(0,3)];
  let j;
  let i;
  switch(breyta){
    case "+":
      j = randomNumber(1,100);
      i = randomNumber(1,100);
      var answer = prompt(`hvað er ${i}+${j} ?`);
      if(parseGuess(answer) === i+j){
        return true;
        }
      else if (parseGuess(answer) == null){
        return null;
      }
      else{
        return false;
      }
    case "-":
      j = randomNumber(1,100);
      i = randomNumber(1,100);
      answer = prompt(`hvað er ${i}-${j} ?`);
      if(parseGuess(answer) === i-j){
        return true;
        }
      else if (parseGuess(answer) == null){
        return null;
      }
      else{
        return false;
      }
    case "/":
      j = randomNumber(2,10);
      i = j*randomNumber(2,10);
      answer = prompt(`hvað er ${j}/${i} ?`);
      if(parseGuess(answer) === j/i){
        return true;
        }
      else if (parseGuess(answer) == null){
        return null;
      }
      else{
        return false;
      }
    case "*":
      j = randomNumber(1,10);
      i = randomNumber(1,10);
      answer = prompt(`hvað er ${i}*${j} ?`);
      if(parseGuess(answer) === i*j){
        return true;
        }
      else if (parseGuess(answer) == null){
        return null;
      }
      else{
        return false;
      }
  }
}

function parseGuess(input) {
  const parsed = parseInt (input, 10);
  if (isNaN(parsed)) {
    return null;
  }
  return parsed;
}
/**
 * Skilar tölu af handahófi á bilinu [min, max]
 */
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Byrjar leik
start();
