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
// Fetch:
getPuzzle("2")
  .then((data) => {
    console.log(data.puzzle);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
// Fetch:
// getCountry("GB")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

//Fetch with chained promises:
getLocation()
  .then((location) => {
    return getCountry(location.country);
  })
  .then((country) => {
    console.log(country.name);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
//Fetch:
// getLocation()
//   .then((location) => {
//     console.log(
//       `City: ${location.city}, Region: ${location.region} and Country Code: ${location.country}`
//     );
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// Promise:
// getCountry("GB").then(
//   (country) => {
//     console.log(country.name);
//   },
//   (err) => {
//     console.log(`Error: ${err}`);
//   }
// );
// Callback:
// getPuzzle("2", (error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });
// // Callback:
// getCountry("GB", (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(country.name);
//   }
// });
