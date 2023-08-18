import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "./Quote.css"


function Quote() {
  const [quote, setQuote] = useState({ text: '', author: '' });

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const quoteData = await response.json();

      if (response.ok) {
        setQuote({ text: quoteData.content, author: quoteData.author });
      } else {
        console.error('Error fetching quote:', quoteData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      <div className="cardContainer card text-center" style={{ width: '30%', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)' }}>
        <h1>Random Quote App</h1>
        <div className="card-body">
          <p className="card-text quote-text">{quote.text}</p>
          <p className="card-text quote-author">- {quote.author}</p>
          <button className="btn btn-primary new-quote-button" onClick={fetchQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
