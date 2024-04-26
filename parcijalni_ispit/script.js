"use strict";

const searchiTunes = () => {
  const searchInput = document.querySelector("input").value;
  const apiUrl = `https://itunes.apple.com/search?term=${searchInput}`;
  if (!searchInput || searchInput === "") {
    alert("Molimo unesite pojam za pretragu");
  } else {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        prikaziRezultate(data.results);
      });
  }
};

const prikaziRezultate = (results) => {
  const searchResults = document.getElementById("container-pjesama");
  searchResults.innerHTML = "";

  results.forEach((result) => {
    const resultDiv = document.createElement("div");
    resultDiv.innerHTML = `
    <img src="${result.artworkUrl100}" alt="${result.trackName}">
    <h2>${result.trackName}</h2>
    <h3>${result.artistName}</h3>
    `;

    searchResults.appendChild(resultDiv);
  });
};

document.querySelector("#search-bar").addEventListener("input", searchiTunes);
