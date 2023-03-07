import './assets/scss/style.scss';

import Header from './components/Header/Header';
import ModernInterior from './components/ModernInterior/ModernInterior';
import AboutUs from './components/AboutUs/AboutUs';
import SuccessfulWorking from './components/SuccessfulWorking/SuccessfulWorking'
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div className="wrapper">
      <Header />
      <ModernInterior />
      <AboutUs />
      <SuccessfulWorking />
      <Footer />
    </div>
  );
}

export default App;
