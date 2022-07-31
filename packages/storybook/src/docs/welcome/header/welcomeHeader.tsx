import React from 'react'

export default function WelcomeHeader() {
  return (
    <div style={{
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundImage: "url('/images/WelcomePageCover.png')",
      borderRadius: "16px",
      border: '3px solid currentColor',
      marginBottom: '45px'
    }}>
      <div style={{
        width: "100%",
        marginTop: "0",
        fontSize: "40px",
        lineHeight: "48px",
        fontWeight: "600",
        letterSpacing: "-0.24px",
        textAlign: "left",
        display: "grid",
        borderRadius: "4px",
        padding: "24px",
      }}>
        <span style={{
          zIndex: '1',
          alignContent: 'center'
        }}>
          Hansanghyeon Design System
        </span>
      </div>
    </div >
  );
}
