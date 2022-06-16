import {BrowserRouter} from 'react-router-dom';


import Routes from './routes/index';

import './style/root/root.css';

function App() {
  return (
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
