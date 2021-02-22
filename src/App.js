import logo from './logo.svg';
import './scss/custom.scss';
import Navigation from './parts/Navigation'
import Banner from './parts/Banner'
import FeaturedImage from './parts/FeaturedImage'
import ProductList from './parts/ProductList'
function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <FeaturedImage />
      <ProductList />
    </div>
  );
}

export default App;
