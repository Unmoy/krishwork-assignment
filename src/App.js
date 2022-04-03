import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Overview from "./components/Overview";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Overview />} />
          <Route path="calender" element={<Calender />} />
          <Route path="message" element={<Message />} />
          <Route path="patient" element={<PatientList />} />
          <Route path="settings" element={<Settings />} />
          <Route path="payment" element={<Payment />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

const Calender = () => {
  return <div className="text">Calender</div>;
};
const Message = () => {
  return <div className="text">Message</div>;
};
const PatientList = () => {
  return <div className="text">PatientList</div>;
};
const Settings = () => {
  return <div className="text">Settings</div>;
};
const Payment = () => {
  return <div className="text">Payment</div>;
};
