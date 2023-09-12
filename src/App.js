import { useEffect } from 'react';
import './App.css';
import Map from './Map';

function App() {
  return (
    <div className='App'>
      <div id='map' style={{ width: '500px', height: '500px' }}></div>
      <Map />
    </div>
  );
}

export default App;
