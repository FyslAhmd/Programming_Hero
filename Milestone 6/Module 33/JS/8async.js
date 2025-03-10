const handleUser = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.jon())
    .then((data) => console.log(data))
    .catch((error) => console.log("error", error));
};

// handleUser();

const num1 = 10;
const num2 = 20;
const result = num1 + num2;

const handleUser2 = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch {
    console.log("Error");
  }
};
handleUser2();
console.log(result);
console.log("hello");
