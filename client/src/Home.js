/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/books/")
      .then((res) => res.json())
      .then((results) => {
        console.log(results);
        setData(results);
      });
  }, []);

  return (
    <div className="container">
      {data
        ? data.map((item) => {
            return (
              <div
                className="card"
                style={{
                  width: "25rem",
                  float: "left",
                  marginLeft: "30px",
                  marginTop: "30px",
                }}
                key={item.id}
              >
                <img
                  className="card-img-top"
                  style={{ height: "180px" }}
                  src={item.image}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text">
                    <b>Author:</b>
                    {item.author}
                  </p>
                  <p className="card-text">
                    <b>Price:</b>${item.price}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <Link to="#" className="btn btn-primary">
                      View details
                    </Link>
                    <Link to="#" className="btn btn-info">
                      Like
                    </Link>
                    <Link to="#" className="btn btn-warning">
                      Edit details
                    </Link>
                    <Link to="#" className="btn btn-danger">
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
}

export default Home;
