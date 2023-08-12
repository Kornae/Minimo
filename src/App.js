import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';

function App() {
  return (
    <div classNameName="App">
      <div id='main-section' className='container-fluid'>
        <div id='navbar'><Navbar /></div>
        <div id='section-1'><Section1 /></div>
      </div>

    </div>
  );
}

export default App;
