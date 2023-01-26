import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../../assests/icons_assets/Logo .svg"
import "./preconfirmation.css";
import timeSlot from "./timeSlot.json";

export default function PreConfirm () {

    const navigate = useNavigate();
    const {bookingDate,slot,selectedTable} = useParams();
    console.log(slot);
    
    const date = new Date()
    var weekOption = { weekday: 'short'};
    var week = date.toLocaleDateString('en-US', weekOption);
    var monthOption =  {year: 'numeric', month: 'long' };
    var month = date.toLocaleDateString('en-US', monthOption);
    
    var dateOption =  { day: 'numeric'};
    var dateNumber = date.toLocaleDateString('en-US', dateOption);
    
    
    console.log(week+", "+ dateNumber, month);

    const confirm = () =>{
        navigate(`/otp/${week+", "+ dateNumber+" "+month}/${timeSlot[Number(slot)]}/${selectedTable}`)
    }
    return(<div className="container-body">
        <div className="card">
            <img src={logo} width="200px" height="100px"/>
            <h3 className="mb-4 fw-bold">Almost there!</h3>
            <h5 className="fw-bold">Table No: {selectedTable}</h5>
            <h5 className="fw-bold mb-3">{week+", "+ dateNumber+" "+month} | {timeSlot[Number(slot)]}</h5>
            <p style={{fontSize:"16px", fontWeight:"bold"}}>Little Lemon Restaurant, Chicago</p>
            <div className="decision-area">
            <button className="submit" onClick={()=>{confirm()}}>Confirm</button> 
            <button className="submit" style={{backgroundColor:"#fff", border:"1px solid #F4CE14"}} onClick={()=>{navigate("/booking")}}>Cancel</button> 
            </div>
           
        </div>
    </div>)
}