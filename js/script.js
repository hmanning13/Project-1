/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


//Array of movie quotes and the years they were produced


const quotes = [
  {
    quote:"I'm gonna make him an offer he can't refuse.",
    source:"THE GODFATHER",
    year: 1972,
    tags: "#crime, #drama"
  },
  {
    quote:"May the Force be with you.",
    source:"STAR WARS",
    citation: "George Lucas",
    year: 1977,
    tags: "#action, #adventure, #fantasy"
  },
  {
    quote:"Today, I consider myself the luckiest man on the face of the earth.",
    source:"THE PRIDE OF THE YANKEES",
    year: 1943,
    tags: "#biography, #drama, #romance"
  },
  {
    quote:"If you build it, they will come.",
    source:"FIELD OF DREAMS",
    year: 1989,
    tags: "#drama, #family, #fantasy"
  },
  {
    quote:"Nobody puts Baby in a corner.",
    source:"DIRTY DANCING",
    year: 1987,
    tags: "#drama, #music, #romance"
  },
];


//getRandomQuote function used to randomly pull a movie quote from above


function getRandomQuote() {

  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber];

};


//function that prints a random quote based on the function above
//quote gets randomly pulled, then goes through the print function to properly display the movie quote
//second function calls random rgb background color
//gets pulled every time the printQuote function is called


function printQuote() {
  const quote = getRandomQuote();
  let html = `<p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}`;
  if (quote.year) {
    html += `<span class = "year"> ${quote.year} </span>`;
  };
  if (quote.citation) {
    html += `<span class = "citation"> ${quote.citation} </span>`;
  };
  if (quote.tags) {
    html += `<span class = "tags"> ${quote.tags} </span>`;
  };

  html += `</p>`;
    function randomRGB() {

      let colorOne, colorTwo, colorThree;
      colorOne = Math.floor(Math.random()*256);
      colorTwo = Math.floor(Math.random()*256);
      colorThree = Math.floor(Math.random()*256);
      return `rgb(${colorOne}, ${colorTwo}, ${colorThree})`;
  }
  document.querySelector("body").style.backgroundColor = randomRGB();
  return document.getElementById('quote-box').innerHTML = html;
};


//setInterval is called to automatically refresh the page every 10 seconds


setInterval(printQuote, 10000);
document.getElementById('load-quote').addEventListener("click", printQuote, false);