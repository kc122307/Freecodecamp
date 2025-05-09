import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import './App.css';

const colors = [
  '#16a085', '#27ae60', '#2c3e50', '#f39c12',
  '#e74c3c', '#9b59b6', '#FB6964', '#342224',
  '#472E32', '#BDBB99', '#77B1A9', '#73A857'
];

const localQuotes = [
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey"
  },
  {
    text: "Life is a succession of lessons which must be lived to be understood.",
    author: "Ralph Waldo Emerson"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "The best way to predict your future is to create it.",
    author: "Abraham Lincoln"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];


function QuoteBox() {
  const [quote, setQuote] = useState({ text: '', author: '' });
  const [color, setColor] = useState(colors[0]);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Initialize first quote
  useEffect(() => {
    getNewQuote();
    setIsInitialLoad(false);
  }, []);

  const getNewQuote = () => {
    const randomIndex = Math.floor(Math.random() * localQuotes.length);
    const newColor = colors[Math.floor(Math.random() * colors.length)];
    setQuote(localQuotes[randomIndex]);
    setColor(newColor);
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  
  return (
    <div className="app" style={{ backgroundColor: color }}>
      <div id="quote-box" style={{ color }}>
        <div id="text">"{quote.text}"</div>
        <div id="author">- {quote.author}</div>
        
        <div className="buttons">
          <button
            id="new-quote"
            onClick={getNewQuote}
            style={{ backgroundColor: color }}
          >
            New Quote
          </button>
          
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/kunal-chandel123/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: color }}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/kc122307"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: color }}
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteBox;