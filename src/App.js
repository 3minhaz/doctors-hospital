import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div >
      <Router>
        <Header></Header>
        <Switch>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
