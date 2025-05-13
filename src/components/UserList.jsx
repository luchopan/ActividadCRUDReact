import React from 'react';

function UserList({ users, deleteUser, editUser }) {
  return (
    <div>
      <h2>Lista de Usuarios</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> {user.email}
            <button onClick={() => editUser(user)}>Editar</button>
            <button onClick={() => deleteUser(user.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
