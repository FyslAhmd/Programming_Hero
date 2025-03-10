const loadUser = () => {
  fetch(
    "http://203.190.10.22:8189/result?grecaptcha&semesterId=243&studentId=221-15-4699"
  )
    .then((res) => res.json())
    .then((data) => {
      displayUser(data);
    });
};

const displayUser = (data) => {
  const userContainer = document.getElementById("users");

  for (const user of data) {
    const li = document.createElement("li");
    li.innerText= `${user.courseTitle} , ${user.pointEquivalent}`;
    userContainer.appendChild(li);
  }
};