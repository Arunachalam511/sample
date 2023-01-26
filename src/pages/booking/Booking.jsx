import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header";
import "./booking.css";
import Slot from "./timeSlot.json";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaSquare } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import RectangleTable from "../../assests/icons_assets/rectangle-svgrepo-com.svg";
import { useEffect } from "react";

export default function Booking() {

  const navigate = useNavigate();
  const [bookingDate, setBookingDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [noofguest, setNoOfGuest] = useState(2);
  const [slot, setSlot] = useState(1);
  const [selectedTable, setSelectedTable] = useState([]);
  const [data, setData] = useState({});
  console.log(data);
  const handleGuests = (value) => {
    console.log(value);
    setNoOfGuest(value);
  };
 
  const handleSlot = (index) =>{
    setSelectedTable([]);
    setSlot(index);
  }

  useEffect(() => {
    fetch(`https://mockend.com/arunachalam511/sample/posts/${slot}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, [slot]);

  const handleTableSelect = (e) => {
  //  e.preventDefault();
    console.log(e.currentTarget.id);
    if (selectedTable.includes(e.currentTarget.id)) {
      const index = selectedTable.indexOf(e.currentTarget.id);
      if (index > -1) {
        selectedTable.splice(index, 1);
        setSelectedTable([...selectedTable]);
      }
    } else {
      let temp = [...selectedTable, e.currentTarget.id]
      setSelectedTable(temp);
    }
  };

  const submitHandler = () =>{
    if(bookingDate!="" && selectedTable!="" && slot!=""){
      selectedTable.sort();
      navigate(`/preconfirm/${bookingDate}/${slot-1}/${selectedTable}`);
    }
  }

  console.log(selectedTable);
  return (
    <div>
      <Header />
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingRight: "30%",
          paddingLeft: "30%",
          height: "8vh",
        }}
        className="bg-dark"
      >
        <div>
          <input
            type="date"
            id="bookingDate"
            className="bookDate form-control"
            value={bookingDate}
            onChange={(e) => {
              setBookingDate(e.target.value);
            }}
          />
        </div>
        
        <button type="button" class="btn btn-success fw-bold" onClick={(e)=>{submitHandler()}}>Reserve</button>
        
      </section>
      <section className="d-flex justify-content-center align-items-center time-slot mt-2">
        <div className="radio-group">
          {Slot.map((sl, index) => (
            <label
              className="slot-radio"
              onClick={() => {
                handleSlot(index+1);
              }}
            >
              <input
                type="radio"
                value="#FEF3E2"
                name="color"
                checked={slot === index + 1}
              />
              <span data-name={sl}>
                <div style={{ marginTop: "20px" }}>{sl}</div>
              </span>
            </label>
          ))}
        </div>
       
      </section>
        
    
        <div className="d-flex justify-content-center mt-4">
          <span className="me-2"><FaSquare style={{color:"green", border:"1px solid black"}}/> Available</span>
          <span className="me-2"><FaSquare style={{color:"yellow", border:"1px solid black"}}/> Selected</span>
          <span className="me-2"><FaSquare style={{color:"red", border:"1px solid black"}}/> Reserved</span>
        </div>
      
      
      <section className="hotel-space">
   
        <section className="res-table-area">
          {/* 1st table */}
          <section
            className="res-table-space"
            id="1"
            onClick={(e) => { if(data.table1==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table1 == true
                  ? "red"
                  : selectedTable.includes("1")==true
                  ? "yellow"
                  : "green",
            }}
          >
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
                <FaCircle className="res-chair" />
              </div>
              <FaSquare className="res-table" />
              <div className="d-flex justify-content-between">
                <FaCircle className="res-chair" />
                <FaCircle className="res-chair" />
              </div>
            </div>
          </section>
          {/* 2st table */}
          <section
            className="res-table-space"
            id="2"
            onClick={(e) => { if(data.table2==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table2 == true
                  ? "red"
                  : selectedTable.includes("2")==true
                  ? "yellow"
                  : "green",
            }}
          >
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
                <FaCircle className="res-table" />
                <FaCircle className="res-chair" />
              </div>

              <div className="d-flex justify-content-between">
                <FaCircle className="res-chair" />
              </div>
            </div>
          </section>
          {/* 3rd table */}
          <section
            className="res-table-space"
            id="3"
            onClick={(e) => { if(data.table3==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table3 == true
                  ? "red"
                  : selectedTable.includes("3")==true
                  ? "yellow"
                  : "green",
            }}
          >
            <div className="d-flex flex-column">
              <FaCircle className="res-chair-large" />
              <FaCircle className="res-chair-large my-2" />
              <FaCircle className="res-chair-large" />
            </div>
            <img src={RectangleTable} className="res-table-large" />
            <div className="d-flex flex-column">
              <FaCircle className="res-chair-large" />
              <FaCircle className="res-chair-large my-2" />
              <FaCircle className="res-chair-large" />
            </div>
          </section>
          {/* 4th table */}
          <section
            className="res-table-space"
            id="4"
            onClick={(e) => { if(data.table4==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table4 == true
                  ? "red"
                  : selectedTable.includes("4")==true
                  ? "yellow"
                  : "green",
            }}
          >
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
                <FaCircle className="res-table" />
                <FaCircle className="res-chair" />
              </div>
              <div className="d-flex justify-content-between">
                <FaCircle className="res-chair" />
              </div>
            </div>
          </section>
          {/* 5rd table */}
          <section
            className="res-table-space"
            id="5"
            onClick={(e) => { if(data.table5==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table5 == true
                  ? "red"
                  : selectedTable.includes("5")==true
                  ? "yellow"
                  : "green",
            }}
          >
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
                <FaCircle className="res-chair" />
              </div>
              <FaSquare className="res-table" />
              <div className="d-flex justify-content-between">
                <FaCircle className="res-chair" />
                <FaCircle className="res-chair" />
              </div>
            </div>
          </section>
          {/* 6th table */}
          <section className="res-table-space"
           id="6"
            onClick={(e) => { if(data.table6==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table6 == true
                  ? "red"
                  : selectedTable.includes("6")==true
                  ? "yellow"
                  : "green",
            }}>
          
            <div className="d-flex flex-column">
              <FaCircle className="res-chair-large" />
              <FaCircle className="res-chair-large my-2" />
              <FaCircle className="res-chair-large" />
            </div>
            <img src={RectangleTable} className="res-table-large" />
            <div className="d-flex flex-column">
              <FaCircle className="res-chair-large" />
              <FaCircle className="res-chair-large my-2" />
              <FaCircle className="res-chair-large" />
            </div>
          </section>
          {/* 7th table */}
          <section className="res-table-space"
           id="7"
            onClick={(e) => { if(data.table7==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table7 == true
                  ? "red"
                  : selectedTable.includes("7")==true
                  ? "yellow"
                  : "green",
            }}>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
                <FaCircle className="res-chair" />
              </div>
              <FaSquare className="res-table" />
              <div className="d-flex justify-content-between">
                <FaCircle className="res-chair" />
                <FaCircle className="res-chair" />
              </div>
            </div>
          </section>
          {/* 8th table */}
          <section className="res-table-space"
            id="8"
            onClick={(e) => { if(data.table8==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table8 == true
                  ? "red"
                  : selectedTable.includes("8")==true
                  ? "yellow"
                  : "green",
            }}>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <FaCircle className="res-chair" />
                <FaCircle className="res-table" />
                <FaCircle className="res-chair" />
              </div>
              <div className="d-flex justify-content-between">
                <FaCircle className="res-chair" />
              </div>
            </div>
          </section>
          {/* 9th table */}
          <section
            className="res-table-space"
            id="9"
            onClick={(e) => { if(data.table9==false){
              handleTableSelect(e);
            }   
            }}
            style={{
              color:
                data.table9 == true
                  ? "red"
                  : selectedTable.includes("9")==true
                  ? "yellow"
                  : "green",
            }}
          >
            <div className="d-flex flex-column">
              <FaCircle className="res-chair-large" />
              <FaCircle className="res-chair-large my-2" />
              <FaCircle className="res-chair-large" />
            </div>
            <img src={RectangleTable} className="res-table-large" />
            <div className="d-flex flex-column">
              <FaCircle className="res-chair-large" />
              <FaCircle className="res-chair-large my-2" />
              <FaCircle className="res-chair-large" />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
