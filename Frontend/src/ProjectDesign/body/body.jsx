import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../Nav/NavBar";
import "./body.css";
import "../Nav/Nav.css";
import Item from "../items/item";
import Footer from "../Footer/footer";

function Body() {
  const [isModel, setIsModel] = useState("false");

  useEffect(() => {
    const images = document.querySelectorAll(".animated-image");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    images.forEach((img) => observer.observe(img));

    return () => {
      images.forEach((img) => observer.unobserve(img));
    };
  }, []);

  return (
    <>
      <Nav />
      {/* Hero Section */}
      <div className="container mt-5 " style={{ padding: "0px 2rem 0px 2rem" }}>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12 text-animation">
            <h1>
              Fastest <span style={{ color: "rgb(81, 5, 163)" }}>Delivery</span> & <br /> Easy{" "}
              <span style={{ color: "rgb(81, 5, 163)" }}>Pickup</span>
            </h1>
            <br />
            <p>
              Enjoy hot and fresh food delivered to your doorstep in no time! Our quick and easy
              pickup service ensures you get your favorite meals without any wait. Order now and
              experience convenience like never before!
            </p>
          </div>
          <div className="col-lg-6 col-md-6 col-12 text-center">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-delivery-man-delivered-pizza-to-customer-by-scooter-image_1375132.jpg"
              alt="Delicious Food"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center rounded p-4 text-white text-center text-lg-start" style={{ backgroundColor: "rgb(81, 5, 163)" }}>

          {/* Mobile App Image - Hide below 767px */}
          <div className="col-lg-3 col-md-4 col-12 d-flex justify-content-center d-none d-md-block">
            <img
              src="https://yi-files.yellowimages.com/products/945000/945656/1598507-full.jpg"
              className="img-fluid rounded"
              style={{ maxHeight: "200px", maxWidth: "80%", height: "auto" }}
              alt="Mobile App"
            />
          </div>

          {/* Text and Button - Always Visible */}
          <div className="col-lg-6 col-md-4 col-12 d-flex flex-column align-items-center">
            <h2 className="shadow-css text-center">Download Our Mobile App</h2>
            <button type="button" className="btn btn-light btn-lg text-primary mt-3">
              Download Now
            </button>
          </div>

          {/* Food Image - Hide below 767px */}
          <div className="col-lg-3 col-md-4 col-12 d-flex justify-content-center mt-3 mt-md-0 d-none d-md-block">
            <img
              src="https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA="
              className="img-fluid rounded-circle position-css"
              style={{ maxWidth: "100%", height: "auto", width: "50%" }}
              alt="Food"
            />
          </div>


        </div>
      </div>



      {/* Best Delivered Categories */}
      <div className="container mt-5" style={{ padding: "0px 50px 0px 50px" }}>
        <h2 style={{ backgroundColor: "rgb(81, 5, 163)" }} className="rounded-pill text-light p-2 text-center">
          Our Best Delivered Categories
        </h2>
        <br />
        <div className="container">
        <h5 className="w-100 ">
          We serve delicious meals, ranging from fast food to traditional dishes.
          Each dish is prepared with care and delivered hot and fresh.
          Enjoy mouth-watering flavors that satisfy your cravings.
           🍔🍕
        </h5>
        </div>
      </div>
      <br />

      {/* Food Categories */}
      <div className="container mt-4">
        <div className="row justify-content-center mt-5 gap-5">
          <div className="col-lg-3 col-md-3 col-sm-3 text-center">
            <img
              src="https://img.freepik.com/premium-photo/concept-fast-food-isolated-white-background_185193-48704.jpg"
              className="img-fluid rounded-circle shadow-purple animated-image food-img"
              alt="Fast Food"
            />
            <h4 className="mt-3" style={{ color: "rgb(81, 5, 163)" }} >Fast Food</h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDu1PqyVK2ObwCJaXJ_DQB-Z7keGqY4Zbohw&s"
              className="img-fluid rounded-circle shadow-purple animated-image food-img"
              alt="Veg"
            />
            <h4 className="mt-3"  style={{ color: "rgb(81, 5, 163)" }}>Vegetarian </h4>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-3 text-center">
            <img
              src="https://thumbs.dreamstime.com/b/lamb-curry-dish-indian-cuisine-bowl-61391951.jpg"
              className="img-fluid rounded-circle shadow-purple animated-image food-img"
              alt="Non-Veg"
            />
            <h4 className="mt-3"  style={{ color: "rgb(81, 5, 163)" }} >Non-Vegetarian </h4>
          </div>
        </div>
      </div>

      <Item isModel={isModel} setIsModel={setIsModel} />
      <Footer isModel={isModel} setIsModel={setIsModel} />
    </>
  );
}

export default Body;
