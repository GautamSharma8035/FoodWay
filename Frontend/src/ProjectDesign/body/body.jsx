import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Nav from "../Nav/NavBar";
import './body.css'
import '../Nav/Nav.css';
import { useEffect } from 'react';
import Item from "../items/item";
import Footer from "../Footer/footer";



function Body() {
    const [isModel,setIsModel] = useState("false");

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
          { threshold: 0.3 } // Jab 30% image visible ho tab animation trigger hoga
        );
    
        images.forEach((img) => observer.observe(img));
    
        return () => {
          images.forEach((img) => observer.unobserve(img));
        };
      }, []);
  return (
    <>
    <Nav/>
    <div className="container d-flex mt-5 align-items-center justify-content-between w-75" >
      <div className="container w-50 text-animation">
        <h1>
          Fastest <span style={{color:"rgb(81, 5, 163)"}}>Delivery</span> & <br /> Easy{" "}
          <span style={{color:"rgb(81, 5, 163)"}}>Pickup</span>
        </h1>
        <br />
        <p>
          Enjoy hot and fresh food delivered to your doorstep in no time! Our
          quick and easy pickup service ensures you get your favorite meals
          without any wait. Order now and experience convenience like never
          before!
        </p>
      </div>

     
      <div className="container w-50 image-animation">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220523/pngtree-delivery-man-delivered-pizza-to-customer-by-scooter-image_1375132.jpg"
          alt="Delicious Food"
          className="rounded w-100"
        />
      </div>
    </div>
    <div className="container d-flex  gap-5 rounded" style={{backgroundColor:"rgb(81, 5, 163)", height:"250px", marginTop:"150px"}}>
        <img src="https://yi-files.yellowimages.com/products/945000/945656/1598507-full.jpg" className=" rounded m-5 " style={{height:"300px"}}></img>
        <div className="container justify-content-center mt-5 ">
            <h2 className="text-light shadow-css" style={{fontSize:"40px"}}>Download Our Mobile App</h2>
            <button type="button" className="btn  btn-lg btn-light text-primary">Download Now</button>
        </div>
        <div className="w-75">
        <img src="https://media.istockphoto.com/id/1348318884/photo/plate-of-mexican-food-tacos.jpg?s=612x612&w=0&k=20&c=Vt8vi4-sCaum6YrzAiAkH7lUJK5mtp2zYT3uYw1M7iA=" className="w-75 rounded-circle position-css"/>
    </div></div>
    <br/>
    <div className="container d-flex justify-content-center gap-5" style={{marginTop:"150px"}}>
        <h1>Our <span style={{color:"rgb(81, 5, 163)"}}> Best Delivered </span><br/> Categories</h1>
        <p className="p-4 w-50">We serve delicious meals, from fast food to traditional dishes, delivered hot and fresh. Enjoy great taste at your doorstep! 🍔🍕</p>
    </div>
    <div className="container d-flex justify-content-center gap-5 mt-4">
      <img
        src="https://img.freepik.com/premium-photo/concept-fast-food-isolated-white-background_185193-48704.jpg"
        className="w-25 rounded-circle shadow-purple animated-image"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDu1PqyVK2ObwCJaXJ_DQB-Z7keGqY4Zbohw&s"
        className="w-25 rounded-circle shadow-purple animated-image"
      />
      <img
        src="https://thumbs.dreamstime.com/b/lamb-curry-dish-indian-cuisine-bowl-61391951.jpg"
        className="w-25 rounded-circle shadow-purple animated-image"
      />
    </div>
    <Item isModel={isModel} setIsModel={setIsModel}/>
    <Footer isModel={isModel} setIsModel={setIsModel} />
    </>
  );
}

export default Body;
