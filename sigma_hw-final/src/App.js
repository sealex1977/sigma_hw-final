import './assets/scss/style.scss';

import Header from './components/Header/Header';
import ModernInterior from './components/ModernInterior/ModernInterior';
import AboutUs from './components/AboutUs/AboutUs';
import SuccessfulWorking from './components/SuccessfulWorking/SuccessfulWorking'
import Footer from './components/Footer/Footer';
import CompletedWorkx from './components/CompletedWork/CompletedWork';
import CompletedWork from './components/CompletedWork/CompletedWork';
import Testimonials from './components/Testimonials/Testimonials';
import LatestNews from './components/LatestNews/LatestNews';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <ModernInterior />
      <AboutUs />
      <SuccessfulWorking />
      <CompletedWork />
      <Testimonials />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
