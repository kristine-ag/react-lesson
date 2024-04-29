import AddStudent from './AddStudent';
import './App.css';
import Home from './home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootswatch@4.5.2/dist/minty/bootstrap.min.css"/>
      <div className="App">
        <Routes>
          <Route exact path = "/" element={<Home />}/>
          <Route exact path = "/addstudent" element={<AddStudent />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
