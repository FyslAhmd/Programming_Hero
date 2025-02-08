var friends = ["alam","kalam","salam",100,{},[]];
console.log(friends);
console.log(friends[1]);
console.log(friends.length);

friends.push("faysal");
console.log(friends);

friends.pop();
console.log(friends);

friends.unshift("Faysal");
console.log(friends);

friends.shift();
console.log(friends);

var newArray = friends.slice(2,4);
console.log(newArray);

newArray = friends.slice(-2);
console.log(newArray);

newArray = friends.slice(1,-2);
console.log(newArray);


const months = ['Jan', 'March', 'April', 'June'];
months.splice(1,0,'Feb');
console.log(months);

months.splice(3,2,'May','Jun');
console.log(months);