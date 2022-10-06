import React from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Homepage from './pages/Homepage/Homepage';
import Profile from './pages/Profile/Profile';
import styles from './App.module.scss';

function App() {
  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header />
      <div className="flex-fill">
        <Homepage />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}
export default App;
