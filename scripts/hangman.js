class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calculateStatus() {
    const finished = this.word.every(
      (letter) => this.guessedLetters.includes(letter) || letter === " "
    );

    if (this.remainingGuesses === 0) {
      this.status = "You failed. Game Over!";
    } else if (finished) {
      this.status = "You Win!";
    } else {
      this.status = "playing";
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "You failed. Game Over!") {
      return `Nice try. The word was "${this.word.join("")}".`;
    } else {
      return "You guessed the answer correctly!";
    }
  }
  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);

    if (this.status !== "playing") {
      return;
    }

    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}

// const Hangman = function (word, remainingGuesses) {
//   this.word = word.toLowerCase().split("");
//   this.remainingGuesses = remainingGuesses;
//   this.guessedLetters = [];
//   this.status = "playing";
// };

// // Logic to determine this.status:
// Hangman.prototype.calculateStatus = function () {
//   let finished = true;
//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter)) {
//     } else {
//       finished = false;
//     }
//   });

//   if (this.remainingGuesses === 0) {
//     this.status = "You failed. Game Over!";
//   } else if (finished) {
//     this.status = "You Win!";
//   }
// };

// Hangman.prototype.getStatusMessage = function () {
//   if (this.status === "playing") {
//     return `Guesses left: ${this.remainingGuesses}`;
//   } else if (this.status === "You failed. Game Over!") {
//     return `Nice try. The word was "${this.word.join("")}".`;
//   } else {
//     return "You guessed the word correctly!";
//   }
// };

// Hangman.prototype.getPuzzle = function () {
//   let puzzle = "";
//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter) || letter === " ") {
//       puzzle += letter;
//     } else {
//       puzzle += "*";
//     }
//   });

//   return puzzle;
// };

// Hangman.prototype.makeGuess = function (guess) {
//   guess = guess.toLowerCase();
//   const isUnique = !this.guessedLetters.includes(guess);
//   const isBadGuess = !this.word.includes(guess);

//   if (this.status !== "playing") {
//     return;
//   }

//   if (isUnique) {
//     this.guessedLetters.push(guess);
//   }
//   if (isUnique && isBadGuess) {
//     this.remainingGuesses--;
//   }
//   this.calculateStatus();
// };
