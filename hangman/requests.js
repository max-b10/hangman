// Callback:
// const getPuzzle = (wordCount, callback) => {
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       callback(undefined, data.puzzle);
//     } else if (e.target.readyState === 4) {
//       callback("An error has taken place", undefined);
//     }
//   });
//   request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//   request.send();
// };

// Promise:
const getPuzzle = (wordCount) =>
  new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        resolve(data.puzzle);
      } else if (e.target.readyState === 4) {
        reject("An error has taken place");
      }
    });
    request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    request.send();
  });

// Promise
const getCountry = (countryCode) =>
  new Promise((resolve, reject) => {
    const countryRequest = new XMLHttpRequest();
    countryRequest.addEventListener("readystatechange", (e) => {
      if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find(
          (country) => country.alpha2Code === countryCode
        );
        resolve(country);
      } else if (e.target.readyState === 4) {
        reject("Error Mofo!");
      }
    });
    countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
    countryRequest.send();
  });

// Callback:
// const getCountry = (countryCode, callback) => {
//   const countryRequest = new XMLHttpRequest();
//   countryRequest.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//       const data = JSON.parse(e.target.responseText);
//       const country = data.find(
//         (country) => country.alpha2Code === countryCode
//       );
//       callback(undefined, country);
//     } else if (e.target.readyState === 4) {
//       callback("Can't find data");
//     }
//   });
//   countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
//   countryRequest.send();
// };
