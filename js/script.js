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
    year: 1972
  },
  {
    quote:"May the Force be with you.",
    source:"STAR WARS",
    year: 1977,
    citation: "George Lucas"
  },
  {
    quote:"Today, I consider myself the luckiest man on the face of the earth.",
    source:"THE PRIDE OF THE YANKEES",
    year: 1943
  },
  {
    quote:"If you build it, they will come.",
    source:"FIELD OF DREAMS",
    year: 1989
  },
  {
    quote:"Nobody puts Baby in a corner.",
    source:"DIRTY DANCING",
    year: 1987
  },
];



//getRandomQuote function used to randomly pull a movie quote from above
function getRandomQuote() {

  const randomNumber = Math.floor(Math.random() * quotes.length)
  return quotes[randomNumber];

};


//function that prints a random quote based on the function above
//quote gets randomly pulled, then goes through the print function to properly display the movie quote
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

  html += `</p>`;
  return document.getElementById('quote-box').innerHTML = html;
};

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);