import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books") 
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">📚 Available Books</h2>
      <div className="row">
        {books.map((book) => (
          <div key={book.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow">
              <img
                src={book.image}
                alt={book.title}
                className="card-img-top"
                style={{ height: "250px", objectFit: "contain", padding: "10px" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text"><strong>Price:</strong> ${book.price}</p>
                <Link to={`/books/${book.id}`} className="btn btn-info me-2">More Info</Link>
                <button className="btn btn-success">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
