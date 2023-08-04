import React, { useEffect, useState } from 'react';
import './NavBar.css';
import Logo1 from './netflix-logo-png-2584.png';



export default function NavBar() {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
          <img className='nav__logo' src={Logo1} alt="Netflix Logo" />
    </div>
  )
}

