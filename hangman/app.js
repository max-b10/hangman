// Primitive value: string, number, boolean, null, undefined.

// Object: myObject --> Object.protoype --> null
// Array: myArray --> Array.prototype --> Object.protype --> null
// Function: myFunc --> Funtion.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean: --> Boolean:.prototype --> Object.prototype --> null
// const product = "computer";
// console.log(product.split(""));

const game1 = new Hangman("cat", 5); // The word and guesses allowed
const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.getStatusMessage();

window.addEventListener("keypress", function (e) {
  const guess = e.key;
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.getPuzzle();
  guessesEl.textContent = game1.getStatusMessage();
});
