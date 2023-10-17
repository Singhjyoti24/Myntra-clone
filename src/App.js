import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { useState } from 'react';

function App() {
  const [wishCount, setWishCount] = useState(0)
  const [addCount, setAddCount] = useState(0)

  return (
    <div className="App">
      <Navbar wishCount={wishCount} addCount={addCount} />
      <Main wishCount={wishCount} setWishCount={setWishCount} addCount={addCount} setAddCount={setAddCount} />
    </div>
  );
}

export default App;
