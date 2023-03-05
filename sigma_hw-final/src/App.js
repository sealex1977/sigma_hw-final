import './assets/scss/style.scss';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';


function App() {
  return (
    <div className="wrapper">
      <Header />
      <AboutUs />
      <div className="container">
        <h1>heelo</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;
