import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faBook, 
  faEnvelope, 
  faChartBar, 
  faCog,
  faBars,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import styles from './Navbar.module.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">서현이의 수학나라</Link>
      </div>

      <button 
        className={styles.menuToggle}
        onClick={toggleMenu}
        aria-label="메뉴 열기/닫기"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faHome} /> 홈
          </Link>
        </li>
        <li>
          <Link to="/learning" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faBook} /> 학습하기
          </Link>
        </li>
        <li>
          <Link to="/statistics" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faChartBar} /> 통계
          </Link>
        </li>
        <li>
          <Link to="/messages" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faEnvelope} /> 메시지
          </Link>
        </li>
        <li>
          <Link to="/settings" onClick={() => setIsMenuOpen(false)}>
            <FontAwesomeIcon icon={faCog} /> 설정
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar; 