
import * as React from 'react';
import ResponsiveAppBar from './Components/Header/Header';
import Navigation from './Naviagtion/Naviagation';
import Footer from './Components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

function App() {
  return (
    <div>
    <ResponsiveAppBar/>
    <Navigation/>
    {/* <Footer/> */}
    </div>
  )
}

export default App;
