// fetch("https://jsonplaceholder.typicode.com/todos/5")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const handleData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}
