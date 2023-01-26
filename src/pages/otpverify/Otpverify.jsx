import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../assests/icons_assets/Logo .svg";
import successlogo from "../../assests/icons_assets/successTick.svg";
import "./otpverify.css";

export default function Otpverify() {
  const { bookingDate, slot, selectedTable } = useParams();
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();
  const confirm = () => {
    setTimeout(() => {
      console.log("Hello, World!");
      
       navigate(`/postconfirm/${bookingDate}/${slot}/${selectedTable}`)
      
    }, 3000);

    // navigate(`/otp/${bookingDate}/${slot}/${selectedTable}`)
  };

  return (
    <div className="container-body">
      {verified ? (
        <div className="verified">
          <img className="success-logo" src={successlogo} />
          <div style={{fontSize:"1.5rem", fontWeight:"600", marginTop:"20px"}}>Reservation Confirmed !</div>
          {}
        </div>
      ) : (
        <div className="card">
          <img src={logo} width="400px" height="200px" />
          <div style={{ marginBottom: "1.5rem", fontWeight: "bolder" }}>
            Please Enter the OTP which comes through SMS for confirm your table
            booking
          </div>
          <div className="otp-area">
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
            <input className="otp-field" type="text" maxLength={1} />
          </div>
          <button
            className="submit"
            onClick={() => {
              confirm();
              setVerified(true);
            }}
          >
            Verify
          </button>
        </div>
      )}
    </div>
  );
}
