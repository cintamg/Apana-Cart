import './App.css';
import Navebar from './Components/Navebar';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';

function App() {
  const productList = [
    {
      price : 7000,
      name : "Redmi 7A",
      quantity : 0
    },
    {
      price : 20000,
      name : "Moto Note 6",
      quantity : 0
    }
  ];
  return (
    <>
    <Navebar/>
    <main className='container mt-5'>
    <ProductList productList={productList}/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
