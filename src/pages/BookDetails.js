import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/books") 
      .then((res) => res.json())
      .then((data) => {
        const foundBook = data.find((b) => b.id.toString() === id);
        setBook(foundBook);
      });
  }, [id]);

  if (!book) {
    return <h2 className="text-center mt-5">📚 Book Not Found!</h2>;
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-lg">
        <h2 className="text-primary">{book.title}</h2>
        <p><strong>Book ID:</strong> {book.id}</p>
        <p><strong>Price:</strong> ${book.price}</p>
        <p><strong>Description:</strong> {book.description || "No description available."}</p>
        <img src={book.image} alt={book.title} className="img-fluid rounded" style={{ maxWidth: "200px" }} />
      </div>
    </div>
  );
};

export default BookDetails;
