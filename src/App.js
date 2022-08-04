import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs, FindUs, Footer, Header, Intro, SpecialMenu } from './pages';
import { Navbar } from './components';
import './App.css';
import { Layout } from './pages/Layout';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <FindUs />
    <Footer />
  </div>
);

export default App;

// function App(){
// return(
// <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Layout/>}/>
  
//   </Routes>
// </BrowserRouter>  
// );


// }

// export default App;