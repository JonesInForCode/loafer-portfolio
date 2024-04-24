import React from "react";

export default function Footer() {
  return(
  <footer className='footer' style={{display: 'flex', justifyContent: 'space-between'}}>

      <p className='footer-content'>&copy; {new Date().getFullYear()} <a href="https://github.com/TheMightyLoafer">Nicolas Jones</a></p>
      <p><span>Created using React + Vite + Firebase</span></p>
  </footer>
  )
    }