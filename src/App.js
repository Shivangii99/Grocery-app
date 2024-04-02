import React from 'react'
import {Navbar} from './Components/Navbar.js'
import './App.css';
import { Hero } from './Components/Hero.js';
import Items from './Components/Items.js';
import {Static} from './Components/Static.js';
import {Static2} from './Components/Static2.js';
import Customer from './Components/Customer.js';
import {Footer } from './Components/Footer.js'
import {Featured } from './Components/Featured.js'


function App() {
  return (
    <>
    <Navbar/>
    <Hero className='heroSec'/>
    <Items/>
    <Featured/>
    <Static/>
    <Featured/>
    <Static2/>
    <Customer/>
    <Footer/>
    </>
  );
}

export default App;
