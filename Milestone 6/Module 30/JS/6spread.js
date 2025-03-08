const friends = ['John', 'Peter', 'Mary', 'Steve', 'Amanda'];
console.log(friends);
console.log(...friends);

const newFriends = ['Laura', 'Helen', 'Sophia', friends];
console.log(newFriends);

const newFriends2 = ['Laura', 'Helen', 'Sophia', ...friends];
console.log(newFriends2);

const numbers = [1, 5,100,2, 10, 20, 30];
console.log(Math.max(numbers));
console.log(Math.max(...numbers));