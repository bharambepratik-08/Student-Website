import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
  const host = "http://localhost:5000";
  const [users, setUsers] = useState([]);

  // Add a User

  const addUser = async (name, email, password) => {
    const response = await fetch(`${host}/api/auth/createuser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });

    const json = await response.json();

    if (response.ok) {
      localStorage.setItem("token", json); // save the JWT
      setUsers(users.concat(json));
    } else {
      console.error("Backend Error:", json);
      alert(json.errors ? json.errors[0].msg : "Failed to add users");
    }
  };

  // Get All Users
  const getUser = async () => {
    const response = await fetch(`${host}/api/auth/fetchAllUsers`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();
    setUsers(json);
  };

  // Delete a User
  const deleteUser = async (id) => {
    const response = await fetch(`${host}/api/auth/deleteUser/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
    });

    const json = await response.json();

    console.log(json);

    // Update UI

    const newUsers = users.filter((user) => {
      return user._id !== id;
    });
    setUsers(newUsers);
  };

  // Edit a User
  const editUser = async (id, name, email, password) => {
    const response = await fetch(`${host}/api/auth/updateTask/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"), // to identify the user
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const json = await response.json();

    // logic to edit

    let newUsers = JSON.parse(JSON.stringify(users));
    for (let index = 0; index < newUsers.length; index++) {
      const element = newUsers[index];
      if (element._id === id) {
        element.email = email;
        element.password = password;
        element.name = name;
        break;
      }
    }

    setUsers(newUsers);
  };

  return (
    <UserContext.Provider
      value={{ users, addUser, deleteUser, editUser, getUser }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
