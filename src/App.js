// import './App.css';
import './CSS/Quiz.css'
import './CSS/Boxes.css'
// import { render } from '@testing-library/react';
import Box1 from './Components/Boxes/Box1';
import Quiz from './Components/Quiz/Quiz';

function App() {

  return (

    < div className="App" >
      <Quiz/>
      {/* <Box1/> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header> */}
    </div >
  );
}

export default App;
