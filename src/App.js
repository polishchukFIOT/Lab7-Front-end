// App.js
import React from 'react';
import Header from './components/Header.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import Gallery from './components/Gallery.js';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <Gallery/>
    </div>
  );
}

export default App;
