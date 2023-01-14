import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../index.css';
import Home from '../pages/Home';
import Hills from '../pages/hills';
import Lakes from '../pages/lakes';
import Forest from '../pages/forest';
import Tribes from '../pages/tribes';
import Openview from '../pages/openview';
// import Goat from '../pages/goat';

const Routes11 = () => {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hills" element={<Hills />} />
            <Route path="/lakes" element={<Lakes />} />
            <Route path="/forest" element={<Forest />} />
            <Route path="/tribes" element={<Tribes />} />
            <Route path="/openview" element={<Openview />} />
            {/* <Route path="/goat" element={<Goat/>}/> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default Routes11;
