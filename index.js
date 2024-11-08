const Quotes = [
"The only way to do great work is to love what you do.",

"Believe you can and you're halfway there.",

"Don't watch the clock; do what it does. Keep going.",

"Success is not final, failure is not fatal: It is the courage to continue that counts.", 

"Your time is limited, so don't waste it living someone else's life.", 

"The best time to plant a tree was 20 years ago. The second best time is now.", 

"The only limit to our realization of tomorrow will be our doubts of today." ,

"Hardships often prepare ordinary people for an extraordinary destiny.", 

"The future belongs to those who believe in the beauty of their dreams.", 

"What lies behind us and what lies before us are tiny matters compared to what lies within us.", 

"The journey of a thousand miles begins with one step.", 

"You miss 100% of the shots you don't take.",

"The only impossible journey is the one you never begin.", 

"Life is 10% what happens to us and 90% how we react to it.", 

"The best way to predict the future is to create it.", 

"The secret of getting ahead is getting started.", 

"Don't be afraid to give up the good to go for the great.", 

"Dream big and dare to fail.",

"Act as if what you do makes a difference. It does.",

"The only person you are destined to become is the person you decide to be.",

"The purpose of our lives is to be happy.", 

"Success usually comes to those who are too busy to be looking for it.", 

"Don't wait for opportunity. Create it.", 

"Start where you are. Use what you have. Do what you can.", 

"Success is not the key to happiness. Happiness is the key to success.", 

"It always seems impossible until it's done.", 

"The mind is everything. What you think you become.", 

"Perseverance is not a long race; it's many short races one after the other.",

"To succeed in life, you need two things: ignorance and confidence.", 

"You are never too old to set another goal or to dream a new dream.", 
];

const date = new Date();
document.getElementById("date").innerHTML = date;

function getQuotes() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);

    return Quotes[randomIndex];
}

document.getElementById('button').addEventListener('click', function () {
    const Quote = getQuotes();
    document.getElementById('inputQuote').value = Quote;
})
