const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const generateBtn = document.getElementById('generateBtn');

generateBtn.addEventListener('click', getQuote);

async function getQuote() {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      method: 'GET',
      headers: {
        'X-Api-Key': '' 
      }
    });

    const data = await response.json();
    const quote = data[0];

    quoteText.textContent = `"${quote.quote}"`;
    authorText.textContent = `— ${quote.author}`;

  } catch (error) {
    quoteText.textContent = 'Failed to fetch quote. Please try again later.';
    authorText.textContent = '';
    console.error('Fetch error:', error.message);
  }
}
