// Using Fetch:
const getPuzzle = async (wordCount) => {
  const response = await fetch(
    `//puzzle.mead.io/puzzle?wordCount=${wordCount}`
  );
  if (response.status === 200) {
    const data = await response.json();
    return data.puzzle;
  } else {
    throw new Error("Unabe to get puzzle");
  }
};

// const getCurrentCountry = async () => {
//   const location = await getLocation();
//   return getCountry(location.country);
// };

// Using Fetch with async-await:
const getCountry = async (countryCode) => {
  const response = await fetch("//restcountries.eu/rest/v2/all");
  if (response.status === 200) {
    const data = await response.json();
    return data.find((country) => country.alpha2Code === countryCode);
  } else {
    throw new Error("Unable to fetch the country");
  }
};

// Using Fetch with async-await:
const getLocation = async () => {
  const response = await fetch("//ipinfo.io/json?token=e437d942b50803");
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Unable to get Location");
  }
};

// const getLocation = () => {
//   return fetch("http://ipinfo.io/json?token=e437d942b50803").then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch data");
//       }
//     }
//   );
// };

// Using Fetch:
// const getCountry = (countryCode) => {
//   return fetch("http://restcountries.eu/rest/v2/all")
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch data");
//       }
//     })
//     .then((data) => data.find((country) => country.alpha2Code === countryCode));
// };

// const getPuzzleOld = (wordCount) => {
//   return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then(
//     (response) => {
//       if (response.status === 200) {
//         return response.json();
//       } else {
//         throw new Error("Unable to fetch the puzzle");
//       }
//     }
//   );
// };
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

// // Promise:
// const getPuzzle = (wordCount) =>
//   new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         resolve(data.puzzle);
//       } else if (e.target.readyState === 4) {
//         reject("An error has taken place");
//       }
//     });
//     request.open("GET", `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
//   });

// Promise
// const getCountryOld = (countryCode) =>
//   new Promise((resolve, reject) => {
//     const countryRequest = new XMLHttpRequest();
//     countryRequest.addEventListener("readystatechange", (e) => {
//       if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find(
//           (country) => country.alpha2Code === countryCode
//         );
//         resolve(country);
//       } else if (e.target.readyState === 4) {
//         reject("Error Mofo!");
//       }
//     });
//     countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
//     countryRequest.send();
//   });
