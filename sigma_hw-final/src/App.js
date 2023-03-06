import './assets/scss/style.scss';

import Header from './components/Header/Header';
import ModernInterior from './components/ModernInterior/ModernInterior';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <ModernInterior />
      <AboutUs />

      <Footer />
    </div>
  );
}

export default App;
