// 1
const friends = ['Mango', 'Poly','Kiwi', 'Ajax'];
let string = friends.join(', ');
console.log(string);

// 2
const cards = [
    'Card-1',
    'Card-2',
    'Card-3',
    'Card-4',
    'Card-5',
];
// 3
cards.splice(2, 1);
console.log(cards);
// 4
cards.splice(5, 0, 'Card-6');
console.log(cards);
// 5
cards.splice(3, 1, 'Card-4 (updated)');
console.log(cards);