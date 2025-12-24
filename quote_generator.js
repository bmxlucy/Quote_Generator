
// Get references to HTML elements
// Added missing semicolon
const blockquote = document.getElementById('quote');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


// Fetch and display a new quote
// Added error handling for network issues
// and invalid responses
async function getQuote() {
    const url = 'https://api.quotable.io/random';
    const response = await fetch(url);
    const data = await response.json();
    blockquote.textContent = `${data.content}`;
    author.textContent = `${data.author}`;
}

// Event listener for the button
getQuote();


// Share quote on Twitter
function shareQuote() {
    const quoteText = blockquote.textContent;
    const authorText = author.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"' + quoteText + '" - ' + authorText)}`;
    window.open(twitterUrl, '_blank');
}