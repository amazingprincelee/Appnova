import React from "react";
import Image from "next/image";

function Details() {
  const customStyle = {
    learnButton: {
      width: "192px",
      height: "56px",
      radius: "4px",
      parding: "18px, 32px, 18px, 32px",
      backgroundColor: "#020024",
      color: "#ffffff",
      marginTop: "10px",
    },

    boldText: {
      fontFamily: "Poppins",
      fontSize: "32px",
      fontWeight: "600",
      lineHeight: "48px",
      textAlign: "left",
    },

    smallParagragh: {
      fontFamily: "Poppins",
      fontSize: "8px",
      fontWeight: "400",
      lineHeight: "27px",
      letterSpacing: "0.04em",
      textAlign: "left",
    },
  };

  return (
    <div>
      <div
        className="flex justify-center items-center m-5"
        style={{ marginTop: "80px" }}
      >
        <div>
          <div className="" style={{ width: "486.63px" }}>
            <p className="font-bold" style={customStyle.boldText}>
              Transform Your Healthcare experience with Our Smart EMR Solutions
            </p>
            <p style={customStyle.smallParagragh}>
              Have full control of your hospital and manage all your patients
              and staff records and activities with our Electronic Management
              System (EMR)
            </p>
            <p style={customStyle.smallParagragh}>
              Enhance data accuracy, and improve clinical outcomes with our
              advanced EMR software
            </p>
            <p style={customStyle.smallParagragh}>
              Experience real-time updates, and comprehensive patient management
              all in one platform
            </p>
          </div>
          <button style={customStyle.learnButton}>Learn more</button>
        </div>

        <div>
          <Image src="/images/chart-image.png" width={500} height={500} />
        </div>
      </div>
    </div>
  );
}

export default Details;
