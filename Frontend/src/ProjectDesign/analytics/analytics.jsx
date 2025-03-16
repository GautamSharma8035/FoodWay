import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./analytic.css"; // Custom CSS for styling
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Sidenav from "../Sidenavbar/sidenav";
import Dashboardnav from "../Dashboardnav/dashboardnav";
import DashboardFooter from '../Footer/Dashboardfooter';
import { motion } from "framer-motion";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [selectButton, setSelectButton] = useState("monthly");
  const [showAll, setShowAll] = useState(false);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Orders",
        data: [200, 450, 300, 500, 700, 600, 512, 800, 650, 400, 300, 257],
        borderColor: "#4A90E2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
      },
    ],
  };

  const mostOrderedItems = [
    { name: "Pizza", image: "https://img.freepik.com/free-psd/deliciously-appealing-margherita-pizza-transparent-background_84443-26494.jpg", orders: 120 },
    { name: "Burger", image: "https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg", orders: 95 },
    { name: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2paowiODEqEOJ082fLEWgrlBjvBlGd2GrQ&s", orders: 80 },
    { name: "Sushi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfV7iV6CZBb5VR_92P5pFHdcbtsNv8ABAKg&s", orders: 70 },
    { name: "Manchurian Rice", image: "https://i.ytimg.com/vi/KSmI5jkBQFw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBVtVwABG9fQh25iJ0KHIIxxgAvpQ", orders: 65 },
    { name: "Tacos", image: "https://img.freepik.com/free-psd/delicious-beef-taco-transparent-background_84443-25440.jpg", orders: 60 }
  ];


  const fastFoodItems = [
    { name: "Pizza", image: "https://img.freepik.com/free-psd/deliciously-appealing-margherita-pizza-transparent-background_84443-26494.jpg", category: "Italian" },
    { name: "Burger", image: "https://www.thespruceeats.com/thmb/UpVWAcHnFEe_KvQpYsR1a7U-WY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-your-best-grilled-burger-recipe-7511041-hero-C-c5080fa5f97c4c2b908968527f8a851b.jpg", category: "American" },
    { name: "Pasta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2paowiODEqEOJ082fLEWgrlBjvBlGd2GrQ&s", category: "Italian" },
    { name: "Sushi", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbfV7iV6CZBb5VR_92P5pFHdcbtsNv8ABAKg&s", category: "Japanese" },
    { name: "Tacos", image: "https://img.freepik.com/free-psd/delicious-beef-taco-transparent-background_84443-25440.jpg", category: "Mexican" },
    { name: "Manchurian", image: "https://i.ytimg.com/vi/KSmI5jkBQFw/hq720.jpg", category: "Indo-Chinese" },
    { name: "Noodles", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVPvcZIxeA9bZukK18CymY32OqFUTVbkKXgQ&s", category: "Asian" },
    { name: "Momos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Ov0avG_NB5JaZFODBWmCC2noq-uoZGJ0Mw&s", category: "Asian" },
    { name: "Veg Biryani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3EvnBGFTYZrXBUU4sahNk6YQVLZ3jrlR-4g&s", category: "Indian" },
    { name: "Paneer Tikka", image: "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka-500x500.jpg", category: "Indian" },
    { name: "Falafel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9Ua9PRuTbR3t-pSWkYQg_qCYKmrBxKW80g&s", category: "Middle Eastern" },
    { name: "Spring Roll", image: "https://d1mxd7n691o8sz.cloudfront.net/static/recipe/recipe/2023-12/Vegetable-Spring-Rolls-2-1-906001560ca545c8bc72baf473f230b4.jpg", category: "Chinese" },
    { name: "Dosa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx-glTW9VpM8O7nW1los6X5F9VkIOaj07rgw&s", category: "Indian" },
    { name: "French Fries", image: "https://www.awesomecuisine.com/wp-content/uploads/2009/05/french-fries-500x500.jpg", category: "American" },
    { name: "Nachos", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1clgt-cQsDBY5PjS3f-KG9pjZ4WqjKylNjA&s", category: "Mexican" },
    { name: "Pav Bhaji", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi4FeveUgU8z8YTEzlDFUU8b58zKGm6R7ziw&s", category: "Indian" },
    { name: "Rolls", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5oA14zTYdRmT-_09TC_m_OthrdKTg4c824g&s", category: "Indian" },
    { name: "Vada Pav", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq8olNiAnVPlLYkliS1LTTJS3_oQHya9G__Q&s", category: "Indian" },
    { name: "Kachori", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt__diO-n9zGrBEsAiBT3EHVwnk-5FgMP74Q&s", category: "Indian" },
    { name: "Samosa", image: "https://vegecravings.com/wp-content/uploads/2017/03/Aloo-Samosa-Recipe-Step-By-Step-Instructions.jpg", category: "Indian" },
    { name: "Chole Bhature", image: "https://img-global.cpcdn.com/recipes/87c52cb9ca601252/1200x630cq70/photo.jpg", category: "Indian" },
    { name: "Dal Makhani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAM_sU4h_Iz_foXrcRwo2H0NBHIgFdCv_KbA&s", category: "Indian" },
    { name: "Rajma Chawal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxtOak-yHmeQjsjTFqNF4r_nxwJhdZKFD-Gw&s", category: "Indian" },
    { name: "Masala Dosa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1gPSMIK3sUiRUDNve5tgZh2FrCEAgpxb-tw&s", category: "Indian" },
    { name: "Aloo Paratha", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1Uf02Xis11bGLuyTCY8W23Xr3mWyuyqLCg&s", category: "Indian" },
    { name: "Dal Batti", image: "https://img-global.cpcdn.com/recipes/a3d2b889c2c61678/1200x630cq70/photo.jpg", category: "Indian" },
    { name: "Dhokla", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQ_ywTsl1l_oEJHiP17VGZoipj8UrGbVs-g&s", category: "Indian" },
    { name: "Bhindi Masala", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1Vbxdb-DERNxVCyZ3AT200Rg2i9vMqK09Q&s", category: "Indian" },
    { name: "Hyderabadi Biryani", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZf3aza--5kTivR64uUr8_cBQ6XvnBr_lqbw&s", category: "Indian" },
    { name: "Malai Kofta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAEAfJ3_uUudkAoehDaQpvPNZf5BFf3Irdgw&s", category: "Indian" },
    { name: "Baingan Bharta", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJJFRtCXz6xDAhTkN-zXqkyntaXptMvA6AQ&s", category: "Indian" },
    { name: "Chowpatty Bhel", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkVG4AZlPUdNlfsZAQbyFoVsHifXKVp1W7vg&s", category: "Indian" },
    { name: "Idli Sambar", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3aJyP7SxhdvtHtorSod6skM3K2BTE3N_Ouw&s", category: "Indian" },
    { name: "Pesarattu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrn3XrcCWnnORuMJSF7n-vqhjvmpyeeuR0jQ&s", category: "Indian" },
    { name: "Kadhi Chawal", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrmuKqxKkLWcpaE_X173J6X9dxAPFw-Rsyw&s", category: "Indian" },
    { name: "Thepla", image: "https://upload.wikimedia.org/wikipedia/commons/7/74/Thepla_main.jpg", category: "Indian" },
    { name: "Misal Pav", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMITh2TaaLCofC5wAbpMXwkvM5VZ1B5hHtSw&s", category: "Indian" },
    { name: "Undhiyu", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4fK103aLdblEnMxOXDnkikrGi1TOKFtDl_g&s", category: "Indian" },
    { name: "Sarson da Saag", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy7iQovAkteMpqslA6FM_7Th_QsJuUivzsmA&s", category: "Indian" },
    { name: "Litti Chokha", image: "https://static.toiimg.com/thumb/53188495.cms?width=1200&height=900", category: "Indian" },
  ];



  return (
    <>
      <div className="dashboard-wrapper">
        <Sidenav isOpen={isSidenavOpen} setIsOpen={setIsSidenavOpen} />
        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
          <Dashboardnav />
        </div>

        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''} mt-4 d-flex`}>
          {/* Order Analytics Card */}
          <div className="analytics-card mt-2 w-50 me-3">
            <h5 className="analytics-title">Order Analytics</h5>
            <div className="d-flex justify-content-between w-100">
              <div className="d-flex w-50 gap-3">
                <div>
                  <strong>0</strong><br />
                  <p>Total Sales</p>
                </div>
                <div>
                  <strong>0</strong><br />
                  <p>Avg Sales per day</p>
                </div>
              </div>
              <div className="bg-light rounded-pill text-center d-flex justify-content-center">
                <button
                  className={`btn rounded-pill  ${selectButton === "monthly" ? "btn-selected" : "btn-unselected"}`}
                  onClick={() => setSelectButton("monthly")}
                >
                  Monthly
                </button>
                <button
                  className={`btn rounded-pill  ${selectButton === "weekly" ? "btn-selected" : "btn-unselected"}`}
                  onClick={() => setSelectButton("weekly")}
                >
                  Weekly
                </button>
                <button
                  className={`btn rounded-pill  ${selectButton === "today" ? "btn-selected" : "btn-unselected"}`}
                  onClick={() => setSelectButton("today")}
                >
                  Today
                </button>
              </div>
            </div>
            <Line data={chartData} />
          </div>
          <div className="analytics-card mt-2 w-50">
            <h5 className="analytics-title">Most Ordered Items</h5>
            <ul className="list-group">
              {mostOrderedItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="list-group-item d-flex align-items-center p-3"
                  style={{ borderRadius: "10px", cursor: "pointer" }}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <span className="badge me-3" style={{ fontSize: "1rem", padding: "10px 15px", borderRadius: "50%", backgroundColor: "rgb(81, 5, 163)" }}>{index + 1}</span>
                  <img src={item.image} alt={item.name} className="item-image me-3" style={{ width: "60px", height: "60px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" }} />
                  <div>
                    <strong style={{ fontSize: "1.1rem" }}>{item.name}</strong><br />
                    <span className="text-muted">Ordered {item.orders} times</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        {/* Replace the fastFoodItems section with this: */}
        <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
          <div className="d-flex gap-4">
            {/* First Card */}
            <div className="analytics-card w-50 mt-3 mb-3">
              <h5 className="analytics-title">Most Favorite Dishes</h5>
              <div className="food-grid-container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                  {/* First 8 cards - always clear */}
                  {fastFoodItems.slice(0, 8).map((item, index) => (
                    <motion.div
                      key={index}
                      className="col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className="food-card">
                        <div className="food-card-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="food-card-content">
                          <h6>{item.name}</h6>
                          <span className="category-badge">{item.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Next 4 cards - blurred until show more is clicked */}
                  {fastFoodItems.slice(8, 12).map((item, index) => (
                    <motion.div
                      key={index + 8}
                      className="col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index + 8) * 0.1 }}
                    >
                      <div className={`food-card ${!showAll ? 'blurred' : ''}`}>
                        <div className="food-card-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="food-card-content">
                          <h6>{item.name}</h6>
                          <span className="category-badge">{item.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Show remaining cards in first section when showAll is true */}
                  {showAll && fastFoodItems.slice(12, 20).map((item, index) => (
                    <motion.div
                      key={index + 12}
                      className="col"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (index + 12) * 0.1 }}
                    >
                      <div className="food-card">
                        <div className="food-card-image">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="food-card-content">
                          <h6>{item.name}</h6>
                          <span className="category-badge">{item.category}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {!showAll && (
                  <div
                    className="show-more-overlay"
                    onClick={() => setShowAll(true)}
                  >
                    <span>Show More Items</span>
                  </div>
                )}
              </div>
            </div>

            {/* Second Card - Only shows when showAll is true */}
            {showAll && (
              <div className="analytics-card w-50 mt-3 mb-3">
                <h5 className="analytics-title">Most Favorite Dishes</h5>
                <div className="food-grid-container">
                  <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                    {fastFoodItems.slice(20).map((item, index) => (
                      <motion.div
                        key={index + 20}
                        className="col"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="food-card">
                          <div className="food-card-image">
                            <img src={item.image} alt={item.name} />
                          </div>
                          <div className="food-card-content">
                            <h6>{item.name}</h6>
                            <span className="category-badge">{item.category}</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className={`main-content ${isSidenavOpen ? 'content-shifted' : ''}`}>
        <DashboardFooter />
      </div>
    </>
  );
};

export default Analytics;