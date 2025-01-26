import './App.css';
import { products } from './constants/products';
import Card from './components/Card';
import Badge from './components/Badge';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <main className='container'>
        {products.map((product) => (<Card props={product} />))}
      </main>
      <section className='container'>
        <Badge />
        <Banner />
      </section>

    </>
  );
}

export default App;
