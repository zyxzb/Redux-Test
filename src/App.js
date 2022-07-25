import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className="App">
            <div className="top">
                <Navbar/>
            </div>
            <div className="center">
                <Sidebar/>
                <Main/>
            </div>
            <div className="bottom">
              <Footer/>
            </div>
        </div>
    );
}

export default App;
