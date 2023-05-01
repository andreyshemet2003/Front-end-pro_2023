let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
let key = '';

Array.from({ length: 16 }).forEach(() => {
    key += alphabet[Math.round(Math.random() * (alphabet.length - 1))];
});

console.log(key);