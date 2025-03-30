import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <h2 className="text-center my-4">Welcome to E-Book Store 📚</h2>

      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <Carousel>
          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://ih1.redbubble.net/image.866185721.2691/raf,360x360,075,t,fafafa:ca443f4786.u5.jpg"
              alt="Angular Books"
            />
            <Carousel.Caption>
              <h3>Angular Books</h3>
              <p>Explore our collection of Angular books.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuw-0qNtcaOT1vXp5IqvZvopjvIqvXRu37X6omcWQDFWiTP4K2QL1kb3VYxM2x0asL-9U&usqp=CAU"
              alt="React Books"
            />
            <Carousel.Caption>
              <h3>React Books</h3>
              <p>Learn React with the best books available.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
              src="https://4kwallpapers.com/images/wallpapers/java-black-3440x1440-16069.png"
              alt="Java Books"
            />
            <Carousel.Caption>
              <h3>Java Books</h3>
              <p>Master Java with our top-rated books.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
