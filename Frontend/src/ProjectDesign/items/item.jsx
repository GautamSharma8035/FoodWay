import React, { useState } from "react";
import './item.css';

function Item({ isModel, setIsModel }) {
    const [items] = useState([
        { id: 1, name: "Burger", img: "https://img.freepik.com/free-photo/classic-burger-with-beef-cutlet-vegetables-onions-isolated-white-background_123827-29707.jpg" },
        { id: 2, name: "Pizza", img: "https://media.istockphoto.com/id/1192094401/photo/delicious-vegetarian-pizza-on-white.jpg?s=612x612&w=0&k=20&c=Qsm2ikAI0Oz5JMu2COCmAODV_5U7YZtipj8Ic7BtJF8=" },
        { id: 3, name: "Pasta", img: "https://www.shutterstock.com/image-photo/penne-meat-tomato-sauce-vegetables-260nw-468914663.jpg" },
        { id: 4, name: "Sandwich", img: "https://www.southernliving.com/thmb/j3ZCgWAtinktLbdekgFObMVLNuA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ham_Sandwich_011-2-662c61849334498ea1f71cf7c49af2da.jpg" },
        { id: 5, name: "French Fries", img: "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries-500x500.jpg" },
    ]);
    const [veg] = useState([
        { id: 1, name: "Kaju Paneer", img: "https://tastedrecipes.com/wp-content/uploads/2021/11/paneer-butter-masala-3.jpg" },
        { id: 2, name: "Dum Aloo", img: "https://i0.wp.com/myspicetrunk.com/wp-content/uploads/2021/04/20210410_1838302-e1618165098812.jpg?fit=2070%2C2760&ssl=1?v=1618099124" },
        { id: 3, name: "Indian Thali", img: "https://images.squarespace-cdn.com/content/v1/5f2fa039103c7a08856032c1/1653757576778-GOCQPNGCFA6C6LL2QRI6/public.jpeg" },
        { id: 4, name: "Parathe", img: "https://i0.wp.com/lovelaughmirch.com/wp-content/uploads/2020/04/Dal-ke-Parathe-_4.jpg?resize=630%2C420&ssl=1" },
        { id: 5, name: "Daal Batti", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjKejWoted2z4J40ht8CDvNd46F40DV0_9gw&s" },
    ]);
    const [nonveg] = useState([
        { id: 1, name: "Chicken", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTlGogM1zv7WohBWOuxIiRzDXzmKMK9vVcpg&s" },
        { id: 2, name: "Fish Curry", img: "https://www.maggi.in/sites/default/files/styles/home_stage_944_531/public/srh_recipes/c42d9f71d29afc39144b092da446145b.jpeg?h=e527d815&itok=PZoxaoLH" },
        { id: 3, name: "Chicken Biryani", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP6AlsY64CMBtlrPiP137YFtHq-asKTix06Q&s" },
        { id: 4, name: "Omlet", img: " https://t3.ftcdn.net/jpg/07/15/86/22/360_F_715862236_VHJPf0EQsXpxSaoMJKOlkqfDSWlkMTZW.jpg" },
        { id: 5, name: "Tandoori Chicken", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF8Qr5LJKkMhy33hyPFDbsOdcIkc2Lzd8d7g&s" },
    ]);

    return (
        <div className="container-fluid mt-5 p-5">
            <h2 className="text-center mb-4" style={{ fontFamily: "algerian", fontSize: "40px" }}>
                <span style={{ color: "rgb(81, 5, 163)" }}>Our</span> Special <span style={{ color: "rgb(81, 5, 163)" }}>Menu</span>
            </h2>
            <div
                className="p-5"
                style={{
                    overflow: 'hidden',
                    boxShadow: 'inset 0px 0px 50px rgba(0, 0, 0, 0.02)', 
                }}
            >
                <div className="row justify-content-center mb-5">
                    <div className="card-container">
                       
                        {items.map((food) => (
                            <div key={food.id} className="card-item">
                                <div
                                    className="p-2"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        marginRight: '15px',
                                        width: '100%',
                                        maxWidth: '450px', 

                                        backgroundColor: "rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <img
                                        src={food.img}
                                        className="card-img-left"
                                        alt={food.name}
                                        style={{
                                            width: '70px', 
                                            height: '70px', 
                                            objectFit: 'cover',
                                            borderRadius: '15px',
                                        }}
                                    />
                                    <div
                                        className="card-body d-flex flex-column justify-content-center"
                                        style={{
                                            flex: 1,
                                            paddingLeft: '25px',
                                            paddingRight: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <h5
                                            className="card-title"
                                            style={{
                                                fontSize: '25px', 
                                                fontWeight: 'bold',
                                                margin: 0, 
                                                wordBreak: 'break-word', 
                                            }}
                                        >
                                            {food.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-center mb-5">
                    <div className="card-container-veg">
                       
                        {veg.map((food) => (
                            <div key={food.id} className="card-item">
                                <div
                                    className="p-2"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        marginRight: '15px',
                                        width: '100%', 
                                        maxWidth: '450px', 

                                        backgroundColor: "rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <img
                                        src={food.img}
                                        className="card-img-left"
                                        alt={food.name}
                                        style={{
                                            width: '70px', 
                                            height: '70px', 
                                            objectFit: 'cover',
                                            borderRadius: '15px',
                                        }}
                                    />
                                    <div
                                        className="card-body d-flex flex-column justify-content-center"
                                        style={{
                                            flex: 1,
                                            paddingLeft: '25px',
                                            paddingRight: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <h5
                                            className="card-title"
                                            style={{
                                                fontSize: '25px', 
                                                fontWeight: 'bold',
                                                margin: 0, 
                                                wordBreak: 'break-word', 
                                            }}
                                        >
                                            {food.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="card-container-nonveg">
                     
                        {nonveg.map((food) => (
                            <div key={food.id} className="card-item">
                                <div
                                    className="p-2"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        marginRight: '15px',
                                        width: '100%', 
                                        maxWidth: '450px', 
                                        backgroundColor: "rgba(0,0,0,0.1)"
                                    }}
                                >
                                    <img
                                        src={food.img}
                                        className="card-img-left"
                                        alt={food.name}
                                        style={{
                                            width: '70px', 
                                            height: '70px', 
                                            objectFit: 'cover',
                                            borderRadius: '15px',
                                        }}
                                    />
                                    <div
                                        className="card-body d-flex flex-column justify-content-center"
                                        style={{
                                            flex: 1,
                                            paddingLeft: '25px',
                                            paddingRight: '10px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            textAlign: 'left',
                                        }}
                                    >
                                        <h5
                                            className="card-title"
                                            style={{
                                                fontSize: '25px',
                                                fontWeight: 'bold',
                                                margin: 0, 
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            {food.name}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
