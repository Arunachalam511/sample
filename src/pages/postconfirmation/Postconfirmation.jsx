import React from "react";
import "./postconfirmation.css";
import logo from "../../assests/icons_assets/Logo .svg"
import {FiCopy} from "react-icons/fi"
import { useParams,useNavigate } from "react-router-dom";
export default function Postconfirmation () {
    const navigate = useNavigate();
    const {bookingDate,slot,selectedTable} = useParams();
    console.log(slot);
    const bookingid = Math.floor(10000000 + Math.random() * 90000000);


    return (
        <div className="container-body">
    
        <div className="card">
            <img src={logo} width="200px" height="100px"/>
            <h3 className="mb-4 fw-bold">Booking Done</h3>
            <h5 className="fw-bold">Table No: {selectedTable}</h5>
            <h5 className="fw-bold mb-3">{bookingDate} | {slot}</h5>
            <p style={{fontSize:"16px", fontWeight:"bold"}}>Little Lemon Restaurant, Chicago</p>
            <div style={{fontSize:"1.125rem", display:"flex", alignItems:"center"}}><span style={{color:"#9f9f9f"}}>Booking ID : </span>{bookingid} <FiCopy style={{marginLeft:"1rem", color:"#9f9f9f"}} onClick={() =>  navigator.clipboard.writeText(bookingid)} /></div>
            <div className="decision-area">
           
            <button className="back-to-home" style={{backgroundColor:"#fff", border:"1px solid #F4CE14"}} onClick={()=>{navigate("/")}}>Back to Home</button> 
            </div>

            <div style={{marginTop:"1rem"}}>Please show the above Booking ID or Secret Code at the restaurant</div>
           
        </div>

        <div style={{backgroundColor:"#fff", marginTop:"30px"}}>
            <div><span style={{color:"#0D99FF"}}>Helpline:</span> 0000 -0000-0000. Contact us 24 x 7.</div>
            <div><span style={{color:"#CC0303"}}>Cancellation Policy :</span> Please contact the helpline if you want to cancel the booking before 1 hour of the booking time. </div>
        </div>
    </div>)
}