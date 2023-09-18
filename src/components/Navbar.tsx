import { useEffect, useRef, useState } from 'react';
import logo from '../assets/icons/logo.jpeg';

export default function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false)
    const btnRef = useRef<HTMLDivElement>(null)
    const mobileNav = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        setIsNavOpen(prev => !prev)
    }
    useEffect(() => {
        if(!mobileNav.current || !btnRef.current) return;
        
        if (!isNavOpen) {
            mobileNav.current.style.top = '-40%';
            btnRef.current?.classList.remove('nav-open');
        } else {
          mobileNav.current.style.top =
            btnRef.current.closest('.navbar')?.clientHeight + 'px';
          btnRef.current?.classList.add('nav-open');
        }
    }, [isNavOpen])
    useEffect(() => {
        btnRef.current?.addEventListener('click', handleClick)

        return () => {
            btnRef.current?.removeEventListener('click', handleClick)
        }
    }, [])
  return (
    <>
      <div className="navbar">
        <img src={logo} alt="logo" width="80px" />
        <nav className="desktop-nav">
          <li>Home</li>
          <li>Explore</li>
          <li>About Us</li>
          <li>Our Highlights</li>
          <li>Get in Touch</li>
        </nav>
        <div className="btn-toggle-nav" ref={btnRef}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
      <nav className="mobile-nav" ref={mobileNav}>
        <li>Home</li>
        <li>Explore</li>
        <li>About Us</li>
        <li>Our Highlights</li>
        <li>Get in Touch</li>
      </nav>
    </>
  );
}
