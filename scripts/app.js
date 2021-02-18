const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;
// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses);

window.addEventListener("keypress", (e) => {
  const guess = e.key;
  game1.makeGuess(guess);
  render();
});

const render = () => {
  puzzleEl.innerHTML = "";
  guessesEl.textContent = game1.statusMessage;

  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("");
  game1 = new Hangman(puzzle, 10);
  render();
};
document.querySelector("#reset").addEventListener("click", startGame);
startGame();

// Fetch:
// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// getCurrentCountry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Fetch:
// getCountry("GB")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

//Fetch with chained promises:
// getLocation()
//   .then((location) => {
//     return getCountry(location.country);
//   })
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
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
