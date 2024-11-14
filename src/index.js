import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Navbar />
    <h1 style={{ height: 750 }}></h1>
    <Footer />
  </div>
);
