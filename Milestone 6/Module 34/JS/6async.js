const loadData = async () => {
  console.log("First");
  console.log("Second");

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }

  console.log("Third");
  console.log("Fourth");
};

loadData();