/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    year: 2005,
    source: "Steve Jobs",
    citation: "Speech",
    category: "Inspiring"
  },
  {
    quote: "You miss 100% of the shots you don’t take.",
    year: 1980,
    source: "Wayne Gretzky",
    citation: "Interview",
    category: "Inspiring"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    year: "",
    source: "Thomas A. Edison",
    citation: "Biography",
    category: "Motivational"
  },
  {
    quote: "The only limit to our realization of tomorrow will be our doubts of today.",
    year: 1945,
    source: "Franklin D. Roosevelt",
    citation: "Speech",
    category: "Inspiring"
  },
 
  {
    quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    year: 1941,
    source: "Winston Churchill",
    citation: "Speech",
    category: "Motivational"
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    year: 1980,
    source: "John Lennon",
    citation: "Lyrics",
    category: "Humor"
  },
  {
    quote: "Life is short. Smile while you still have teeth",
    year: "",
    source: "Mallory Hopkins",
    citation: "",
    category:"Humor"
  },
  {
    quote: "Sleep is just a time machine to breakfast",
    year: "",
    source: "Someone from iFunny",
    citation: "",
    category:"Humor"
  }
]




/***
 * `getRandomQuote` function
***/

//Returns a random quote when passing the name of the array as the argument

function getRandomQuote(arr){
  let randomNumber = Math.floor(Math.random()* arr.length)
  return arr[randomNumber]
  }

  //Returns a random number 0-255

  function getRandomNumber(){
    let randomNumber = Math.floor(Math.random()* 256)
    return randomNumber
  }

/***
 * `printQuote` function
***/

//Displays a random quote to the user

function printQuote(){
  let randomQuote = getRandomQuote(quotes)
  let quoteBox = document.querySelector("#quote-box");
  let categoryBox = document.querySelector(".category-box");
  categoryBox.innerHTML=`<p class="category">${randomQuote.category}</p>`
  let body= document.querySelector("body")
  body.style.backgroundColor=`rgb(${getRandomNumber()},${getRandomNumber()},${getRandomNumber()})`
 if(!randomQuote.year && !randomQuote.citation){
  quoteBox.innerHTML=`<p class="quote"> ${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}`
} else if(!randomQuote.citation){
  quoteBox.innerHTML=`<p class="quote"> ${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}
      <span class="year"> ${randomQuote.year} </span>`
} else if(!randomQuote.year){
  quoteBox.innerHTML=`<p class="quote"> ${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}
      <span class="citation"> ${randomQuote.citation} </span>`
}
else{
  quoteBox.innerHTML=`<p class="quote"> ${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}
  <span class="citation"> ${randomQuote.citation} </span>
      <span class="year"> ${randomQuote.year} </span>`
}
 

}

//Quotes automatically refresh every 10 seconds

setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

