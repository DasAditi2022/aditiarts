import React from 'react';
import './App.css';
import Header from './global_ele/header/Header';
import Home from './global_ele/home/Home';
import About from './global_ele/about/About';
import MyArt from './global_ele/MyArt/MyArt';
import Contact from './global_ele/contact/Contact';
import Footer from './global_ele/footer/Footer';
function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
        <About/>
        <MyArt/>
        <Contact/>
        <Footer/>
      </main>

    </>
  );
}

export default App;
