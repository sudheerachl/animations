import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './About';

function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path="/about" element={<About />} />
       {/* Remove other routes and components */}
     </Routes>
   </BrowserRouter>
 );
}

export default App;
