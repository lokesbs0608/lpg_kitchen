
import * as React from 'react';
import ResponsiveAppBar from './Components/Header/Header';
import Navigation from './Naviagtion/Naviagation';
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css'

function App() {
  return (
    <div>
    <ResponsiveAppBar/>
    <div className='scroll_fix' style={{marginTop:'4rem',marginBottom:'4rem'}}>
    <Navigation/>
    </div>
    <Footer/>
    </div>
  )
}

export default App;
