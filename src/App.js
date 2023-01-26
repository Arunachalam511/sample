import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Booking from "./pages/booking/Booking";
import Preconfirm from "./pages/preconfirmation/Preconfirmation";
import Otpverify from "./pages/otpverify/Otpverify";
import Postconfirmation from "./pages/postconfirmation/Postconfirmation";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/preconfirm/:bookingDate/:slot/:selectedTable" element={<Preconfirm/>}/>
        <Route path="/otp/:bookingDate/:slot/:selectedTable" element={<Otpverify/>}/>
        <Route path = "/postconfirm/:bookingDate/:slot/:selectedTable" element = {<Postconfirmation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
