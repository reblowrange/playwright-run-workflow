import * as React from 'react';
import './App.css';
import Footer from './Footer';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my app</h1>
      </header>
      <Footer/>
    </div>
  );
}

export default App;