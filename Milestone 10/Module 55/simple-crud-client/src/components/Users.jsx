import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  const handleAddUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };

    //create user in database
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("added data successfully");
          e.target.reset();
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
        }
      });
  };
  const handleDeleteUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };
  return (
    <div>
      <div>
        <form onSubmit={handleAddUser} action="">
          <input type="text" name="name" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="submit" value="Add User" />
        </form>
      </div>

      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email}{" "}
            <Link to={`/update/${user._id}`}>Update</Link>
            <Link to={`/users/${user._id}`}>Details</Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
