import React, { useState } from "react";
import { FaUser,FaCity,FaGlobe,FaHashtag, FaMapMarkerAlt, FaCalendar, FaImage, FaPhone, FaBuilding, FaIdCard, FaVenusMars, FaUtensils, FaReceipt, FaFileAlt } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

const fileTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

export function Personal({SetActiveState   , handleNext}) {
    
    const [formData, setFormData] = useState({
        fullName: "",
        address: "",
        dob: "",
        gender: "",
        image: null
    });

    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required!";
        if (!formData.address.trim()) newErrors.address = "Address is required!";
        if (!formData.dob) newErrors.dob = "Date of Birth is required!";
        if (!formData.gender) newErrors.gender = "Please select gender!";
        if (!formData.image) newErrors.image = "Please upload an image!";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && !fileTypes.includes(file.type)) {
            setErrors({ ...errors, image: "Invalid file type! Only JPG, JPEG, PNG, PDF allowed." });
        } else {
            setFormData({ ...formData, image: file });
            setErrors({ ...errors, image: "" });
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            SetActiveState("Restaurent")
            handleNext();
        }
    };

   

    return (
        <div className="d-flex justify-content-center align-items-center w-75">
            <div className="signup-card p-4 w-100">
                <h5 className="text-start mb-3">Personal Details</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label"><FaUser /> Full Name</label>
                        <input type="text" name="fullName" className="form-control handle-placeholder"
                            placeholder="Enter Your Full Name" onChange={handleChange} />
                        {errors.fullName && <small className="text-danger">{errors.fullName}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><FaMapMarkerAlt /> Address</label>
                        <input type="text" name="address" className="form-control handle-placeholder"
                            placeholder="Enter your Address" onChange={handleChange} />
                        {errors.address && <small className="text-danger">{errors.address}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><FaCalendar /> Date of Birth</label>
                        <input type="date" name="dob" className="form-control handle-placeholder" onChange={handleChange} />
                        {errors.dob && <small className="text-danger">{errors.dob}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><FaVenusMars /> Gender </label>
                        <select name="gender" className="form-select" onChange={handleChange}>
                            <option value="">Select Gender...</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        {errors.gender && <small className="text-danger">{errors.gender}</small>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label"><FaImage /> Upload Image</label>
                        <input type="file" className="form-control handle-placeholder" onChange={handleFileChange} />
                        {errors.image && <small className="text-danger">{errors.image}</small>}
                    </div>
                    <div className="d-flex justify-content-end">
                        <button type="submit" className="btn text-light" style={{ backgroundColor: "rgb(81, 5, 163)" }}>Next <MdNavigateNext size={25}/></button>
                    </div>
                </form>
            </div>
        </div>
    );
}



export function Restaurent({SetActiveState  , handleNext}) {
    const [restaurantFormData, setRestaurantFormData] = useState({
        restaurantName: "",
        contactNumber: "",
        restaurantType: "",
        address: "",
        state: "",
        city: "",
        pincode: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRestaurantFormData({ ...restaurantFormData, [name]: value });
        setErrors({ ...errors, [name]: "" });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!restaurantFormData.restaurantName.trim()) {
            newErrors.restaurantName = "Restaurant name is required!";
        }
        if (!restaurantFormData.contactNumber.match(/^[0-9]{10}$/)) {
            newErrors.contactNumber = "Enter a valid 10-digit contact number!";
        }
        if (!restaurantFormData.restaurantType) {
            newErrors.restaurantType = "Please select a restaurant type!";
        }
        if (!restaurantFormData.address.trim()) {
            newErrors.address = "Address is required!";
        }
        if (!restaurantFormData.state.trim()) {
            newErrors.state = "State is required!";
        }
        if (!restaurantFormData.city.trim()) {
            newErrors.city = "City is required!";
        }
        if (!restaurantFormData.pincode.match(/^[0-9]{6}$/)) {
            newErrors.pincode = "Enter a valid 6-digit pincode!";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            SetActiveState("Documentation")
            handleNext();
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center w-75">
            <div className="signup-card p-4 w-100">
                <h5 className="text-start mb-3">Restaurant Details</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label"><FaBuilding /> Restaurant Name</label>
                        <input
                            type="text"
                            className="form-control handle-placeholder"
                            placeholder="Enter Restaurant Name"
                            name="restaurantName"
                            value={restaurantFormData.restaurantName}
                            onChange={handleChange}
                        />
                        {errors.restaurantName && <small className="text-danger">{errors.restaurantName}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaPhone /> Restaurant Contact Number</label>
                        <input
                            type="tel"
                            className="form-control handle-placeholder"
                            placeholder="98936 *****"
                            name="contactNumber"
                            value={restaurantFormData.contactNumber}
                            onChange={handleChange}
                        />
                        {errors.contactNumber && <small className="text-danger">{errors.contactNumber}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaUtensils /> Restaurant Type</label>
                        <select
                            className="form-select"
                            name="restaurantType"
                            value={restaurantFormData.restaurantType}
                            onChange={handleChange}
                        >
                            <option value="">Select Restaurant Type...</option>
                            <option>Fast Food</option>
                            <option>Veg</option>
                            <option>Non-Veg</option>
                        </select>
                        {errors.restaurantType && <small className="text-danger">{errors.restaurantType}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaMapMarkerAlt /> Restaurant Address</label>
                        <input
                            type="text"
                           className="form-control handle-placeholder"
                            placeholder="Restaurant Address"
                            name="address"
                            value={restaurantFormData.address}
                            onChange={handleChange}
                        />
                        {errors.address && <small className="text-danger">{errors.address}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaGlobe /> State</label>
                        <input
                            type="text"
                            className="form-control handle-placeholder"
                            placeholder="Madhya Pradesh...etc"
                            name="state"
                            value={restaurantFormData.state}
                            onChange={handleChange}
                        />
                        {errors.state && <small className="text-danger">{errors.state}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaCity /> City</label>
                        <input
                            type="text"
                            className="form-control handle-placeholder"
                            placeholder="Indore,Ujjain.....etc"
                            name="city"
                            value={restaurantFormData.city}
                            onChange={handleChange}
                        />
                        {errors.city && <small className="text-danger">{errors.city}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaHashtag /> Pincode</label>
                        <input
                            type="text"
                           className="form-control handle-placeholder"
                            placeholder="452005,452...etc"
                            name="pincode"
                            value={restaurantFormData.pincode}
                            onChange={handleChange}
                        />
                        {errors.pincode && <small className="text-danger">{errors.pincode}</small>}
                    </div>

                    <div className="d-flex justify-content-between">
                    <button type="button" className="btn text-light" style={{ backgroundColor: "rgb(81, 5, 163)" }} onClick={()=>SetActiveState("personal")}><GrFormPrevious size={25}/> Previous</button>
                        <button type="submit" className="btn text-light"  style={{ backgroundColor: "rgb(81, 5, 163)" }}>Next <MdNavigateNext size={25}/></button>
                        
                    </div>
                </form>
            </div>
        </div>
    );
}


export function Documentation({SetActiveState , handleNext}) {
    const [documentFormData, setDocumentFormData] = useState({
        aadharCard: null,
        panCard: null,
        gstNumber: "",
        foodLicence: null
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, type, files, value } = e.target;
        setDocumentFormData({
            ...documentFormData,
            [name]: type === "file" ? files[0] : value
        });
        setErrors({ ...errors, [name]: "" }); 
    };

    const validateGST = (gst) => {
        const gstRegex = /^[0-9]{2}[A-Z0-9]{13}$/;
        return gstRegex.test(gst);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};

        if (!documentFormData.aadharCard) {
            newErrors.aadharCard = "Aadhar Card is required!";
        }
        if (!documentFormData.panCard) {
            newErrors.panCard = "PAN Card is required!";
        }
        if (!documentFormData.foodLicence) {
            newErrors.foodLicence = "Food Licence is required!";
        }
        if (!documentFormData.gstNumber.trim()) {
            newErrors.gstNumber = "GST Number is required!";
        } else if (!validateGST(documentFormData.gstNumber)) {
            newErrors.gstNumber = "Enter a valid GST Number!";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center w-75">
            <div className="signup-card p-4 w-100">
                <h5 className="text-start mb-3">Documents</h5>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label"><FaIdCard /> Aadhar Card</label>
                        <input
                            type="file"
                            className="form-control"
                            name="aadharCard"
                            onChange={handleChange}
                        />
                        {errors.aadharCard && <small className="text-danger">{errors.aadharCard}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaIdCard /> Pan Card</label>
                        <input
                            type="file"
                            className="form-control"
                            name="panCard"
                            onChange={handleChange}
                        />
                        {errors.panCard && <small className="text-danger">{errors.panCard}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaReceipt /> GST Number</label>
                        <input
                            type="text"
                            className="form-control handle-placeholder"
                            placeholder="Enter GST Number"
                            name="gstNumber"
                            value={documentFormData.gstNumber}
                            onChange={handleChange}
                        />
                        {errors.gstNumber && <small className="text-danger">{errors.gstNumber}</small>}
                    </div>

                    <div className="mb-3">
                        <label className="form-label"><FaFileAlt /> Food Licence</label>
                        <input
                            type="file"
                            className="form-control"
                            name="foodLicence"
                            onChange={handleChange}
                        />
                        {errors.foodLicence && <small className="text-danger">{errors.foodLicence}</small>}
                    </div>

                    <div className="d-flex justify-content-between">
                    <button type="text" className="btn text-light" style={{ backgroundColor: "rgb(81, 5, 163)" }} onClick={()=>SetActiveState("Restaurent")}><GrFormPrevious size={25}/> Previous</button>
                        <button type="submit" className="btn text-light" style={{ backgroundColor: "rgb(81, 5, 163)" }} onClick={handleNext}>Register <MdNavigateNext size={25}/></button>
                       
                    </div>
                </form>
            </div>
        </div>
    );
}
