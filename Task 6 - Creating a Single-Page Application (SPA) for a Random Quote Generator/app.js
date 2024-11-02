const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    quote: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "It does not matter how slowly you go, as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote-text").textContent = `"${randomQuote.quote}"`;
  document.getElementById(
    "quote-author"
  ).textContent = `— ${randomQuote.author}`;
}

document.getElementById("new-quote").addEventListener("click", generateQuote);

const quotes = [
  {
    quote: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    quote: "Life is 10% what happens to us and 90% how we react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    quote: "Your time is limited, don’t waste it living someone else’s life.",
    author: "Steve Jobs",
  },
  {
    quote: "It does not matter how slowly you go, as long as you do not stop.",
    author: "Confucius",
  },
  {
    quote: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford",
  },
  {
    quote:
      "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote: "Believe you can and you’re halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote: "I find that the harder I work, the more luck I seem to have.",
    author: "Thomas Jefferson",
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    quote: "If you’re going through hell, keep going.",
    author: "Winston Churchill",
  },
  {
    quote: "Don’t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "Perseverance is not a long race; it is many short races one after the other.",
    author: "Walter Elliot",
  },
  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  document.getElementById("quote-text").textContent = `"${randomQuote.quote}"`;
  document.getElementById(
    "quote-author"
  ).textContent = `— ${randomQuote.author}`;
}

document.getElementById("new-quote").addEventListener("click", generateQuote);
