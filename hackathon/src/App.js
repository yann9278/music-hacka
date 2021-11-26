import { Route, Routes } from 'react-router-dom';
import Top10List from './Top10List';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <Routes>
    <Route exacth path='/' element={<Top10List />}></Route>
    </Routes> */}
    <Top10List />
    </div>
  );
}

export default App;
