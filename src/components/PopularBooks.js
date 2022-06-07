import axios from "axios";
import React, { useEffect, useState } from "react";

const Popularbooks = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  useEffect(() => {
    axios
      .get("https://hapi-books.p.rapidapi.com/month/2022/4", {
        headers: {
          "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
          "X-RapidAPI-Key":
            "77777da060mshac9f2515a046a6ap18d4d9jsndc0d2002880b",
        },
      })
      .then((response) => setPopularBooks(response.data));
  }, []);
  return (
    <>
      <h1 style={{ textAlign: "center" }} className="heading">
        {" "}
        Most Popular Books{" "}
      </h1>
      <div className="container">
        {popularBooks.map((book) => {
          return (
            <div key={book.book_id}>
              <div className="books-container">
                <div className="book-container">
                  <img src={book.cover} alt="book" />
                  <div className="book-info">
                    <h3> {book.name} </h3>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Popularbooks;
