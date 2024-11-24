import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../Common/ScrollToTop';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout; 