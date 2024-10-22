import './App.css';
import ContentContainer from './components/contentContainer/contentContainer.js';
import Presentation from './components/presentation/Presentation.js';

function App() {
  return (
    <div className="App">
      <div className='c1'>
        <Presentation/>
      </div>
      <div className='c2'>
        <ContentContainer/>
      </div>
    </div>
  );
}

export default App;
