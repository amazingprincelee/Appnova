import React from "react";
import { FaBold, FaCrown, FaCompass } from 'react-icons/fa';


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
        <div className="flex flex-wrap items-center justify-center gap-8 mt-3">
          <div className="flex items-center">
            <FaBold size={30} />
            <span className="ml-2">BOURBON</span>
          </div>
          <div className="flex items-center">
            <FaCompass size={30} />
            <span className="ml-2">GYNESCOPE</span>
          </div>
          <div className="flex items-center">
            <FaBold size={30} />
            <span className="ml-2">BOURBON</span>
          </div>
          <div className="flex items-center">
            <FaCompass size={30} />
            <span className="ml-2">GYNESCOPE</span>
          </div>
          <div className="flex items-center">
            <FaCrown size={30} />
            <span className="ml-2">KingSoo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;