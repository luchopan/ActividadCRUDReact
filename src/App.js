import "./App.css";

import React, { useState, useEffect } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState(() => {
    // Cargar usuarios desde localStorage al iniciar
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Guardar usuarios en localStorage cada vez que cambien
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  return (
    <div className="App">
      <h1>Gestión de Usuarios</h1>
      <UserForm
        addUser={addUser}
        updateUser={updateUser}
        editingUser={editingUser}
      />
      <UserList users={users} deleteUser={deleteUser} editUser={editUser} />
    </div>
  );
}

export default App;
