import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaAppStoreIos } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

function Footer({ isModel, setIsModel }) {
  return (
    <>
      {/* Footer Section */}
      <div className="container-fluid" style={{ background: "rgb(81, 5, 163)" }}>
        <div className="container p-5">
          <div className="row">
            {/* Brand Info */}
            <div className="col-md-4 col-sm-12 mb-4">
              <h1 className="text-light">FoodWay</h1>
              <p className="text-light">
                "Welcome to FoodWay! We serve fresh, tasty food with care. Come and enjoy a delicious meal with us!"
              </p>
              <div className="d-flex gap-3">
                <FontAwesomeIcon icon={faInstagram} className="text-white" style={{ fontSize: "20px" }} />
                <FontAwesomeIcon icon={faFacebook} className="text-white" style={{ fontSize: "20px" }} />
                <FontAwesomeIcon icon={faLinkedin} className="text-white" style={{ fontSize: "20px" }} />
                <FontAwesomeIcon icon={faTwitter} className="text-white" style={{ fontSize: "20px" }} />
              </div>
            </div>

            {/* Contact Info */}
            <div className="col-md-4 col-sm-12 mb-4">
              <h5 className="text-light">Contact Us</h5>
              <details className="text-white">
                <summary>Mobile Number</summary>
                <div style={{ marginLeft: "40px" }}>
                  <a href="tel:6260191430" className="text-light">+91 6260191430</a><br />
                  <a href="tel:7610183808" className="text-light">+91 7610183808</a>
                </div>
              </details>
              <details className="text-white">
                <summary>Email</summary>
                <div style={{ marginLeft: "40px" }}>
                  <a href="mailto:gautamsharma8035@gmail.com" className="text-light">gautamsharma8035@gmail.com</a><br />
                  <a href="mailto:anirudhsharmaofficial9@gmail.com" className="text-light">anirudhsharmaofficial9@gmail.com</a>
                </div>
              </details>
              <details className="text-white">
                <summary>Address</summary>
                <div style={{ marginLeft: "40px" }}>
                  <p>Aurbindo Square</p>
                </div>
              </details>
            </div>

            {/* App Download Buttons */}
            <div className="col-md-4 col-sm-12 mb-4">
              <button
                type="button"
                className="btn btn-light btn-lg text-dark w-100 mb-3"
                onClick={() => setIsModel("true")}
              >
                <IoLogoGooglePlaystore size={25} /> Play Store
              </button>
              <button
                type="button"
                className="btn btn-light btn-lg text-dark w-100"
                onClick={() => setIsModel("true")}
              >
                <FaAppStoreIos size={25} /> Apple
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Coming Soon */}
      {isModel === "true" && (
        <div className="modal show d-block" style={{ backgroundColor: "rgba(0,0,0,0.50)" }} tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div
              className="modal-content text-center"
              style={{
                background: "linear-gradient(135deg, #6a0572, #ff007f)",
                borderRadius: "15px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
              }}
            >
              <div className="modal-body p-5">
                <h1
                  style={{
                    fontFamily: "'Pacifico', cursive",
                    color: "white",
                    fontSize: "2.5rem",
                    textShadow: "2px 2px 5px rgba(0,0,0,0.3)",
                  }}
                >
                  🍕 COMING SOON 🍔
                </h1>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1.2rem",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                >
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
                    color: "#6a0572",
                    border: "none",
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;