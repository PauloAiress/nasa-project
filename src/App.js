import { BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'
import Images from './components/Images'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/"  exact/>
        <Route component={NasaImage} path="/nasaimages" />
      </div>
    </BrowserRouter>
  );
}

export default App;
