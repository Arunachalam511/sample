import React from "react";
import { useNavigate } from "react-router-dom";
import FooterLogo from "../../assests/images/Asset_20@4x.png";
import "./Home.css";
import introImage from "../../assests/icons_assets/restauranfood.jpg";
import greeksalad from "../../assests/icons_assets/greek salad.jpg";
import bruchetta from "../../assests/icons_assets/bruchetta.svg";
import lemondessert from "../../assests/icons_assets/lemon dessert.jpg";
import Delivery from "../../assests/icons_assets/delivery.svg";
import paper from "../../assests/icons_assets/send-plane-svgrepo-com.svg"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../Components/Header";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
   <Header/>

      <main>
        <section className="intro">
          <article style={{ marginTop: "4%" }}>
            <div
              style={{ fontSize: "4rem", color: "#F4CE14", lineHeight: "50pt" }}
            >
              Little Lemon
            </div>
            <div
              style={{ fontSize: "2.5rem", color: "white", lineHeight: "55pt" }}
            >
              Chicago
            </div>
            <div style={{ fontSize: "1.125rem", color: "white", width: "50%" }}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </div>
            <button
              style={{
                height: "15%",
                width: "30%",
                borderRadius: "16px",
                border: "none",
                backgroundColor: "#F4CE14",
                fontSize: "1.125rem",
                fontWeight: "bold",
                marginTop: "5%",
              }}
              onClick={(e)=>{navigate("/booking")}}
            >
              Reserve a Table
            </button>
          </article>
          <article className="d-flex justify-content-end">
            <img
              src={introImage}
              width="60%"
              height="100%"
              style={{
                marginTop: "5%",
                objectFit: "cover",
                borderRadius: "16px",
              }}
            />
          </article>
        </section>

        <section className="menu-selection">
          <div style={{ fontSize: "3.5rem" }}>This Weeks Specials!</div>
          <button
            style={{
              borderRadius: "16px",
              border: "none",
              backgroundColor: "#F4CE14",
              fontSize: "1.125rem",
              fontWeight: "bold",
              padding: "1.5% 2.5%",
            }}
          >
            Online Menu
          </button>
        </section>

        <section className="menu-cards">
          <div className="card-deck">
          <div className="card border-0" style={{ borderRadius: "16px 16px 0px 0px" }}>
              <img
                className="card-img-top"
                style={{ borderRadius: "16px 16px 0px 0px", maxHeight: "240px",objectFit:"cover" }}
                src={greeksalad}
                alt="Card image cap"
              />
              <div
                className="card-body px-4"
                style={{ backgroundColor: "#EDEFEE" }}
              >
                <h5 className="card-title d-flex justify-content-between mb-4 mt-2 ">
                  <div>Greek Salad</div>
                  <div style={{ color: "#EE9972" }}>$12.99</div>
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "1rem", color: "#495E57" }}
                >
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
              </div>
              <div
                class="card-footer w-100 p-4"
                style={{ backgroundColor: "#EDEFEE", border: "none" }}
              >
                <div style={{ color: "#333333", fontWeight: "bold" }}>
                Order a Delivery
                  <span style={{marginLeft:"10px"}}>
                    <img src={Delivery} width="10%" />
                  </span>
                </div>
              </div>
            </div>
            <div className="card border-0" style={{ borderRadius: "16px 16px 0px 0px" }}>
              <img
                className="card-img-top"
                style={{ borderRadius: "16px 16px 0px 0px", maxHeight: "240px",objectFit:"cover"}}
                src={bruchetta}
                alt="Card image cap"
              />
              <div
                className="card-body  px-4"
                style={{ backgroundColor: "#EDEFEE" }}
              >
                <h5 className="card-title d-flex justify-content-between mb-4 mt-2 ">
                  <div>Bruchetta</div>
                  <div style={{ color: "#EE9972" }}>$5.99</div>
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "1rem", color: "#495E57" }}
                >
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
              </div>
              <div
                class="card-footer w-100 py-4"
                style={{ backgroundColor: "#EDEFEE", border: "none" }}
              >
                <div style={{ color: "#333333", fontWeight: "bold" }}>
                Order a Delivery
                  <span style={{marginLeft:"10px"}}>
                    <img src={Delivery} width="10%" />
                  </span>
                </div>
              </div>
            </div>
            <div className="card border-0" style={{ borderRadius: "16px 16px 0px 0px" }}>
              <img
                className="card-img-top"
                style={{ borderRadius: "16px 16px 0px 0px", maxHeight: "240px", objectFit:"cover" }}
                src={lemondessert}
                alt="Card image cap"
              />
              <div
                className="card-body  px-4"
                style={{ backgroundColor: "#EDEFEE" }}
              >
                <h5 className="card-title d-flex justify-content-between mb-4 mt-2 ">
                  <div>Lemon Dessert</div>
                  <div style={{ color: "#EE9972" }}>$5.00</div>
                </h5>
                <p
                  className="card-text"
                  style={{ fontSize: "1rem", color: "#495E57" }}
                >
                  This comes straight from grandma’s recipe book, every last
                  ingredient has been sourced and is as authentic as can be
                  imagined.
                </p>
              </div>
              <div
                class="card-footer w-100 p-4"
                style={{ backgroundColor: "#EDEFEE", border: "none" }}
              >
                <div style={{ color: "#333333", fontWeight: "bold" }}>
                  Order a Delivery
                  <span style={{marginLeft:"10px"}}>
                    <img src={Delivery} width="10%" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                   <img src = {FooterLogo} style={{width:"20%"}}/>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Doormat Navigation</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        <li><a href="#">Reservations</a></li>
                        <li><a href="#">Order Online</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Contact Us</h5>
                    <ul class="list-unstyled text-muted">
                        <li>Little Lemon Restaurant,</li>
                        <li>E 83rd St,</li>
                        <li>South Chicago,</li>
                        <li>Chicago</li>
                        <li>+1 9876452130</li>
                        <li>littlelemon@gmail.com</li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Recipient Details</h5>
                    
                    <form action="#">
                        <div class="input-group mb-3">
                            <input class="form-control" type="text" placeholder="Recipient's E-mail Address" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-light" id="button-addon2" type="button"><img height="20px" style={{backgroundColor:"#fff"}} src = {paper}/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </footer>
    </div>
  );
}
