const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => console.log(res.json()))
    .then((data) => console.log(data))
    .catch((data) => console.log(data));
};

// loadData();

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const status = true;
    if (status) {
      resolve("Resolved");
    } else {
      reject("Rejected");
    }
  });
};

// fetchData()
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

//   console.log(fetchData());


