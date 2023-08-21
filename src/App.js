import './App.css';
import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Section2 from './components/Section2';

function App() {
  return (
    <div classNameName="App">
      <div id='main-section' className='container-fluid'>
        <div id='navbar' className='container'><Navbar /></div>
        <div id='section-1' className='container'><Section1 /></div>
        <div id='section-2'><Section2 /></div>
      </div>

    </div>
  );
}

export default App;
