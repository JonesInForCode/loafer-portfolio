import React from 'react';

export default function Footer() {
  return(
  <footer className='footer'>
    <p className='footer-content'>&copy; {new Date().getFullYear()} | <a href="https://github.com/author">Author</a></p>
  </footer>
  )
    }