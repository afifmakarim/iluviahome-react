import logo from './logo.svg';
import './scss/custom.scss';
import Navigation from './parts/Navigation'
import Banner from './parts/Banner'
import FeaturedImage from './parts/FeaturedImage'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <FeaturedImage />
    </div>
  );
}

export default App;
