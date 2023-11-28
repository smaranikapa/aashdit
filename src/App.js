import './App.css';
import { Routes,  Route, BrowserRouter } from "react-router-dom"
import   LoginForm  from './Components/LoginForm'
import Edit from './Components/Edit'
function App() {
  return (
 <div>
  <BrowserRouter>
  <Routes>
    <Route exact path='/' element={<LoginForm/>}></Route>
    <Route exact path='/edit' element={<Edit/>}></Route>
  </Routes>
  </BrowserRouter>
 </div>
  );
}

export default App;
