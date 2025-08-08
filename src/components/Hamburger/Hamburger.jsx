'use client';

import './hamburger.css';
import { useState, useRef, useEffect } from 'react';
import Hamburger from 'hamburger-react';

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Prevent page scroll when menu is open
useEffect(() => {
  if (open) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return () => {
    document.body.style.overflow = 'auto';
  };
}, [open]);


  return (
    <div className="hamburger-one" ref={menuRef}>
      <Hamburger 
        size={24}
        toggled={open}
        toggle={setOpen}
      />

      {open && (
        <div>
          <main>
            <nav className="navbar">
              <div className="ham-links">
                <span><a href="#home" onClick={() => setOpen(false)}>Home</a></span>
                <span><a href="#about" onClick={() => setOpen(false)}>About</a></span>
                <span><a href="#services" onClick={() => setOpen(false)}>Our Services</a></span>
                <span><a href="#why" onClick={() => setOpen(false)}>Why Choose Us</a></span>
                <span><a href="#faq" onClick={() => setOpen(false)}>FAQ</a></span>
              </div>
            </nav>
          </main>
        </div>
      )}
    </div>
  );
}
