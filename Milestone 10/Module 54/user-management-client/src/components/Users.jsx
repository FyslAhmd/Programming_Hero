import React, { use, useState } from "react";

const Users = ({ userPromise }) => {
  const initialData = use(userPromise);
  const [data, setData] = useState(initialData);
  console.log(data);

  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);

    //create user in the server
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((currentData) => {
        const newUsers = [...data, currentData];
        setData(newUsers);
        e.target.reset();
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleAddUser} action="">
          <input name="name" type="text" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>

      <div>
        {data.map((user, index) => (
          <p key={user.id}>
            {user.name} : {user.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
