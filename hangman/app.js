const game1 = new Hangman("cat", 5); // The word and guesses allowed
const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener("keypress", (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  puzzleEl.textContent = game1.puzzle;
  guessesEl.textContent = game1.statusMessage;
});

// Callback:
// getPuzzle("2", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

// Promise:
getPuzzle("2").then(
  (puzzle) => {
    console.log(puzzle);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
// // Callback:
// getCountry("GB", (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(country.name);
//   }
// });

// Promise:
getCountry("GB").then(
  (country) => {
    console.log(country.name);
  },
  (err) => {
    console.log(`Error: ${err}`);
  }
);
