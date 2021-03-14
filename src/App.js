// import './App.css';
// import './CSS/Quiz.css'
// import './CSS/Boxes.css'
// import './CSS/button.css'
// import { render } from '@testing-library/react';
// import Box1 from './Components/Boxes/Box1';
// import Quiz from './Components/Quiz/Quiz';
// import Button from './Components/Buttons-4.1/Button';
import './CSS/cards.css';
import Cards from './Components/Cards-4.2/Cards';

function App() {

  return (

    < div className="App" >
      <div className="flex">
        <Cards url="https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="random title 1" description="description1" shareLink="share1" exploreLink="explore1" />
        <Cards url="https://images.pexels.com/photos/3782464/pexels-photo-3782464.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="random title 2" description="description2" shareLink="share2" exploreLink="explore2" />
        <Cards url="https://images.pexels.com/photos/3756669/pexels-photo-3756669.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" title="random title 3" description="description3" shareLink="share3" exploreLink="explore3" />
      </div>
      {/* <div className="container">
        <Button weight={700} btnText="important" />
        <Button weight={300} btnText="Not important" />
      </div> */}
      {/* <Quiz/> */}
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
