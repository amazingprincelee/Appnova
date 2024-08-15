import React from "react";
import { FaTwitter, FaLeaf } from 'react-icons/fa';


function Header() {
  const customStyle = {
    container: {
      width: "876.5px",
      height: "372.74px",
      left: "126px",
      gap: "40px",
    },
    marginLeft: "100px",
    fontFamily: "Poppins",
    fontWeight: "600",
    textAlign: "left",
    marginTop: "276px",
    learnButton: {
      width: "226px",
      height: "60px",
      lineHeight: "24px",
      fontSize: "18px",
      backgroundColor: "#00C6C3",
      color: "black",
    },
    anotherDiv: {
      marginTop: "170px",
      height: "110px",
      backgroundColor: "#52516580",
    },
    sunshineyFont: {
      fontFamily: "'Sunshiney', cursive",
    },
  };

  return (
    <div className="bg-[url('/images/bg-photo.png')] bg-cover bg-center h-[650px] text-white">
      <div className="flex items-center justify-left" style={customStyle.container}>
        <div className="font-sans" style={customStyle}>
          <div>
            <h1 style={{ fontSize: "48px" }}>Empower Your Business</h1>
            <h1 style={{ fontSize: "48px" }}>
              With Our <span style={{ color: "#00C6C3" }}>Software</span>
            </h1>
            <h1 style={{ fontSize: "48px" }}>Solutions</h1>
          </div>

          <p
            style={{
              fontFamily: "18px",
              lineHeight: "27px",
              letter: "4%",
              fontWeight: "400",
              marginBottom: "20px",
            }}
          >
            Simplify your operations with custom software <br /> designed to
            solve your unique business challenges
          </p>

          <button style={customStyle.learnButton}>Learn more</button>
        </div>
      </div>

      <div style={customStyle.anotherDiv}>
        <p className="text-center p-3">Trusted by <span style={{color: "#00C6C3"}}>50+</span> Partners & Customers</p>
        <div className="flex items-center justify-center gap-[79px] mt-3">
          <div>BOURBON</div>
          <div style={customStyle.sunshineyFont}>GYNESCOPE</div>
          <div className="flex justify-between"><FaTwitter size={30} /> BOURBON</div>
          <div style={customStyle.sunshineyFont}>GYNESCOPE</div>
          <div className="flex justify-between"><FaLeaf size={30} />KingSoo</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
