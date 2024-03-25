const quotes = [
  {
    quote: "Life is either a great adventure or nothing.",
    author: "Helen Keller",
  },
  {
    quote: "Despite the forecast, live like it’s spring.",
    author: "Lilly Pulitzer",
  },
  {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "Love asks me no questions, and gives me endless support.",
    author: "William Shakespeare",
  },
  {
    quote: "If you would be loved, love and be lovable.",
    author: "Benjamin Franklin",
  },
  {
    quote: "The supreme happiness in life is the conviction that we are loved.",
    author: "Victor Hugo",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "All progress takes place outside the comfort zone.",
    author: "Michael John Bobak",
  },
  {
    quote: "I never dreamed about success, I worked for it.",
    author: "Estee Lauder",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = `-${todayQuote.author}-`;