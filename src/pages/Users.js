import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch((err) => console.error("Error fetching users:", err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    if (editingUser) {
      fetch(`http://localhost:5000/users/${editingUser.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...editingUser, ...formData }),
      })
        .then((res) => res.json())
        .then(() => {
          fetchUsers();
          setEditingUser(null);
          setFormData({ name: "", email: "" });
        })
        .catch((err) => console.error("Error updating user:", err));
    } else {
      fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: formData.name, email: formData.email }),
      })
        .then((res) => res.json())
        .then(() => {
          fetchUsers();
          setFormData({ name: "", email: "" });
        })
        .catch((err) => console.error("Error adding user:", err));
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          fetchUsers();
        } else {
          console.error("Failed to delete user");
        }
      })
      .catch((err) => console.error("Error deleting user:", err));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({ name: user.name, email: user.email });
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">{editingUser ? "Edit User" : "User Registration"}</h2>

      <form onSubmit={handleSubmit} className="card p-3 shadow-sm">
        <div className="mb-3">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-control"
          />
        </div>
        <button type="submit" className={`btn w-100 ${editingUser ? "btn-warning" : "btn-success"}`}>
          {editingUser ? "Update User" : "Register"}
        </button>
      </form>

      <h3 className="mt-4">Registered Users</h3>
      <ul className="list-group">
        {users.map((user) => (
          <li key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
            {user.name} - {user.email}
            <div>
              <button className="btn btn-primary btn-sm me-2" onClick={() => handleEdit(user)}>Edit</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
