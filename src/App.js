import AppNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Footer from './components/Footer';
import AppRouter from './AppRouter';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='d-flex justify-content-center'>
        <img width={400} className='img-fluid' src='binchem-logo.png' />
      </div>
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
