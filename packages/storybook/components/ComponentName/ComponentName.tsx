import React from 'react'

const ComponentName = ({ children }) => (
  <div style={{
    "width": "100%",
    "marginTop": "0",
    "marginBottom": "32px",
    "fontSize": "40px",
    "lineHeight": "48px",
    "fontWeight": "600",
    "letterSpacing": "-0.24px",
    "textAlign": "left",
    "display": "grid",
    "borderRadius": "4px",
    "padding": "40px 24px",
    "backgroundImage": "url('/images/component-background.png')",
    "backgroundRepeat": "no-repeat",
    "backgroundSize": "cover",
  }}>
    {children}
  </div>
)
export default ComponentName;
