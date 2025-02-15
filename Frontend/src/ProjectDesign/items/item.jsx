import { Modal } from "bootstrap";
import React, { useState } from "react";

function Item({isModel,setIsModel}) {
    const [items] = useState([
        { id: 1, name: "Burger", img: "https://img.freepik.com/free-photo/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29707.jpg" },
        { id: 2, name: "Pizza", img: "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=" },
        { id: 3, name: "Pasta", img: "https://www.shutterstock.com/image-photo/penne-meat-tomato-sauce-vegetables-260nw-468914663.jpg" },
        { id: 4, name: "Sandwich", img: "https://files.oaiusercontent.com/file-XeyHv1JN6FGrHimdgVohLu?se=2025-02-15T09%3A40%3A13Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D7da9f205-9a02-48aa-b200-7c6aa7c0cd9b.webp&sig=J6baAZM/PuupPn60EDEDmPof4H1hIaFUzqcVmoBHIYg%3D" },
        
        { id: 5, name: "Indian Thali", img: "https://static.vecteezy.com/system/resources/previews/030/658/826/non_2x/indian-food-with-white-background-high-quality-ultra-free-photo.jpg" },
        { id: 6, name: "Daal Bati", img: "https://media.istockphoto.com/id/521668033/photo/indian-rajasthani-food-dal-bati-laddu-salad.jpg?s=612x612&w=0&k=20&c=gn02vFPpFtkeKFjJKSPVLuksyUdG658rBAryVE0db2c=" },
        { id: 7, name: "Kaju Paneer", img: "https://thumbs.dreamstime.com/b/kaju-curry-cashew-indian-spices-64104270.jpg" },
        { id: 8, name: "Sev Tamatar", img: "https://img.freepik.com/premium-photo/dhaba-style-sev-bhaji-sabzi-curry-made-tomato-curry-with-gathiya-ganthia-shev-served-bowl-karahi-selective-focus_466689-37795.jpg" },
        
        { id: 9, name: "Chicken Biryani", img: "https://i.pinimg.com/736x/74/ee/dc/74eedc15786611c4a5f18fddb1728580.jpg" },
        { id: 10, name: "Tandoori Chicken", img: "https://previews.123rf.com/images/naiklon/naiklon2304/naiklon230403162/202192463-tandoori-chicken-on-a-white-background.jpg" },
        { id: 11, name: "Chicken Korma", img: "https://static.vecteezy.com/system/resources/previews/011/210/587/large_2x/chicken-korma-in-a-bowl-on-white-background-photo.jpg" },
        { id: 12, name: "Fish Curry", img: "https://img.freepik.com/premium-photo/fish-curry-seer-fish-curry-traditional-indian-fish-curry-kerala-special-dish-arranged-white-bowl-garnished-with-curry-leaves-white-background_527904-1980.jpg" },
    ]);
    

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ fontFamily:"algerian", fontSize:"40px"}}><span style={{color:"rgb(81, 5, 163)"}}>Our</span> Special <span style={{color:"rgb(81, 5, 163)"}}>Menu</span></h2>

            <h3 className=" mt-4 mb-3" style={{ fontFamily:"algerian", fontSize:"40px"}}>Fast Food</h3>
            <div className="row">
                {items.slice(0, 4).map((food) => (
                    <div key={food.id} className="col-md-4 col-lg-3 mb-4">
                        <div className="card text-center shadow-sm">
                            <img src={food.img} className="card-img-top" alt={food.name} style={{ height: "200px", objectFit: "cover" }}/>
                            <div className="card-body">
                                <h5 className="card-title">{food.name}</h5>
                                <button className="btn text-light" style={{background: "linear-gradient(135deg, #6a0572, #ff007f)",}} onClick={()=>setIsModel("true")}>Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

         
            <h3 className="mt-4 mb-3" style={{ fontFamily:"algerian", fontSize:"40px"}}>Veg Specials</h3>
            <div className="row">
                {items.slice(4, 8).map((food) => (
                    <div key={food.id} className="col-md-4 col-lg-3 mb-4">
                        <div className="card text-center shadow-sm">
                            <img src={food.img} className="card-img-top" alt={food.name} style={{ height: "200px", objectFit: "cover" }} />
                            <div className="card-body">
                                <h5 className="card-title">{food.name}</h5>
                                <button className="btn text-light" style={{background: "linear-gradient(135deg, #6a0572, #ff007f)",}} onClick={()=>setIsModel("true")}>Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h3 className=" mt-4 mb-3" style={{ fontFamily:"algerian", fontSize:"40px"}}>Non-Veg Delights</h3>
            <div className="row">
                {items.slice(8).map((food) => (
                    <div key={food.id} className="col-md-4 col-lg-3 mb-4">
                        <div className="card text-center shadow-sm">
                            <img src={food.img} className="card-img-top" alt={food.name}  style={{ height: "200px", objectFit: "cover" }}/>
                            <div className="card-body">
                                <h5 className="card-title">{food.name}</h5>
                                <button className="btn text-light" style={{background: "linear-gradient(135deg, #6a0572, #ff007f)"}} onClick={()=>setIsModel("true")}>Order Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {isModel === "true" && (
    <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.80)" }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center" style={{
                background: "linear-gradient(135deg, #6a0572, #ff007f)",
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)"
            }}>
                <div className="modal-body p-5">
                    <h1 style={{
                        fontFamily: "'Pacifico', cursive",
                        color: "white",
                        fontSize: "2.5rem",
                        textShadow: "2px 2px 5px rgba(0,0,0,0.3)"
                    }}>
                        🍕 COMING SOON 🍔
                    </h1>
                    <p style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "1.2rem",
                        color: "#fff",
                        marginTop: "10px"
                    }}>
                        Get Ready for Delicious Treats! 😋
                    </p>
                </div>
                <div className="modal-footer border-0">
                    <button
                        type="button"
                        className="btn btn-light fw-bold"
                        onClick={() => setIsModel(false)}
                        style={{
                            borderRadius: "30px",
                            padding: "10px 20px",
                            backgroundColor: "white",
                            color:  "#6a0572" ,
                            border: "none"
                        }}
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
)}

        </div>
        
    );
}

export default Item;
