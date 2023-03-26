let quoteSpace = $("#fetchQuote");
let quoteApiKey = "VPLjgJhecNff7vCheYKrxw==4zgtmN3GTd8nlHDM";
let author = $("#author");

function doStuff(callback) {
  callback();
}

doStuff(function () {
  document.body.className = "visible";
});

let quoteAPI = function () {
  var category = "knowledge";
  var quoteURL = "https://api.api-ninjas.com/v1/quotes?category=" + category;

  fetch(quoteURL, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    cache: "reload", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      "X-Api-Key": "VPLjgJhecNff7vCheYKrxw==4zgtmN3GTd8nlHDM",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      quoteSpace.text(data[0].quote);
      author.text(data[0].author);
    });
};

console.log(quoteAPI);

quoteAPI();
