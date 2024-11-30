import { useState } from "react";
import sdd from "./assets/bourbon-ad-2.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <img src="https://www.sddistillery.com/logo-500w.png" />
        </div>
        <p>PRESENTS</p>
        <h2
          style={{ fontWeight: "lighter", fontSize: "48px", padding: "30px 0" }}
        >
          Our 10th Anniversary Party!
        </h2>
        <h1>HOLIDAY JAM</h1>
        <div>
          <img src={sdd} />
        </div>
        <h2 style={{ fontWeight: "lighter" }}>Saturday, December 21st 2024</h2>
        <h3>@ 7:00PM</h3>

        <div></div>
      </div>
    </>
  );
}

export default App;
