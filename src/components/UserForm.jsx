import React, { useState, useEffect } from 'react';

function UserForm({ addUser, updateUser, editingUser }) {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    }
  }, [editingUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.email) return;

    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }

    setUser({ name: '', email: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Nombre"
        value={user.name}
        onChange={handleChange}
        autocomplete="off"
      />
      <input
        name="email"
        placeholder="Correo"
        value={user.email}
        onChange={handleChange}
        autocomplete="off"
      />
      <button type="submit">
        {editingUser ? 'Actualizar' : 'Crear'}
      </button>
    </form>
  );
}

export default UserForm;
