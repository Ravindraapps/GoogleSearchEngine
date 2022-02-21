import logo from './logo.svg';
import './App.css';
import { Main } from './componants/Main';
import {Routes,Route} from "react-router-dom"
import { Search } from './componants/Searchpage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
