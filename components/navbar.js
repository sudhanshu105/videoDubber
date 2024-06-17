import React, { useState, useEffect } from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!hoveredLink  || hoveredLink === 'pricing') { 
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }

      if (window.scrollY < 10) {
        setIsScrolled(false);
      }
    };
        
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hoveredLink]);
  

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  const handleLinkMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleLinkMouseLeave = () => {
    setHoveredLink(null);
  };

  const dropdownContent = (link) => {
    switch (link) {
      case 'products':
        return <div className={styles.dropdownproducts}>Content</div>;
      case 'Use Cases':
        return <div className={styles.dropdownproducts}>Content</div>;
      case 'Resources':
        return <div className={styles.dropdownproducts}>Content</div>;
      case 'For Business':
        return (
        <div className={styles.dropdownBusiness}>
            <div className={styles.inner} ><h2>For Business</h2>
        <div className={styles.business1}>
            <img src='/business_one.png' /> <span><h2>VEED for Business</h2>
            <p>Video for teams that require collabaration, access and privacy</p></span>
        </div>
        <div className={styles.business2}>
        <img src='/business_two.png' /> <span><h2>Security & Privacy</h2>
        <p>Data Privacy, SSO and more</p></span>
        </div></div>
        </div>
    );
    
      default:
        return null;
    }
  };

  return (
    <div>
      <nav
        className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isExpanded ? styles.expanded : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.logo}>
          <h1>VEED</h1>
        </div>
        <div className={styles.navLinks}>
        {['products', 'Use Cases', 'Resources', 'For Business', 'pricing'].map((link) => (
  <div
    key={link}
    className={`${styles.navLink} ${link === 'pricing' ? '' : ''}`}
    onMouseEnter={() => {
      if (link === 'pricing') {
        handleLinkMouseLeave(link); // Close any open dropdowns
      } else {
        handleLinkMouseEnter(link);
        // handleLinkMouseLeave(link); // Handle other links normally
      }
    }}
    // onMouseLeave={handleLinkMouseLeave}
  >
    <a href={`#${link}`}>
      {link.charAt(0).toUpperCase() + link.slice(1)}
      {link !== 'pricing' && ( // Render arrow only if link is not 'pricing'
        <span className={`${styles.arrow} ${hoveredLink === link ? styles.arrowUp : styles.arrowDown}`}>
          <img height='12px' width='12px' src='/down-arrow.png' alt='arrow' />
        </span>
      )}
    </a>
    {/* {hoveredLink === link && (
      <div className={styles.dropdownContainer}>
        
        {dropdownContent(hoveredLink)}
      </div>

    )} */}
  </div>
))}

        </div>
        <div className={styles.navOptions}>
          <a href="#products">Book a Demo</a>
          <div className={styles.login}><a href="#UseCases">Login</a></div>
          <div className={styles.signup}><a href="#services">Signup</a></div>
        </div>
        <div className={styles.plusIcon}>+</div>
      </nav>
      {hoveredLink && (
        <div
          className={styles.dropdownContainer}
          onMouseEnter={() => handleLinkMouseEnter(hoveredLink)}
          onMouseLeave={handleLinkMouseLeave}
        >
          {dropdownContent(hoveredLink)}
        </div>
      )}
    </div>
  );
};

export default Navbar;
