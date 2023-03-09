import { BrowserRouter, Routes, Route } from "react-router-dom";

import './assets/scss/style.scss';

import Header from './components/Header/Header';
import ModernInterior from './components/ModernInterior/ModernInterior';
import AboutUs from './components/AboutUs/AboutUs';
import SuccessfulWorking from './components/SuccessfulWorking/SuccessfulWorking'
import Footer from './components/Footer/Footer';
import CompletedWork from './components/CompletedWork/CompletedWork';
import Testimonials from './components/Testimonials/Testimonials';
import LatestNews from './components/LatestNews/LatestNews';
import SignUp from './components/SignUp/SignUp';
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";



function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
      <Header />
      <ModernInterior />
      <WhatWeDo />
      <AboutUs />
      <SuccessfulWorking />
      <CompletedWork />
      <Testimonials />
      <LatestNews />
      <SignUp />
      <Footer />
    </div>
  );
}

export default App;
